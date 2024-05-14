import { Router } from "express";
import { Login, Register, validateToken } from "../controllers/user.controllers.js";

const router = Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/validate-token", validateToken);

export default router;