import { z } from "zod";

// Product variant validation schema
const VariantValidationSchema = z.object({
  type: z.string().nonempty("Variant type is must be required"),
  value: z.string().nonempty("Variant value is must be required"),
});

// Product inventory validation schema
const InventoryValidationSchema = z.object({
  quantity: z.number().min(0, "Quantity must be least 0"),
  inStock: z
    .boolean()
    .refine((val) => typeof val === "boolean", "InStock must be boolean"),
});

// Product validation schema
const ProductValidationSchema = z.object({
  name: z.string().nonempty("Name is must be required"),
  description: z.string().nonempty("Description is must be required"),
  price: z.number().positive("Price must be positive number"),
  category: z.string().nonempty("Category is must be required"),
  tags: z.array(z.string()).nonempty("Tags must be  non-empty array"),
  variants: z
    .array(VariantValidationSchema)
    .nonempty("Variants must be  non-empty array"),
  inventory: InventoryValidationSchema,
});

export default ProductValidationSchema;