import express from "express";
import { productControllers } from "./product.controller";


const router = express.Router();

// Product Management route
router.post("/products", productControllers.createProduct);
router.get("/products", productControllers.getAllProduct);
router.get("/products/:productId", productControllers.getProductById);

export const ProductRoutes = router;