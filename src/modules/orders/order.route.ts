import express from "express";
import { orderControllers } from "./order.controller";


const router = express.Router();

// Order Management route
router.post("/orders", orderControllers.createOrder);
router.get("/orders", orderControllers.getAllOrder);

export const OrderRoutes = router;
