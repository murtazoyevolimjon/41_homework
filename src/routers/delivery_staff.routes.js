import express, { Router } from "express";
import {
  createDeli,
  getAllDeli,
  getOneDeli,
  updateDeli,
  deleteDeli,
} from "../controller/delivery_straff.controller.js";
import { delivery_straffValidation } from "../validation/delivery_staff.validation.js";
import { validation } from "../middleware/validation.js";

const deliRouter = Router();

deliRouter.post("/", validation(delivery_straffValidation), createDeli);
deliRouter.get("/", getAllDeli);
deliRouter.get("/:id", getOneDeli);
deliRouter.put("/:id", validation(delivery_straffValidation), updateDeli);
deliRouter.delete("/:id", deleteDeli);

export default deliRouter;
