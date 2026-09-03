import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.json({ success: false, message: "Missing Details" });
  }

  try {
    const existingUser = await userModel;

    const hashedPassword = await bcrypt.hash(password, 10);
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
