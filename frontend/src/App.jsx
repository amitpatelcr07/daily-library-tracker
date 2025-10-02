import React from "react";
import MainLayout from "./layouts/MainLayout.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import { createBrowserRouter, Route, Routes } from "react-router-dom";
import  router  from "./routes/AppRoutes.jsx";
function App() {
  return (
    
      <MainLayout>
        <Routes>
          <AppRoutes />
        </Routes>
      </MainLayout>
    
  );
}

export default App;
