// StatsSection.js
import React from "react";
import Card from "./Card";
import FilterButton from "./FilterButton";

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="filterSection">
        <h2>This Month</h2>
        <FilterButton />
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
      <div className="approval-grid">
        <div className="approvalCard">
          <div className="iconfont">👤</div>
          <p>
            <span className="fontstyle">13</span>
            <br />
            <span className="color">Buddy Request</span>
          </p>
        </div>
        <div className="approvalCard">
          <div className="iconfont">👤</div>
          <p>
            <span className="fontstyle">13</span>
            <br />
            <span className="color">Buddy Request</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
