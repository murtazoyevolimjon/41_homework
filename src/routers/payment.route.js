import { Router } from "express";
import { validation } from "../middleware/validate.js";
import { authGuard, roleGuard } from "../middleware/guard.middleware.js";
import { paymentValidation, paymentUpdValidation } from "../validations/payment.validation.js";
import { create, getAll, getOne, update, deleted } from "../controllers/payment.controller.js";


const paymentsRouter = Router();


paymentsRouter.post("/", roleGuard("customer"), validation(paymentValidation), create)
paymentsRouter.get("/", authGuard, roleGuard("admin", "manager", "customer"), getAll)
paymentsRouter.get("/:id", authGuard, roleGuard("admin", "manager", "customer"), getOne)
paymentsRouter.put("/:id", authGuard, roleGuard("customer"), validation(paymentUpdValidation), update)
paymentsRouter.delete("/:id", authGuard, roleGuard("admin", "manager"), deleted)


export default paymentsRouter
