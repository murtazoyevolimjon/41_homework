import { Router } from "express";
import { authController } from "../controller/auth.controller.js";
import { protect } from "../helper/jwt.js";
const router = Router();
router.get("/profile", protect, authController.profile);
router.post("/signin", authController.signin);
router.post("/signup", authController.signup);
router.post("/refresh", authController.updateAccess);

export { router as authRouter };