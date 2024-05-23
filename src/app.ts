import express, { Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./modules/products/product.route";

const app = express();

app.use(express.json());
app.use(cors({ origin: "https://deshishop.vercel.app/" }));

// Applications Route
app.use("/api", ProductRoutes);


app.get("/", (req: Request, res: Response) => {
  res.send("Server is Running");
});

export default app;