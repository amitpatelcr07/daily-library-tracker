import React, { useEffect, useState } from "react";
import { getStudents } from "../services/studentServices";
import StudentForm from "../components/StudentForm.jsx"; // 👈 your form
import { Link } from "react-router-dom";
const Dashboard = () => {
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalBooks, setTotalBooks] = useState(0);
  const [booksIssued, setBooksIssued] = useState(0);
  const [overdueBooks, setOverdueBooks] = useState(0);
  const [recentStudents, setRecentStudents] = useState([]);
  const [recentBooks, setRecentBooks] = useState([]);
  const [showStudentForm, setShowStudentForm] = useState(false); // 👈 modal toggle

  useEffect(() => {
    // Load students from API
    getStudents()
      .then((data) => {
        setTotalStudents(data.length);
        setRecentStudents(data.slice(-3).reverse());
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      });

    // Dummy books data
    const dummyBooks = [
      {
        title: "JavaScript Essentials",
        isIssued: true,
        isOverdue: false,
      },
      {
        title: "Data Structures in C",
        isIssued: true,
        isOverdue: true,
      },
      {
        title: "The Alchemist",
        isIssued: false,
        isOverdue: false,
      },
      {
        title: "React for Beginners",
        isIssued: true,
        isOverdue: false,
      },
    ];

    setTotalBooks(dummyBooks.length);
    setBooksIssued(dummyBooks.filter((book) => book.isIssued).length);
    setOverdueBooks(dummyBooks.filter((book) => book.isOverdue).length);
    setRecentBooks(dummyBooks.slice(-3).reverse());
  }, []);

  const handleAddStudentClick = () => {
    setShowStudentForm(true);
  };

  const closeStudentForm = () => {
    setShowStudentForm(false);
  };

  return (
    <div className="p-6 space-y-6 relative">
      {/* Add Student Button */}
      <div className="flex justify-end">
        <Link to='/studentsForm'>
          <button
            onClick={handleAddStudentClick}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            + Add Student
          </button>
        </Link>
      </div>

      {/* ✅ Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h2 className="text-gray-500 text-sm">Total Students</h2>
          <p className="text-2xl font-bold">{totalStudents}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h2 className="text-gray-500 text-sm">Total Books</h2>
          <p className="text-2xl font-bold">{totalBooks}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h2 className="text-gray-500 text-sm">Books Issued</h2>
          <p className="text-2xl font-bold">{booksIssued}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h2 className="text-gray-500 text-sm">Overdue Books</h2>
          <p className="text-2xl font-bold text-red-500">{overdueBooks}</p>
        </div>
      </div>

      {/* ✅ Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Students */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="font-semibold mb-4">Recent Students</h3>
          <ul className="space-y-2">
            {recentStudents.length === 0 ? (
              <li className="text-gray-500">No recent students found.</li>
            ) : (
              recentStudents.map((student, index) => (
                <li key={index} className="border-b pb-2 text-green-400">
                  {student.name} – Joined Recently
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Recent Books */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="font-semibold mb-4">Recent Books</h3>
          <ul className="space-y-2">
            {recentBooks.map((book, index) => (
              <li key={index} className="border-b pb-2">
                {book.title} – {book.isIssued ? "Issued" : "Available"}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 🔽 Fullscreen Modal for Student Form */}
      {showStudentForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white w-full h-full max-w-4xl mx-auto p-8 rounded-md shadow-lg overflow-auto relative">
            {/* Close Button */}
            <button
              onClick={closeStudentForm}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>

            {/* Student Form */}
            <StudentForm onSubmit={closeStudentForm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
