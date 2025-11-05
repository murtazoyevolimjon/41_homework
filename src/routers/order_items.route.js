import { Router } from "express";
import { validation } from "../middleware/validate.js";
import { authGuard, roleGuard } from "../middleware/guard.middleware.js";
import { order_itemsValidation, order_itemsUpdValidation } from "../validations/order_items.validation.js";
import { create, getAll, getOne, update, deleted } from "../controllers/order_items.controller.js";


const orderItemRouter = Router();


orderItemRouter.post("/", roleGuard("staff", "manager"), validation(order_itemsValidation), create)
orderItemRouter.get("/", authGuard, roleGuard("staff", "manager", "admin", "customer"), getAll)
orderItemRouter.get("/:id", authGuard, roleGuard("staff", "manager", "admin", "customer"), getOne)
orderItemRouter.put("/:id", authGuard, roleGuard("staff", "manager"), validation(order_itemsUpdValidation), update)
orderItemRouter.delete("/:id", authGuard, roleGuard("manager", "admin"), deleted)

export default orderItemRouter