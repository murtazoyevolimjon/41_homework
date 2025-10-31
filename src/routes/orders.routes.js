import { Router } from "express";
import { create, getAll, getOne, update, deleted } from "../controller/orders.controller.js";
import { adminOnly, protect } from "../helper/jwt.js";
const router = Router();

router.use(protect);
router.get("/", getOne);
router.get("/:id", getAll);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", deleted);

export { router as orderRouter };
