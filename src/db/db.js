import { connect } from "mongoose";
import { config } from "../config/index.js";
const db_url = config.db.url;

export async function connectDB() {
  try {
    await connect(db_url);
    console.log("MongoDB connected");
  } catch (e) {
    console.error("MongoDB connection failed:", e.message);
    throw e;
  }
}