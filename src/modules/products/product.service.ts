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

// product searching by specific product ID
const getProductByIdFromDB = async (id: string) => {
  const result = await ProductModel.findById(id);
  return result;
};

// Product Information Update
const updateProductFromDB = async (
  id: string,
  updateProductIntoDB: Product
) => {
  const result = await ProductModel.findByIdAndUpdate(id, updateProductIntoDB, {
    new: true,
    runValidators: true,
  });
  return result;
};




export const productServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getProductByIdFromDB,
  updateProductFromDB
};