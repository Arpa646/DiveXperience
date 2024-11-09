import React from "react";
import "./DiveExperienceProfile.css";

const DiveExperienceProfile = () => {
  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <img
          src="https://i.ibb.co.com/QpSNgwW/Group-1410088209.png" // Replace with the actual image source
          alt="Profile"
          className="profile-image"
        />
        <div className="profile-info ">
          <h2>DiveXperience</h2>
          <p>Azores, Portugal</p>
        </div>
        <button className="details-button">Details</button>
      </div>

      {/* Details Section */}
      <div className="details-section">
        <div className="details-item">
          <p className="label">Dive Centre</p>
          <p>DiveXperience</p>
        </div>
        <div className="details-item">
          <p className="label">Manager Name</p>
          <p>Chris Evans</p>
        </div>
        <div className="details-item">
          <p className="label">Email Address</p>
          <p>divexperience@gmail.com</p>
        </div>
        <div className="details-item">
          <p className="label">Mobile Number</p>
          <p>+44 987456123</p>
        </div>
        <div className="details-item full-width">
          <p className="label">DiveBuddy Join Date</p>
          <p>25th Aug 2024</p>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h3>About</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since.
        </p>
      </div>

      {/* Location Section */}
      <div className="location-section">
        <h3>Location</h3>
        <div className="map-container">
          <img
            src="https://via.placeholder.com/600x300" // Replace with the actual map image
            alt="Location Map"
          />
          <p>P.O. Box 847 Koror, Koror, 96940, Palau</p>
        </div>
      </div>

      <div className="documentStyle">
        <div className="padding document">
          <img
            src="https://i.ibb.co.com/B65xtvX/Group-1410088359.png"
            alt=""
            srcset=""
          />
          <div className="title">
            <p>
              Poor of Business <br />
              Registration
            </p>
          </div>
        </div>
        <div className="padding document">
          <img
            src="https://i.ibb.co.com/B65xtvX/Group-1410088359.png"
            alt=""
            srcset=""
          />
          <div className="title">
            <p>
              Poor of Business <br />
              Registration
            </p>
          </div>
        </div>
        <div className="padding document">
          <img
            src="https://i.ibb.co.com/B65xtvX/Group-1410088359.png"
            alt=""
            srcset=""
          />
          <div className="title">
            <p>
              Poor of Business <br />
              Registration
            </p>
          </div>
        </div>
        <div className="padding document">
          <img
            src="https://i.ibb.co.com/B65xtvX/Group-1410088359.png"
            alt=""
            srcset=""
          />
          <div className="title">
            <p>
              Poor of Business <br />
              Registration
            </p>
          </div>
        </div>
        <div className="padding document">
          <img
            src="https://i.ibb.co.com/B65xtvX/Group-1410088359.png"
            alt=""
            srcset=""
          />
          <div className="title">
            <p>
              Poor of Business <br />
              Registration
            </p>
          </div>
        </div>
        <div className="padding document">
          <img
            src="https://i.ibb.co.com/B65xtvX/Group-1410088359.png"
            alt=""
            srcset=""
          />
          <div className="title">
            <p>
              Poor of Business <br />
              Registration
            </p>
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

export default DiveExperienceProfile;
