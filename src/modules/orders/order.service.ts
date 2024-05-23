import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

// Create a new order in the database
const createOrderIntoDB = async (validatedOrderData: Order) => {
  try {
    const result = await OrderModel.create(validatedOrderData);
    return result;
  } catch (error) {
    throw new Error("Failed to create order in the database.");
  }
};

// Retrieve All Orders

const getOrderFromDB = async (queryEmail: string | undefined) => {
  try {
    let orders;

    if (queryEmail) {
      orders = await OrderModel.find({ email: queryEmail });
    } else {
      orders = await OrderModel.find();
    }

    return orders;
  } catch (error) {
    console.error("Error fetching orders from DB:", error);
  }
};

export const orderServices = {
  createOrderIntoDB,
  getOrderFromDB,
};
