import Student from "../models/studentModel.js";

// Create Student
 const addStudents = async (req, res) => {
  try {
    const { name, email, password, address, fees, status, batchTime } =
      req.body;

    // Validation
    if (!name || !email || !password || !address || !fees || !batchTime) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newStudent = new Student({
      name,
      email,
      password,
      address,
      fees,
      status,
      batchTime,
    });
    await newStudent.save();

    res
      .status(201)
      .json({ message: "Student added successfully", student: newStudent });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all students
 const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get single student
 const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ error: "Student not found" });
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update student
 const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!student) return res.status(404).json({ error: "Student not found" });
    res.json({ message: "Student updated successfully", student });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
 };

// Delete student

 const deleteStudent = async (req, res) => {

  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) return res.status(404).json({ error: "Student not found" });
    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const studentController = {
  addStudents,
  getStudents,  
  getStudentById,
  updateStudent,
  deleteStudent,
};
export default studentController;
