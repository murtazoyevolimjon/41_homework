import express, { Router } from "express";
import { createCustomers, getAllCustomers, getOneCustomers, updateCustomers, deleteCustomer } from "../controller/customers.controller.js";
import { customerValidation } from "../validation/customer.validation.js";
import { validation } from "../middleware/validation.js";

const customersRouter = Router();

customersRouter.post("/", validation(customerValidation), createCustomers);
customersRouter.get("/", getAllCustomers);
customersRouter.get("/:id", getOneCustomers);
customersRouter.put("/:id",validation(customerValidation), updateCustomers);
customersRouter.delete("/:id", deleteCustomer);

export default customersRouter;