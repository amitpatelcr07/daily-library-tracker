import express from "express";
import {
  registerStudent,
  loginStudent,
  logoutStudent,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerStudent);
router.post("/login", loginStudent);
router.post("/logout", logoutStudent);

export default router;
