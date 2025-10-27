import { Router } from "express";
import adressRouter from "./adress.routes.js";
import customersRouter from "./customer.routes.js";
import deliRouter from "./delivery_staff.routes.js";
import districtsRouter from "./districts.routes.js";
import orderItemRouter from "./order_items.routes.js";
import orderRouter from "./orders.routes.js";
import paymentsRouter from "./payments.routes.js";
import waterRouter from "./water_products.routes.js";
import {
  loginStaff,
  profileStaff,
  refreshAccessStaff,
  registerCustomer,
  loginCustomer,
  profileCustomer,
  refreshAccessCustomer,
  registerStaff,
} from "../controller/auth.controller.js";
import { validation } from "../middleware/validation.js";
import { customerRegisterSchema } from "../middleware/auth.validation.js";

const router = Router();

router.post(
  "/customer/register",
  validation(customerRegisterSchema),
  registerCustomer,
);
router.post(
  "/customer/login",
  validation(customerRegisterSchema),
  loginCustomer,
);
router.post("/customer/profile", profileCustomer);
router.post("/customer/refresh", refreshAccessCustomer);

router.post("/staff/register", registerStaff);
router.post("/staff/login", loginStaff);
router.post("/staff/profile", profileStaff);
router.post("/staff/refresh", refreshAccessStaff);

router.use("/customers", customersRouter);
router.use("/districts", districtsRouter);
router.use("/delivery_staff", deliRouter);
router.use("/address", addressRouter);
router.use("/orders", orderRouter);
router.use("/products", waterRouter);
router.use("/order_items", orderItemRouter);
router.use("/payments", paymentsRouter);

export default router;
