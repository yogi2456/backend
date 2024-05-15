import { Router } from "express";
import { Login, Logout, Register, validateToken } from "../controllers/user.controllers.js";

const router = Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/validate-token", validateToken);
router.get("/logout", Logout);

export default router;