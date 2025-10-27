import express, { Router } from "express";
import {
  createPayments,
  getAllPayments,
  getOnePayments,
  updatePayments,
  deletePayments,
} from "../controller/payments.controller.js";
import { productValidation } from "../validation/water_products.validation.js";
import { validation } from "../middleware/validation.js";

const paymentsRouter = Router();

paymentsRouter.post("/", validation(productValidation), createPayments);
paymentsRouter.get("/", getAllPayments);
paymentsRouter.get("/:id", getOnePayments);
paymentsRouter.put("/:id", validation(productValidation), updatePayments);
paymentsRouter.delete("/:id", deletePayments);

export default paymentsRouter;
