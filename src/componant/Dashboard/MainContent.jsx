// Dashboard.js
import React from "react";
import Sidebar from "./Sidebar";
import "./Dashboard.css";
import { Outlet } from "react-router-dom";
import FilterButton from "./FilterButton";
const MainContent = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      
    
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default MainContent;
