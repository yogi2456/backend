import { Router } from "express";
import UserRouter from "./user.routes.js";


const router = Router();

router.use((req, res, next) => {
    // console.log("Inside route level middleware");
    // next();
    res.send("inside level middleware")
});

router.use("user", UserRouter)

export default router;