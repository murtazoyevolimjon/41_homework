import { verifyToken } from "../helper/jwt.js";
import { config } from "../config/db.js";
import customersModel from "../models/customers.model.js";

export const authGuard = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"] || req.headers["authheader"]
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Token topilmadi" })
    }

    const token = authHeader.split(" ")[1]
    const verified = verifyToken(token, config.jwt.accessSecret)
    if (!verified) return res.status(403).json({ message: "Token yaroqsiz" })

    const user = await customersModel.findById(verified.id)
    if (!user) return res.status(404).json({ message: "Foydalanuvchi topilmadi" })

    req.user = user
    next()
  } catch (error) {
    console.error("authGuard xato:", error.message)
    return res.status(403).json({ message: "Token noto'gri yoki foydalanuvchi topilmadi" })
  }
};