import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import router from "./src/routers/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const mongodb = process.env.MONGO_URL;

app.use(express.json());
app.use(cors());

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
