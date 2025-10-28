import { Router } from "express";
import { authRouter } from "./auth.routes.js";
import { addressRouter } from "./address.routes.js";
import { delivery_staffRouter } from "./delivery_staff.routes.js";
import { districtRouter } from "./districts.routes.js";
import { order_itemsRouter } from "./order_items.routes.js";
import { orderRouter } from "./orders.routes.js";
import { water_productRouter } from "./water_products.routes.js";
import { paymentRouter } from "./payments.routes.js";
import { customerRouter } from "./customer.routes.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/customer", customerRouter);
router.use("/address", addressRouter);
router.use("/delivery_staff", delivery_staffRouter);
router.use("/district", districtRouter);
router.use("/order_item", order_itemsRouter);
router.use("/order", orderRouter);
router.use("/payment", paymentRouter);
router.use("/water_product", water_productRouter);

export { router as mainRouter };
