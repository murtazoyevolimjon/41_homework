import winston from "winston";

const { combine, timestamp, printf } = winston.format;
const myFormat = printf(({ level, message, timestamp }) => `${timestamp} [${level}]: ${message}`)

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: combine(timestamp(), myFormat),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/error.log", level: "error", maxsize: 5242880, maxFiles: 5 }),
    new winston.transports.File({ filename: "logs/combined.log", maxsize: 5242880, maxFiles: 5 }),
  ],
})

export default logger