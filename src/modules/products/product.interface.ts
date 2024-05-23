// Products Variant Interface
export type Variant = {
    type: string;
    value: string;
  };
  
  // Products Inventory Interface
  export type Inventory = {
    quantity: number;
    inStock: boolean;
  };
  
  // Products Interface
  export type Product = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: Variant[];
    inventory: Inventory;
  };