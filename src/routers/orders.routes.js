import express, { Router } from "express";
import {
  createOrder,
  getAllOrder,
  getOneOrder,
  updateOrder,
  deleteOrder,
} from "../controller/orders.controller.js";
import { orderValidation } from "../validation/orders.validation.js";
import { validation } from "../middleware/validation.js";

const orderRouter = Router();

orderRouter.post("/", validation(orderValidation), createOrder);
orderRouter.get("/", getAllOrder);
orderRouter.get("/:id", getOneOrder);
orderRouter.put("/:id", validation(orderValidation), updateOrder);
orderRouter.delete("/:id", deleteOrder);

export default orderRouter;
