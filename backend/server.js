import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
const app = express();
connectDB();

app.get("/", (req, res) => {
  res.send(`api is running on PORT ${process.env.PORT}`);
});

app.use("/api/products", productRoutes);

app.listen(
  process.env.PORT,
  console.log(`server up on PORT ${process.env.PORT}`)
);
