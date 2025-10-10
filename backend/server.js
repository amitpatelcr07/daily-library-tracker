import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import studentRouter from "./routes/studentRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import bookRouter from "./routes/bookRoutes.js";

dotenv.config();

const app = express();

// ----------------------
// 🧩 MIDDLEWARE
// ----------------------
app.use(
  cors({
    origin: [
      "http://localhost:5173", // local frontend
      "https://student-tracker.vercel.app", // optional deployed frontend if needed
      "https://your-render-app-name.onrender.com", // Render frontend served from same server
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(bodyParser.json());

// ----------------------
// 🧩 ROUTES
// ----------------------
app.get("/api", (req, res) => {
  res.send("✅ Backend is working and connected successfully!");
});

app.use("/api/auth", authRoutes);
app.use("/api", studentRouter);
app.use("/api/books", bookRouter);

// ----------------------
// 🧩 PRODUCTION: Serve Frontend
// ----------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../frontend/dist");
  app.use(express.static(frontendPath));

  // Serve React index.html for all unknown routes
  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

// ----------------------
// 🧩 DB CONNECTION
// ----------------------
const PORT = process.env.PORT || 7000;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
