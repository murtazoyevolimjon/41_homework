import { Router } from "express";
import {
  getWater_products,
  getOneWater_product,
  updateWater_product,
  deleteWater_product,
  addWater_product,
} from "../controller/water_products.controller.js";
import { adminOnly, protect } from "../helper/jwt.js";
const router = Router();

router.use(protect);
router.get("/", protect, adminOnly, getWater_products);
router.get("/:id", protect, getOneWater_product);
router.post("/", protect, adminOnly, addWater_product);
router.put("/:id", protect, adminOnly, updateWater_product);
router.delete("/:id", protect, adminOnly, deleteWater_product);

export { router as water_productRouter };
