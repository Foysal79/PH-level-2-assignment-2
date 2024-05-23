import { z } from "zod";
import { Types } from "mongoose";

// Create a Zod schema for the Order
const orderValidationSchema = z.object({
  email: z.string().email(),
  productId: z.string().refine((val) => Types.ObjectId.isValid(val), {
    message: "Invalid ObjectId",
  }),
  price: z.number().min(0),
  quantity: z.number().int().min(1),
});

export default orderValidationSchema;
