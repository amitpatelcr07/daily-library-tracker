// src/routes/AboutRoute.jsx
import React from "react";

import { Route } from "react-router-dom";
import Dashboard from "../components/DashboardWidget.jsx";

const  AppRoutes=()=> {
  return <Route path="/" element={<Dashboard />} />;
}

export default AppRoutes;


