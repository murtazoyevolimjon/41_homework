import jwt from "jsonwebtoken";
import { config } from "../config/db.js";

export const generateAccessToken = payload => {
  return jwt.sign(payload, config.jwt.accessSecret, { expiresIn: "15m" });
};

export const generateRefreshToken = payload => {
  return jwt.sign(payload, config.jwt.refreshSecret, { expiresIn: "5m" });
};

export const verifyToken = (token, secret) => {
  return jwt.verify(token, secret);
};
