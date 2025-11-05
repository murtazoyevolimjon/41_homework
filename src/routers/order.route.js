import { Router } from "express";
import { authGuard, roleGuard } from "../middleware/guard.middleware.js";
import { validation } from "../middleware/validate.js";
import { orderValidation, orderUpdValidation } from "../validations/order.validation.js";
import { create, getOne, getAll, update, deleted } from "../controllers/order.controller.js";


const router = Router();


router.post("/", authGuard, roleGuard("customer"), validation(orderValidation),create)
router.get("/",authGuard, roleGuard("customer", "admin", "manager"), getAll)
router.get("/:id", authGuard, roleGuard("customer", "admin", "manager"), getOne)
router.put("/:id", authGuard, roleGuard("admin"), validation(orderUpdValidation),update);
router.delete("/:id", authGuard, roleGuard("admin"),deleted)

export default router;