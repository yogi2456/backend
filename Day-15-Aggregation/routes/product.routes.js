import { Router } from 'express'
import { AddProduct, GetProduct } from '../controllers/product.controllers.js';

const router = Router();


router.post("/add-product", AddProduct);
router.get("/get-product", GetProduct);

export default router;