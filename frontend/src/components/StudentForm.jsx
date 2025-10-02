import React, { useState } from "react";
import { createStudent } from "../services/studentServices";
import { Link } from "react-router-dom";
const StudentForm = () => {
  const [submit,setSubmit]=useState(false);
 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    fees: "",
    status: "active",
    batchTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     setSubmit(true);
    const finalData = {
      ...formData,
      fees: parseFloat(formData.fees),
    };

    // Function to add a new student
    const AddStudent = async () => {
      try {
        await createStudent(finalData); // Assuming API call
        alert("Student created successfully!");
      } catch (error) {
        console.error("Error creating student:", error);
        alert("Failed to create student.");
      }
    };

    AddStudent();
    
    // Optionally reset form
    setFormData({
      name: "",
      email: "",
      password: "",
      address: "",
      fees: "",
      status: "active",
      batchTime: "",
    });
    
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md mx-4 relative">
        <Link to={"/"}>
          <button className="mb-4 text-blue-600 hover:underline font-semibold">
            &larr; Back
          </button>
        </Link>
        <h2 className="text-2xl font-bold text-center mb-6">Student Form</h2>

        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Fees */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Fees</label>
            <input
              type="number"
              name="fees"
              value={formData.fees}
              onChange={handleChange}
              required
              min="0"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Batch Time */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Batch Time
            </label>
            <select
              name="batchTime"
              value={formData.batchTime}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="">Select Batch Time</option>
              <option value="9 AM - 12 PM">9 AM - 12 PM</option>
              <option value="12 PM - 3 PM">12 PM - 3 PM</option>
              <option value="3 PM - 6 PM">3 PM - 6 PM</option>
              <option value="6 PM - 9 PM">6 PM - 9 PM</option>
            </select>
          </div>

          {/* Submit Button */}
         <Link to={'/'}>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
         </Link>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
