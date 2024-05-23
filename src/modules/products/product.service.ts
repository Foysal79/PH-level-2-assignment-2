import { Product } from "./product.interface";
import { ProductModel } from "./product.model";


// Create a new product
const createProductIntoDB = async (product: Product) => {
  const result = ProductModel.create(product);
  return result;
};




export const productServices = {
  createProductIntoDB,
};