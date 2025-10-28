import { Router } from "express";
import {
  getDistricts,
  getOneDistrict,
  addDistrict,
  updateDistrict,
  deleteDistrict,
} from "../controller/districts.controller.js";
import { protect, adminOnly } from "../helper/jwt.js";

const router = Router();

router.get("/", protect, adminOnly, getDistricts);
router.post("/", protect, adminOnly, addDistrict);
router.put("/:id", protect, adminOnly, updateDistrict);
router.delete("/:id", protect, adminOnly, deleteDistrict);
router.get("/:id", protect, adminOnly, getOneDistrict);

export { router as districtRouter };
