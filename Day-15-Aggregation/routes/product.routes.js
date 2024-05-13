import { Router } from 'express'
import { AddProduct, GetProductByUser, GetProductsByCategoryPrice, GetProduts, Projecting } from '../controllers/product.controllers.js';

const router = Router();


router.post("/add-product", AddProduct);
router.post("/get-products-by-category-price", GetProductsByCategoryPrice);
router.get("/projecting", Projecting);
router.post("/get-product-by-user", GetProductByUser);
router.get("/get-products", GetProduts)

export default router;