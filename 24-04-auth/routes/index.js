import { Router } from "express";
import UserRoutes from "./user.routes.js";


const router = Router();

router.use("/auth", UserRoutes);

export default router;