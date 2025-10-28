import { Router } from "express";
import { adminOnly, protect } from "../helper/jwt.js";
import {
  getAddress,
  getOneAddress,
  updateAddress,
  deleteAddress,
  addAddress,
} from "../controller/address.controller.js";
const router = Router();

router.get("/", protect, adminOnly, getAddress);
router.get("/:id", protect, getOneAddress);
router.post("/", protect, adminOnly, addAddress);
router.put("/:id", protect, adminOnly, updateAddress);
router.delete("/:id", protect, adminOnly, deleteAddress);

export { router as addressRouter };
