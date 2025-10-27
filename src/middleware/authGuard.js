import { verifyToken } from "../helper/jwt.js";
import config from "../config/config.js";
import customerModel from "../models/customer.model.js";
import delivery_staffModel from "../models/deliveryStaff.model.js";

export const authCustomer = async (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header || !header.startsWith("Bearer "))
      return res.status(401).json({ success: false, message: "Token yuq" });

    const token = header.split(" ")[1];
    const decoded = verifyToken(token, config.jwt.accessSecret);
    if (!decoded)
      return res
        .status(401)
        .json({ success: false, message: "Muddati utgan token" });

    const user = await customerModel.findById(decoded.id).select("-password");
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "CUSTOMER NOT FOUND" });

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

export const authStaff = async (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header || !header.startsWith("Bearer "))
      return res.status(401).json({ success: false, message: "Token yuq" });

    const token = header.split(" ")[1];
    const decoded = verifyToken(token, config.jwt.accessSecret);
    if (!decoded)
      return res
        .status(401)
        .json({ success: false, message: "Muddati utgan token" });

    const user = await delivery_staffModel
      .findById(decoded.id)
      .select("-password");
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "STAFF NOT FOUND" });

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
