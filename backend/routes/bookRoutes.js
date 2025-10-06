import express from "express";
const router = express.Router();
import bookController from "../controllers/bookController.js";
router.post("/addBook", bookController.addBook);
router.get("/getAllBooks", bookController.getAllBooks);
export default router;