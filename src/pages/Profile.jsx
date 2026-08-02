import React, { useState } from "react";
import {
  FaCircleUser,
  FaEnvelope,
  FaPhone,
  FaDroplet,
  FaUserGroup
} from "react-icons/fa6";
import api from "../services/api";

function Profile() {

  const currentUser = JSON.parse(localStorage.getItem("user"));

  const [editing, setEditing] = useState(false);

  const [user, setUser] = useState(currentUser);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = async () => {

    try {

      await api.put(`/users/${user.id}`, user);

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      alert("Profile Updated Successfully ✅");

      setEditing(false);

    } catch (err) {

      alert("Unable to update profile ❌");

    }

  };

  const logout = () => {

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");

    window.location.href = "/login";

  };

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

                  <input
                    type="email"
                    name="email"
                    value={user.email || ""}
                    onChange={handleChange}
                    disabled={!editing}
                  />

                </div>

              </div>

              <div className="profile-item">

                <FaPhone className="profile-icon" />

                <div>

                  <h4>Phone</h4>

                  <input
                    type="text"
                    name="phone"
                    value={user.phone || ""}
                    onChange={handleChange}
                    disabled={!editing}
                  />

                </div>

              </div>

              <div className="profile-item">

                <FaDroplet className="profile-icon" />

                <div>

                  <h4>Blood Group</h4>

                  <input
                    type="text"
                    name="bloodGroup"
                    value={user.bloodGroup || ""}
                    onChange={handleChange}
                    disabled={!editing}
                  />

                </div>

              </div>

              <div className="profile-item">

                <FaUserGroup className="profile-icon" />

                <div>

                  <h4>Emergency Contact</h4>

                  <input
                    type="text"
                    name="emergencyName"
                    value={user.emergencyName || ""}
                    onChange={handleChange}
                    disabled={!editing}
                  />

                </div>

              </div>

              <div className="profile-item">

                <FaPhone className="profile-icon" />

                <div>

                  <h4>Emergency Phone</h4>

                  <input
                    type="text"
                    name="emergencyPhone"
                    value={user.emergencyPhone || ""}
                    onChange={handleChange}
                    disabled={!editing}
                  />

                </div>

              </div>

            </div>

            <div className="profile-buttons">

              {!editing ? (

                <button
                  className="edit-btn"
                  onClick={() => setEditing(true)}
                >
                  Edit Profile
                </button>

              ) : (

                <button
                  className="edit-btn"
                  onClick={saveProfile}
                >
                  Save Profile
                </button>

              )}

              <button
                className="logout-btn"
                onClick={logout}
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