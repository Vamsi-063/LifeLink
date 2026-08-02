import React from "react";
import { Link } from "react-router-dom";
import {
  FaTruckMedical,
  FaHospital,
  FaHeartPulse,
  FaLocationDot,
} from "react-icons/fa6";

import "./Home.css";

function Home() {
  return (
    <div className="home-container page-background">

      {/* HERO SECTION */}

      <section className="hero">

        <div className="hero-container">

          {/* Left */}

          <div className="hero-content">

            <h1>
              <span>LifeLink</span>
              <br />
              Emergency Care
            </h1>

            <p>
              Fast and reliable emergency management system.
              Get medical help, ambulance services and live location
              support whenever you need it.
            </p>

            <div className="hero-buttons">

              <Link
                to="/dashboard"
                className="hero-sos-btn"
              >
                <FaHeartPulse />
                SOS Emergency
              </Link>

              <Link
                to="/services"
                className="hero-service-btn"
              >
                View Services
              </Link>

            </div>

          </div>

          {/* Right */}

          <div className="feature-grid">

            <div className="feature-card">
              <FaTruckMedical className="feature-icon"/>
              <h3>Fast Ambulance</h3>
              <p>Book an ambulance instantly with one click.</p>
            </div>

            <div className="feature-card">
              <FaHospital className="feature-icon"/>
              <h3>Nearby Hospitals</h3>
              <p>Locate nearby hospitals and emergency centers.</p>
            </div>

            <div className="feature-card">
              <FaLocationDot className="feature-icon"/>
              <h3>Live Tracking</h3>
              <p>Share your live location during emergencies.</p>
            </div>

            <div className="feature-card">
              <FaHeartPulse className="feature-icon"/>
              <h3>24/7 Emergency</h3>
              <p>Emergency support available anytime.</p>
            </div>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="stats">

        <div className="container">

          <div className="stats-card">
            <h2>1000+</h2>
            <p>Emergency Cases</p>
          </div>

          <div className="stats-card">
            <h2>500+</h2>
            <p>Hospitals</p>
          </div>

          <div className="stats-card">
            <h2>250+</h2>
            <p>Ambulances</p>
          </div>

          <div className="stats-card">
            <h2>24/7</h2>
            <p>Emergency Support</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;