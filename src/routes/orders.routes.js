import { Router } from "express";
import {
  getOrders,
  getOneOrder,
  updateOrder,
  deleteOrder,
  addOrder,
} from "../controller/orders.controller.js";
import { adminOnly, protect } from "../helper/jwt.js";
const router = Router();

router.use(protect);
router.get("/", protect, adminOnly, getOrders);
router.get("/:id", protect, getOneOrder);
router.post("/", protect, adminOnly, addOrder);
router.put("/:id", protect, adminOnly, updateOrder);
router.delete("/:id", protect, adminOnly, deleteOrder);

export { router as orderRouter };
