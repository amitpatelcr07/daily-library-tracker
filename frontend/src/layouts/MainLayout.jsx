import React from "react";
import Header from "../components/common/Header.jsx";
import Footer from "../components/common/Footer.jsx";
import Sidebar from "../components/common/Sidebar.jsx";
import Dashboard from "../components/DashboardWidget.jsx";

import AppRoutes from "../routes/AppRoutes.jsx";

const MainLayout = () => {
  
     



  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-col lg:flex-row flex-1">
        {/* Sidebar */}
        <div className=" bg-gray-800 text-green">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-6">
         <AppRoutes/>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
