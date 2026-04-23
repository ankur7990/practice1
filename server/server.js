import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import mongoose from "mongoose";
import userRouter from "../server/routes/userRouter.js";

const app = express();
app.use(express.json());
app.use("/user", userRouter);

const PORT1 = process.env.PORT || 5000;

await connectDB();

app.listen(PORT1, () => {
  console.log(`Server running on port ${PORT1}`);
});
