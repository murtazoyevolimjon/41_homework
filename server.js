import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import router from "./src/routers/index.js";
import { errorHandler } from "./src/middleware/errorHandler.js";

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000
const mongodb = process.env.MONGO_URI

app.use(express.json())
app.use(cors())

mongoose.connect(mongodb)
.then(() => console.log("mongodb ga ulandi"))
.catch((error) => console.log(`mongodb connection error: ${error}`))

app.use("/", router)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
