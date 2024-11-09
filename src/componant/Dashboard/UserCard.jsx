import React from "react";
import "./UserCard.css";

const UserCard = ({ name, location, image }) => {
  return (
    <div className="user-card">
      <img src={image} alt={`${name}'s profile`} className="user-image" />
      <div className="user-info">
        <h2 className="user-name">{name}</h2>
        <p className="user-location">{location}</p>
      </div>
      <div className="user-actions">
        <button className="approve-button">Approve</button>
        <button className="decline-button">Decline</button>
      </div>
    </div>
  );
};

export default UserCard;
