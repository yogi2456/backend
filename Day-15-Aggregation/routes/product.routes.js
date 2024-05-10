import { Router } from 'express'
import { AddProduct, GetProduct, GetProductByUser, Projecting } from '../controllers/product.controllers.js';

const router = Router();


router.post("/add-product", AddProduct);
router.get("/get-product", GetProduct);
router.get("/projecting", Projecting);
router.post("/get-product-by-user", GetProductByUser);

export default router;