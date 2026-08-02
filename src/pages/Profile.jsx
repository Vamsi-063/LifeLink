import React from "react";
import {
  FaCircleUser,
  FaEnvelope,
  FaPhone,
  FaDroplet,
  FaUserGroup
} from "react-icons/fa6";

function Profile() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (

    <section className="profile-page page-background">

      <div className="container">

        <h1>My Profile</h1>

        {user ? (

          <div className="profile-card">

            <div className="profile-header">

              <FaCircleUser className="profile-avatar" />

              <h2>{user.name}</h2>

              <span className="profile-status">
                Active Member
              </span>

            </div>

            <div className="profile-details">

              <div className="profile-item">
                <FaEnvelope className="profile-icon" />
                <div>
                  <h4>Email</h4>
                  <p>{user.email}</p>
                </div>
              </div>

              <div className="profile-item">
                <FaPhone className="profile-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>{user.phone}</p>
                </div>
              </div>

              <div className="profile-item">
                <FaDroplet className="profile-icon" />
                <div>
                  <h4>Blood Group</h4>
                  <p>{user.bloodGroup}</p>
                </div>
              </div>

              <div className="profile-item">
                <FaUserGroup className="profile-icon" />
                <div>
                  <h4>Emergency Contact</h4>
                  <p>{user.emergencyName}</p>
                </div>
              </div>

              <div className="profile-item">
                <FaPhone className="profile-icon" />
                <div>
                  <h4>Emergency Phone</h4>
                  <p>{user.emergencyPhone}</p>
                </div>
              </div>

            </div>

            <div className="profile-buttons">

              <button className="edit-btn">
                Edit Profile
              </button>

              <button
                className="logout-btn"
                onClick={() => {
                  localStorage.removeItem("isLoggedIn");
                  window.location.href = "/login";
                }}
              >
                Logout
              </button>

            </div>

          </div>

        ) : (

          <div className="no-profile">

            <h2>No User Data Found</h2>

            <p>Please register first.</p>

          </div>

        )}

      </div>

    </section>

  );

}

export default Profile;