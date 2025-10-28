import { Router } from "express";
import {
  getCustomers,
  getOneCustomer,
  addCustomer,
  updateCustomer,
  deleteCustomer,
} from "../controller/customer.controller.js";
import { protect, adminOnly } from "../helper/jwt.js";

const router = Router();

router.get("/", protect, adminOnly, getCustomers);
router.get("/:id", protect, getOneCustomer);
router.post("/", protect, adminOnly, addCustomer);
router.put("/:id", protect, adminOnly, updateCustomer);
router.delete("/:id", protect, adminOnly, deleteCustomer);

export { router as customerRouter };
