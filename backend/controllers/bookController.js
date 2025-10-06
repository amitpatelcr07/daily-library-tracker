import Book from "../models/bookModel.js";
//  adding book document in the collection
 const addBook = async (req, res) => {
  try {
    const { title, author, category, totalCopies } = req.body;

    // ✅ Basic validation
    if (!title || !author || !totalCopies) {
      return res
        .status(400)
        .json({ message: "Title, author, and totalCopies are required." });
    }

    // ✅ Check if a book with same title and author already exists
    const existingBook = await Book.findOne({ title, author });
    if (existingBook) {
      return res
        .status(409)
        .json({ message: "Book with same title and author already exists." });
    }

    // ✅ Create new book
    const newBook = new Book({
      title,
      author,
      category: category || "Other",
      totalCopies,
      availableCopies: totalCopies,
      status: "Available",
    });

    const savedBook = await newBook.save();

    return res.status(201).json({
      message: "Book added successfully!",
      book: savedBook,
    });
  } catch (error) {
    console.error("Error adding book:", error);
    return res
      .status(500)
      .json({
        message: "Server error while adding book.",
        error: error.message,
      });
  }
};

// getting all book documents from the collection

const getAllBooks=async(req,res)=>{
  try {
    const books = await Book.find();  
    res.json(books);
  } 
  catch (error) {
    res.status(500).json({ error: error.message });
  } 
};





const bookController = {
  addBook,
  getAllBooks,
};
export default bookController;