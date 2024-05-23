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
      message: "Something is wrong",
      error: error,
    });
  }
};


export const productControllers = {
  createProduct,
};