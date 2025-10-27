import express, { Router } from "express";
import { createDistricts, getAllDistricts, getOneDistricts, updateDistricts, deleteDistricts } from "../controller/districts.controller.js";
import { districtsValidation } from "../validation/districts.validation.js";
import { validation } from "../middleware/validation.js";

const districtsRouter = Router();

districtsRouter.post("/",validation(districtsValidation), createDistricts);
districtsRouter.get("/", getAllDistricts);
districtsRouter.get("/:id", getOneDistricts);
districtsRouter.put("/:id",validation(districtsValidation), updateDistricts);
districtsRouter.delete("/:id", deleteDistricts);

export default districtsRouter;