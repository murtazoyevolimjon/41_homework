/* eslint-disable no-unused-vars */
import jwt from "jsonwebtoken";
import { ApiError } from "../middleware/apiError.js";

// CREATE ACCESS TOKEN
export const generateAccessToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: process.env.JWT_ACCESS_EXPIRES,
  });
};

// CREATE REFRESH TOKEN
export const generateRefreshToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: process.env.JWT_REFRESH_EXPIRES,
  });
};

// VERIFY TOKEN
export const verifyToken = (token, secret) => {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    throw new ApiError(401, "Token yaroqsiz yoki muddati tugagan");
  }
};

// PROTECT MIDDLEWARE
export const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return next(new ApiError(401, "Token mavjud emas"));
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyToken(token, process.env.JWT_ACCESS_SECRET);
    req.user = decoded.id;
    next();
  } catch (error) {
    return next(error);
  }
};

export const adminOnly = (req, res, next) => {
  if (req.user.role !== "admin") {
    return next(new ApiError(403, "Admin uchun ruxsat berilgan"));
  }
  next();
};

export const deliveryStaffOnly = (req, res, next) => {
  if (req.user.role !== "delivery_staff") {
    return next(new ApiError(403, "Foydalanuvchi Delivery Staff emas!"));
  }
  next();
};