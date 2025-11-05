import { Router } from "express";
import addressRouter from "./address.route.js";
import deliRouter from "./delivery_staff.route.js";
import districtsRouter from "./district.route.js";
import orderItemRouter from "./order_items.route.js";
import orderRouter from "./order.route.js";
import paymentsRouter from "./payment.route.js";
import waterRouter from "./water_product.route.js";
import customerRouter from "./customer.route.js";

const router =Router()


router.use("/customers", customerRouter)
router.use("/districts", districtsRouter)
router.use("/delivery_staff", deliRouter)
router.use("/address", addressRouter)
router.use("/orders", orderRouter)
router.use("/products", waterRouter)
router.use("/order_items", orderItemRouter)
router.use("/payments", paymentsRouter)


export default router