import { Product } from "./product.interface";
import { ProductModel } from "./product.model";


// Create a new product
const createProductIntoDB = async (product: Product) => {
  const result = ProductModel.create(product);
  return result;
};

// get all Products
const getAllProductFromDB = async (search: string | undefined) => {
  let products;

  if (search) {
    const searchRegex = new RegExp(search as string, "i");

    products = await ProductModel.find({
      $or: [
        { name: searchRegex },
        { description: searchRegex },
        { category: searchRegex },
        { tags: searchRegex },
      ],
    });
  } else {
    products = await ProductModel.find();
  }

  return products;
};



export const productServices = {
  createProductIntoDB,
  getAllProductFromDB
};