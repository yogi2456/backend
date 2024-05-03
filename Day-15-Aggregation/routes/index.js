import { Router } from 'express'
import ProductRouter from './product.routes.js'

const router = Router();


router.use("/product", ProductRouter);

export default router;