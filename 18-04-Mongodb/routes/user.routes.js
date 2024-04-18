import { Router } from 'express';
import { GetUsers, Register } from '../controllers/user.controllers.js';

const router = Router();

router.post("/register", Register);
router.post("/get-users", GetUsers)

export default router;