import Student from "../models/studentModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register (already part of addStudent, just hash password)
export const registerStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res
      .status(201)
      .json({ message: "Student registered successfully", student });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login
export const loginStudent = async (req, res) => {
  try {
    const { email, password } = req.body;
    const student = await Student.findOne({ email });
    if (!student) return res.status(404).json({ error: "Student not found" });

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    // Generate JWT token
    const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Logout (client-side deletes token)
export const logoutStudent = (req, res) => {
  res.json({ message: "Logout successful. Just delete token on client side." });
};
