import { Router } from "express"
import { validation } from "../middleware/validate.js"
import { authGuard, roleGuard } from "../middleware/guard.middleware.js"
import { register, login, getAll, getOne, create, update, refreshAccessToken, profile, verifyOtp, deleted } from "../controllers/customer.controller.js"
import {customerValidation, customerUpdValidation } from "../validations/customer.validation.js";
const customerRouter = Router();


customerRouter.post("/register", validation(customerValidation), register)
customerRouter.post("/verify", verifyOtp)
customerRouter.post("/login", login)
customerRouter.get("/profile",authGuard, roleGuard("admin", "manager", "staff", "customer"), profile)
customerRouter.post("/refresh", refreshAccessToken)


customerRouter.post("/", authGuard, roleGuard("admin", "manager"), validation(customerValidation), create)
customerRouter.get("/", authGuard, roleGuard("admin", "manager", "staff"), getAll)
customerRouter.get("/:id", authGuard, roleGuard("admin", "manager", "staff"), getOne)
customerRouter.put("/:id", authGuard, roleGuard("admin", "manager", "customer"), validation(customerUpdValidation), update)
customerRouter.delete("/:id", authGuard, roleGuard("admin", "manager"), deleted)

export default customerRouter 
