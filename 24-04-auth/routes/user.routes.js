import { Router } from "express";
import { Login, Register, ValidateToken } from "../controllers/user.controllers.js";

const router = Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/validate-token", ValidateToken);

export default router;