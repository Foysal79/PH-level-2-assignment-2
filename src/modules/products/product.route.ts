import express from "express";
import { productControllers } from "./product.controller";


const router = express.Router();

// Product Management route
router.post("/products", productControllers.createProduct);


export const ProductRoutes = router;