import User from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

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

export const signin = async (req, res, next) => {
  const {username, email, password } = req.body;

  if ([username, email, password].some((field) => field?.trim() === "")) {
    next(new ApiError(400, "All fields are required"));
  }

  try {
    const user = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (!user) {
     return next(new ApiError(404, "User not found"));
    }

    const isPasswordValid = bcryptjs.compareSync(password, user.password);

    if (!isPasswordValid) {
      return next(new ApiError(401, "Invalid password"));
    }

    const loggedInUser = await User.findById(user._id).select(
      "-password"
    );

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).cookie("access_token", token, {
      httpOnly: true,
    }).json(loggedInUser);
  } catch (error) {
    next(error);
  }
}