import React from 'react';
import './ProfileReview.css';

const DiveCenter = () => {
  return (
    <div className="profile-review">
      {/* Profile Section */}
      <div className="profile-header">
        <img
          src="https://via.placeholder.com/100" // Replace with the actual image source
          alt="Profile"
          className="profile-image"
        />
        <div className="profile-info">
          <h2>Will Smith</h2>
          <p>Azores, Portugal</p>
        </div>
        <button className="details-button">Details</button>
      </div>

      {/* Media Section */}
      <div className="media-section">
        {/* Video Section */}
        <div className="media-card">
          <h3>Video</h3>
          <div className="video-placeholder">
            {/* Replace src with actual video thumbnail */}
            <img
              src="https://via.placeholder.com/150" // Replace with the actual video thumbnail
              alt="Video Thumbnail"
              className="video-thumbnail"
            />
            <div className="play-button">&#9658;</div>
          </div>
        </div>

        {/* Document Section */}
        <div className="media-card">
          <h3>Document</h3>
          <div className="document-placeholder">
            {/* Replace src with actual document */}
            <img
              src="https://via.placeholder.com/150" // Replace with the actual document image
              alt="Document"
              className="document-thumbnail"
            />
          </div>
        </div>
      </div>

      {/* Approval Buttons */}
      <div className="approval-buttons">
        <button className="approve-button">Approve</button>
        <button className="decline-button">Decline</button>
      </div>
    </div>
  );
};

export default DiveCenter;
