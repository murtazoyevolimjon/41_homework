import express, { Router } from "express";
import { createwater, getAllwater, getOnewater, updatewater, deletewater } from "../controller/water_products.controller.js";
import { validation } from "../middleware/validation.js";
import { productValidation } from "../validation/water_products.validation.js";

const waterRouter = Router();

waterRouter.post("/",validation(productValidation), createwater);
waterRouter.get("/", getAllwater);
waterRouter.get("/:id", getOnewater);
waterRouter.put("/:id",validation(productValidation), updatewater);
waterRouter.delete("/:id", deletewater);

export default waterRouter;