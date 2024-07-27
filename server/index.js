import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Importing routes
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000 !!");
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter);

// middleware to handle errors

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
