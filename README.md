# 📚 Library Tracking System

A full-stack application to manage a library's daily activities such as student registration, book management, issuing/returning books, and tracking overdue items.  

This project is built with **Node.js, Express, MongoDB, and React** and provides a simple dashboard for administrators to monitor and manage library operations.

---

## 🚀 Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS
- React Router DOM

**Backend**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication

---

## ✨ Features

- ✅ Student Management (Add / Update / Delete students)  
- ✅ Book Management (Add / Update / Delete books)  
- ✅ Issue / Return Books  
- ✅ Daily Tracking of Students  
- ✅ Dashboard with Statistics (total students, books, issued books, etc.)  
- ✅ Secure Authentication with JWT  
- ✅ Responsive UI with Sidebar, Header & Footer  

---

## 📂 Project Structure
































































































































frontend/
│── public/
│
│── src/
│   ├── assets/                # Images, icons, styles, logos
│   │   ├── images/
│   │   └── styles/
│
│   ├── components/            # Reusable UI components
│   │   ├── common/            # Common UI pieces (buttons, inputs, modals)
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   ├── Sidebar.js
│   │   │   └── Loader.js
│   │   ├── StudentForm.js
│   │   ├── BookForm.js
│   │   ├── StatsCard.js
│   │   └── DashboardWidget.js
│
│   ├── layouts/               # Page wrappers with header/footer/sidebar
│   │   ├── MainLayout.js
│   │   └── AuthLayout.js
│
│   ├── pages/                 # Full pages for routes
│   │   ├── Home.js
│   │   ├── Students.js
│   │   ├── Books.js
│   │   ├── Stats.js
│   │   ├── Login.js
│   │   └── Register.js
│
│   ├── routes/                # All route configs
│   │   ├── AppRoutes.js       # Main routes (protected/public)
│   │   └── ProtectedRoute.js  # Auth-guarded routes
│
│   ├── redux/ (or context/)   # State management
│   │   ├── store.js
│   │   ├── studentSlice.js
│   │   ├── bookSlice.js
│   │   └── authSlice.js
│
│   ├── services/              # API calls (axios/fetch)
│   │   ├── apiClient.js
│   │   ├── studentService.js
│   │   ├── bookService.js
│   │   └── authService.js
│
│   ├── utils/                 # Helper functions
│   │   ├── validators.js
│   │   ├── constants.js
│   │   └── formatDate.js
│
│   ├── App.js
│   └── index.js
│
└── package.json





