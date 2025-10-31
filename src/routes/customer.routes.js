import { Router } from "express";
import {
  getCustomers,
  getOneCustomer,
  addCustomer,
  updateCustomer,
  deleteCustomer,
} from "../controller/customer.controller.js";
import { protect as authGuard, adminOnly as roleGuard } from "../helper/jwt.js";

const router = Router();

router.get("/", authGuard, roleGuard, getCustomers);
router.get("/:id", authGuard, getOneCustomer);
router.post("/", addCustomer);
router.put("/:id", authGuard, roleGuard, updateCustomer);
router.delete("/:id", authGuard, roleGuard, deleteCustomer);

export { router as customerRouter };
