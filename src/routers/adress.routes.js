import express, { Router } from "express";
import {
  createAdress,
  getAllAdress,
  getOneAdress,
  updateAdress,
  deleteAdress,
} from "../controller/adress.controller.js";
import { adressValidation } from "../validation/adress.validation.js";
import { validation } from "../middleware/validation.js";
const adressRouter = Router();

adressRouter.post("/", validation(adressValidation), createAdress);
adressRouter.get("/", getAllAdress);
adressRouter.get("/:id", getOneAdress);
adressRouter.put("/:id", validation(adressValidation), updateAdress);
adressRouter.delete("/:id", deleteAdress);

export default adressRouter;
