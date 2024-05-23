import express from "express";
import { productControllers } from "./product.controller";


const router = express.Router();

// Product Management route
router.post("/products", productControllers.createProduct);
router.get("/products", productControllers.getAllProduct);


export const ProductRoutes = router;