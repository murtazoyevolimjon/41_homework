import express, { Router } from "express";
import {
  createOrderItem,
  getAllOrderItem,
  getOneOrderItem,
  updateOrderItem,
  deleteOrderItem,
} from "../controller/order_items.controller.js";
import { order_itemsValidation } from "../validation/order_items.validation.js";
import { validation } from "../middleware/validation.js";

const orderItemRouter = Router();

orderItemRouter.post("/", validation(order_itemsValidation), createOrderItem);
orderItemRouter.get("/", getAllOrderItem);
orderItemRouter.get("/:id", getOneOrderItem);
orderItemRouter.put("/:id", validation(order_itemsValidation), updateOrderItem);
orderItemRouter.delete("/:id", deleteOrderItem);

export default orderItemRouter;
