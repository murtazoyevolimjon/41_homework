import dotenv from "dotenv";
dotenv.config();

export default {
  jwt: {
    accessSecret: process.env.ACCESS_SECRET,
    refreshSecret: process.env.REFRESH_SECRET,
  },
  mongoURI: process.env.MONGO_URI,
  port: process.env.PORT || 4000,
};