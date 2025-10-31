import { Router } from "express";
import {
  create,
  getAll,
  getOne,
  update,
  deleted,
} from "../controller/water_products.controller.js";
import { protect } from "../helper/jwt.js";
import { deliveryStaffOnly } from "../middleware/deliveryStaffOnly.js";

const router = Router();

router.post("/", protect, deliveryStaffOnly, create);
router.get("/", getAll);
router.get("/:id", getOne);
router.put("/:id", protect, deliveryStaffOnly, update);
router.delete("/:id", protect, deliveryStaffOnly, deleted);

export { router as water_productRouter };
