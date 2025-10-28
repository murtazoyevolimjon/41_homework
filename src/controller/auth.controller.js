import Customer from "../model/customersModel.js";
import {
  verifyToken,
  generateAccessToken,
  generateRefreshToken,
} from "../helper/jwt.js";
import { ApiError } from "../middleware/apiError.js";

export const authController = {
  signup: async (req, res, next) => {
    try {
      const { name, phone, password, email } = req.body;
      const customerExist = await Customer.findOne({ email });
      if (customerExist) {
        return next(new ApiError(403, "Email oldin ro'yxatdan o'tgan"));
      }

      const newCustomer = await Customer.create({
        name,
        phone,
        email,
        password,
      });

      const accessToken = generateAccessToken(newCustomer);
      const refreshToken = generateRefreshToken(newCustomer);

      res.status(201).json({
        success: true,
        message: "Muvaffaqiyatli ro'yxatdan o'tdingiz",
        accessToken,
        refreshToken,
      });
    } catch (error) {
      next(error);
    }
  },

  signin: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const customerData = await Customer.findOne({ email });
      if (!customerData) return next(new ApiError(404, "User topilmadi"));

      const isValidPassword = await customerData.comparePassword(password);
      if (!isValidPassword)
        return next(new ApiError(401, "Email yoki parol noto'g'ri"));

      const accessToken = generateAccessToken(customerData);
      const refreshToken = generateRefreshToken(customerData);

      res.status(200).json({
        success: true,
        accessToken,
        refreshToken,
      });
    } catch (error) {
      next(error);
    }
  },

  profile: async (req, res, next) => {
    try {
      const customer = await Customer.findById(req.user).select("-password");
      if (!customer) return next(new ApiError(404, "User topilmadi"));

      res.json(customer);
    } catch (error) {
      next(error);
    }
  },

  updateAccess: async (req, res, next) => {
    try {
      const { refreshToken } = req.body;
      if (!refreshToken) return next(new ApiError(401, "Refresh token yo'q"));

      const decoded = verifyToken(refreshToken, process.env.JWT_REFRESH_SECRET);
      const customer = await Customer.findById(decoded.id);
      if (!customer) return next(new ApiError(404, "User topilmadi"));

      const accessToken = generateAccessToken(customer);

      res.status(200).json({
        success: true,
        accessToken,
        refreshToken,
      });
    } catch (error) {
      next(error);
    }
  },
};
