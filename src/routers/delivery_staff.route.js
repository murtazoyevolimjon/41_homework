import { Router } from "express";
import { validation } from "../middleware/validate.js";
import { authGuard, roleGuard } from "../middleware/guard.middleware.js";
import { create, getAll, getOne, update, deleted } from "../controllers/delivery_staff.controller.js";
import { register, login, refreshAccessToken } from "../controllers/delivery_staff.controller.js";
import { delivery_straffValidation, delivery_staffUpdValidation,  } from "../validations/delivery_staff.validation.js";
import { verifyOtp, profile } from "../controllers/delivery_staff.controller.js";

const deliRouter = Router()


deliRouter.post("/register",validation(delivery_straffValidation), register)
deliRouter.post("/verify", verifyOtp)
deliRouter.post("/login", login)
deliRouter.get("/profile",authGuard, roleGuard("admin", "manager", "staff", "customer"), profile)
deliRouter.post("/refresh", refreshAccessToken)


deliRouter.post("/", authGuard, roleGuard("admin", "manager"), validation(delivery_straffValidation), create)
deliRouter.get("/", authGuard, roleGuard("admin", "manager", "staff"), getAll)
deliRouter.get("/:id", authGuard, roleGuard("admin", "manager", "staff"), getOne)
deliRouter.put("/:id", authGuard, roleGuard("admin", "manager"), validation(delivery_staffUpdValidation), update)
deliRouter.delete("/:id", authGuard, roleGuard("admin", "manager"), deleted)


export default deliRouter