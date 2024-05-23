import express, { Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./modules/products/product.route";
import { OrderRoutes } from "./modules/orders/order.route";

const app = express();

app.use(express.json());
app.use(cors({ origin: "https://deshishop.vercel.app/" }));

// Applications Route
app.use("/api", ProductRoutes);
app.use("/api", OrderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Server is Running");
});

export default app;