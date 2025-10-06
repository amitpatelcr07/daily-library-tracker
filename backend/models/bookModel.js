import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    enum: [
      "Fiction",
      "Non-Fiction",
      "Education",
      "Science",
      "Technology",
      "Other",
    ],
    default: "Other",
  },
  totalCopies: {
    type: Number,
    required: true,
    min: 1,
  },
  availableCopies: {
    type: Number,
    required: true,
    min: 0,
  },
  issuedTo: [
    {
      studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
      issueDate: {
        type: Date,
        default: Date.now,
      },
      dueDate: {
        type: Date,
      },
      returned: {
        type: Boolean,
        default: false,
      },
    },
  ],
  status: {
    type: String,
    enum: ["Available", "Issued", "Overdue"],
    default: "Available",
  },
  addedDate: {
    type: Date,
    default: Date.now,
  },
});

const Book = mongoose.model("Book", bookSchema);
export default Book;
