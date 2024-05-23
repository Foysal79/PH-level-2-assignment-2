import { Request, Response } from "express";
import ProductValidationSchema from "./product.validation";
import { productServices } from "./product.service";


// Create a new Product
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    const zodParseData = ProductValidationSchema.parse(productData);
    const result = await productServices.createProductIntoDB(zodParseData);

    res.status(200).json({
      success: true,
      message: "Product created successfully! ",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};

// get all products and searchTerm
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    let searchTermString: string | undefined;

    if (typeof searchTerm === "string") {
      searchTermString = searchTerm;
    }
    const result = await productServices.getAllProductFromDB(searchTermString);
    res.status(200).json({
      success: true,
      message: searchTerm
        ? `Products matching search term '${searchTerm}' fetched successfully!`
        : "Products fetched successfully!",
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

// Get Product by Id
const getProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await productServices.getProductByIdFromDB(id);
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
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

// Update Product Information
const updateProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const updatedProductData = req.body;

    const verifyUpdateData = ProductValidationSchema.parse(updatedProductData);

    const result = await productServices.updateProductFromDB(
      id, verifyUpdateData );

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
        data: null,
      });
    }

    return res.json({
      success: true,
      message: "Product updated successfully!",
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

// Delete Product by Id
const productDelete = async (req: Request, res: Response) => {
  try {
    const deleteId = req.params.productId;
    const result = await productServices.productDeleteFromDB(deleteId);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
        data: null,
      });
    }

    res.json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: null,
    });
  }
};


export const productControllers = {
  createProduct,
  getAllProduct,
  getProductById,
  updateProductById,
  productDelete
};