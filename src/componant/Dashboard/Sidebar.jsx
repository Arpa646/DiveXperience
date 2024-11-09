// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img
          src="https://i.ibb.co.com/MCfSFHC/divebuddy.png"
          alt="DiveBuddy Logo"
        />
      </div>
      <nav className="menu">
        <Link to="/" className="menu-item active">Dashboard</Link>
        <Link to="/dive-buddy" className="menu-item">Dive Buddy</Link>
        <Link to="/dive-centre" className="menu-item">Dive Centre</Link>
        <Link to="/chat" className="menu-item">Chat</Link>
        <Link to="/my-product" className="menu-item">My Product</Link>
        <Link to="/orders" className="menu-item">Orders</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
