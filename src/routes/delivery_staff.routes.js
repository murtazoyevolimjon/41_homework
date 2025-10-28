import { Router } from "express";
import {
  getDelivery_staffs,
  getOneDelivery_staff,
  addDelivery_staff,
  updateDelivery_staff,
  deleteDelivery_staff,
} from "../controller/delivery_staff.controller.js";
import { protect, adminOnly, deliveryStaffOnly } from "../helper/jwt.js";

const router = Router();

router.get("/", protect, adminOnly, getDelivery_staffs);
router.post("/", protect, addDelivery_staff);
router.put("/:id", protect, adminOnly, updateDelivery_staff);
router.delete("/:id", protect, adminOnly, deleteDelivery_staff);

router.get("/profile/:id", protect, deliveryStaffOnly, getOneDelivery_staff);

export { router as delivery_staffRouter };
