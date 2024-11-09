import React from "react";
import Card from "./Card";
import "./Dashboard.css";
import FilterButton from "./FilterButton";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">
          <img
            src="https://i.ibb.co.com/MCfSFHC/divebuddy.png"
            alt=""
            srcset=""
          />
        </div>
        <nav className="menu">
          <a href="#" className="menu-item active">
            Dashboard
          </a>
          <a href="#" className="menu-item">
            Dive Buddy
          </a>
          <a href="#" className="menu-item">
            Dive Centre
          </a>
          <a href="#" className="menu-item">
            Chat
          </a>
          <a href="#" className="menu-item">
            My Product
          </a>
          <a href="#" className="menu-item">
            Orders
          </a>
        </nav>
      </aside>

      <main className="main-content">
        {/* <section className="stats-section">
          <div className="filterSection">
        
            <h2>This Month</h2>
          

            <FilterButton></FilterButton>
          </div>
          <div className="stats-grid">
            <Card count="150" label="Dive Buddy" icon="👤" />
            <Card count="24" label="Dive Centre" icon="🏠" />
            <Card count="4" label="Dive Site" icon="📍" />
            <Card count="14" label="Dive Log" icon="📅" />
            <Card count="40" label="Orders" icon="🛒" />
            <Card count="4" label="Fish" icon="🐟" />
          </div>
          <h2 className="Textcolor">Approval Request</h2>
          <div className="approval-grid ">
            <div className="approvalCard  ">
              <div className="iconfont">👤</div>

              <p>
                <span className="fontstyle">13</span> <br />{" "}
                <span className="color">Buddy Request</span>
              </p>
            </div>
            <div className="approvalCard  ">
              <div className="iconfont">👤</div>

              <p>
                <span className="fontstyle">13</span> <br />{" "}
                <span className="color">Buddy Request</span>
              </p>
            </div>
          </div>
        </section> */}

        <header className="header">
          <h1>Dashboard</h1>

          <div className="header-icons">
            <input type="text" placeholder="Search" className="search-bar" />
            <button className="notification-icon"></button>
            <img
              src="https://themes.stackbros.in/social_r/assets/03-UJBpqOsq.jpg"
              alt="Profile"
              className="profile-pic"
            />
          </div>
        </header>

        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Dashboard;
