import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import studentRouter from "./routes/studentRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import bookRouter from "./routes/bookRoutes.js";

dotenv.config();

const app = express();

// ✅ Middleware first
app.use(
  cors({
    origin: [
      "http://localhost:5173", // local dev
      "https://student-tracker.vercel.app", // deployed frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(bodyParser.json());

// ✅ Then routes

app.get("/", (req, res) => {
  res.send("✅ Backend is working and connected successfully!");
});

app.use("/api/auth", authRoutes);
app.use("/api", studentRouter);
app.use("/api/books", bookRouter);

const PORT = process.env.PORT || 7000;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
