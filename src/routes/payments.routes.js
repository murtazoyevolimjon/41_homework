import { Router } from "express";
import {
  getPayments,
  getOnePayment,
  updatePayment,
  deletePayment,
  addPayment,
} from "../controller/payments.controller.js";
import { adminOnly, protect } from "../helper/jwt.js";
const router = Router();

router.use(protect);
router.get("/", protect, adminOnly, getPayments);
router.get("/:id", protect, getOnePayment);
router.post("/", protect, adminOnly, addPayment);
router.put("/:id", protect, adminOnly, updatePayment);
router.delete("/:id", protect, adminOnly, deletePayment);

export { router as paymentRouter };
