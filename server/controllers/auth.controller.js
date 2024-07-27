import User from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if ([username, email, password].some((field) => field?.trim() === "")) {
    next(new ApiError(400, "All fields are required"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json("User created");
  } catch (error) {
    next(error);
  }
};
