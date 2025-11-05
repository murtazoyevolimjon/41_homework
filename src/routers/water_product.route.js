import { Router } from "express";
import { validation } from "../middleware/validate.js";
import { authGuard, roleGuard } from "../middleware/guard.middleware.js";
import { productValidation, productUpdValidation } from "../validations/water_product.validation.js";
import { create, getAll, getOne, update, deleted } from "../controllers/water_product.controller.js";


const waterRouter = Router();


waterRouter.post("/", roleGuard("admin", "manager"), validation(productValidation), create)
waterRouter.get("/", authGuard, roleGuard("admin", "manager", "user", "customer", "staff"), getAll)
waterRouter.get("/:id", authGuard, roleGuard("admin", "manager", "user", "customer", "staff"), getOne)
waterRouter.put("/:id", authGuard, roleGuard("admin", "manager"), validation(productUpdValidation), update)
waterRouter.delete("/:id", authGuard, roleGuard("admin", "manager"), deleted)


export default waterRouter