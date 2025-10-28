import { Router } from "express";
import {
  getOrder_items,
  getOneOrder_item,
  updateOrder_item,
  deleteOrder_item,
  addOrder_item,
} from "../controller/order_items.controller.js";
import { adminOnly, protect } from "../helper/jwt.js";
const router = Router();

router.use(protect);
router.get("/", protect, adminOnly, getOrder_items);
router.get("/:id", protect, getOneOrder_item);
router.post("/", protect, adminOnly, addOrder_item);
router.put("/:id", protect, adminOnly, updateOrder_item);
router.delete("/:id", protect, adminOnly, deleteOrder_item);

export { router as order_itemsRouter };