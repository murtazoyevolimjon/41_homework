import { Router } from "express";
import {
  create,
  getAll,
  getOne,
  update,
  deleted,
} from "../controller/delivery_staff.controller.js";
import { deliveryStaffOnly } from "../middleware/deliveryStaffOnly.js";

const router = Router();

router.post("/", deliveryStaffOnly, create);
router.get("/", deliveryStaffOnly, getAll);
router.get("/profile/:id", deliveryStaffOnly, getOne);
router.put("/:id", deliveryStaffOnly, update);
router.delete("/:id", deliveryStaffOnly, deleted);

export { router as delivery_staffRouter };
