import mongoose, { Schema } from "mongoose";
import { Order } from "./order.interface";


// Create a Mongoose schema for the Order interface
const orderSchema = new Schema<Order>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

// Create Mongoose model from the schema
export const OrderModel = mongoose.model<Order>("Order", orderSchema);
