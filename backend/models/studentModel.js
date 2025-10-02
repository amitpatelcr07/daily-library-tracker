import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // will be hashed
    address: { type: String, required: true },
    fees: { type: Number, required: true },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
    batchTime: { type: String, required: true },
  },
  { timestamps: true }
);

// Hash password before saving
studentSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
