// src/pages/AddStudent.jsx
import React from "react";
import StudentForm from "../components/StudentForm";
import { createStudent } from "../services/studentServices"; // if using API

const AddStudent = () => {
  const handleSubmit = async (studentData) => {
    try {
      // await createStudent(studentData); // Uncomment if using API
      console.log("Form data:", studentData);
      alert("Student created successfully!");
    } catch (error) {
      console.error("Error creating student:", error);
      alert("Failed to create student.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <StudentForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddStudent;
