import { Router } from "express";
import { create, getAll, getOne, update, deleted } from "../controller/order_items.controller.js";

const router = Router();

router.post("/", create);
router.get("/", getAll);
router.get("/:id", getOne);
router.put("/:id", update);
router.delete("/:id", deleted);

export { router as order_itemsRouter };
