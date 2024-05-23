import { Request, Response } from "express";
import orderValidationSchema from "./order.validation";
import { orderServices } from "./order.service";
import { productServices } from "../products/product.service";

// ===>  Create a new order <===
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;

    // Validate order data using orderValidationSchema
    const validatedOrderData = orderValidationSchema.parse(orderData);
    const { productId, quantity } = validatedOrderData;

    // Fetch the product from the database using productId
    const product = await productServices.getProductByIdFromDB(productId);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    // Check if there is sufficient quantity in inventory
    if (product.inventory.quantity < quantity) {
      return res.status(400).json({
        success: false,
        message: "Insufficient quantity available in inventory",
      });
    }

    // Update the product inventory
    product.inventory.quantity -= quantity;
    product.inventory.inStock = product.inventory.quantity > 0;
    await product.save();

    // Create order in the database
    const result = await orderServices.createOrderIntoDB(validatedOrderData);

    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to create order.",
      error: error,
    });
  }
};

// ===> Retrieve All Orders and Retrieve Orders by User Email <===
const getAllOrder = async (req: Request, res: Response) => {
  try {
    const queryEmail = req.query.email as string | undefined;

    const result = await orderServices.getOrderFromDB(queryEmail);

    res.status(200).json({
      success: true,
      message: queryEmail
        ? `Orders fetched successfully for user email!`
        : "Orders fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};

export const orderControllers = {
  createOrder,
  getAllOrder,
};
