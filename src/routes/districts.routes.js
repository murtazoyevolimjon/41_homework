import { Router } from "express";
import { create, getOne, getAll, update, deleted } from "../controller/districts.controller.js";

const router = Router();

router.post("/", create);
router.get("/", getAll);
router.get("/:id", getOne);
router.put("/:id", update);
router.delete("/:id", deleted);

export { router as districtRouter };
