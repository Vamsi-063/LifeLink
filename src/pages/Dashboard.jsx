import React from "react";
import {
  FaLocationDot,
  FaPhone,
  FaTriangleExclamation,
  FaTruckMedical,
  FaHospital,
  FaUser
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const handleSOS = () => {

    if (!navigator.geolocation) {
      alert("Location not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(

      (position) => {

        const sosData = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          time: new Date().toLocaleString(),
          status: "Emergency"
        };

        localStorage.setItem(
          "sosData",
          JSON.stringify(sosData)
        );

        alert("🚨 SOS Alert Sent Successfully!");

      },

      () => {
        alert("Unable to get location");
      }

    );

  };

  return (

    <section className="dashboard-page page-background">

      <div className="container">

        {/* Header */}

        <div className="dashboard-header">

          <div>

            <h2>👋 Welcome to LifeLink</h2>

            <p>Your Safety Is Our Priority</p>

          </div>

          <div className="status-box">

            <span className="status-dot"></span>

            Safe

          </div>

        </div>

        <h1>Emergency Dashboard</h1>

        <div className="dashboard-grid">

          {/* SOS */}

          <div className="dashboard-card sos-card">

            <FaTriangleExclamation className="card-icon" />

            <h2>Emergency SOS</h2>

            <p>
              Send your live location instantly during emergencies.
            </p>

            <button
              className="sos-btn"
              onClick={handleSOS}
            >
              SOS
            </button>

          </div>

          {/* Live Location */}

          <div className="dashboard-card">

            <FaLocationDot className="card-icon location" />

            <h2>Live Location</h2>

            <p>
              Share your real-time location with emergency services.
            </p>

            <button
              className="blue-btn"
              onClick={() => navigate("/location")}
            >
              View Location
            </button>

          </div>

          {/* Emergency Call */}

          <div className="dashboard-card">

            <FaPhone className="card-icon call" />

            <h2>Emergency Call</h2>

            <p>
              Call emergency support immediately.
            </p>

            <a href="tel:108">

              <button className="red-btn">
                Call 108
              </button>

            </a>

          </div>

          {/* Ambulance */}

          <div className="dashboard-card">

            <FaTruckMedical className="card-icon ambulance" />

            <h2>Request Ambulance</h2>

            <p>
              Request the nearest available ambulance quickly.
            </p>

            <button
              className="green-btn"
              onClick={() => navigate("/services")}
            >
              Request
            </button>

          </div>

          {/* Hospitals */}

          <div className="dashboard-card">

            <FaHospital className="card-icon hospital" />

            <h2>Nearby Hospitals</h2>

            <p>
              Find nearby hospitals and emergency medical centers.
            </p>

            <button
              className="purple-btn"
              onClick={() => navigate("/services")}
            >
              View Hospitals
            </button>

          </div>

          {/* Profile */}

          <div className="dashboard-card">

            <FaUser className="card-icon profile" />

            <h2>My Profile</h2>

            <p>
              Manage your personal and emergency information.
            </p>

            <button
              className="dark-btn"
              onClick={() => navigate("/profile")}
            >
              Open Profile
            </button>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Dashboard;