import { Router } from "express";
import {} from "../helper/jwt.js";
import { create, getAll, getOne, update, deleted } from "../controller/address.controller.js";
const router = Router();

router.post("/", create);
router.get("/:id", getOne);
router.get("/", getAll);
router.put("/:id", update);
router.delete("/:id", deleted);

export { router as addressRouter };
