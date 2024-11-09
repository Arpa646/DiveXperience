import React from "react";
import "./Card.css";

const Card = ({ icon, count, label }) => {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <h1 className="count">{count}</h1>
      <p className="label">{label}</p>
    </div>
  );
};

export default Card;
