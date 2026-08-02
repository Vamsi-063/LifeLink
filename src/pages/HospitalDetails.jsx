import React from "react";
import { useParams } from "react-router-dom";
import {
  FaHospital,
  FaLocationDot,
  FaPhone,
  FaClock,
  FaStar,
  FaGlobe,
} from "react-icons/fa6";

import hospitals from "../data/hospitals";
import "./HospitalDetails.css";

function HospitalDetails() {
  const { id } = useParams();

  const hospital = hospitals.find(
    (h) => h.id === Number(id)
  );

  if (!hospital) {
    return (
      <section className="page-background">
        <div className="details-container">
          <h2>Hospital Not Found</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="page-background">
      <div className="details-container">

        <div className="details-card">

          <div className="details-header">

            <FaHospital className="hospital-icon" />

            <h1>{hospital.name}</h1>

            <p className="rating">
              <FaStar /> {hospital.rating} / 5
            </p>

          </div>

          <div className="info-grid">

            <div className="info-box">
              <h4>📍 Address</h4>
              <p>{hospital.address}</p>
            </div>

            <div className="info-box">
              <h4>🏙 City</h4>
              <p>{hospital.city}</p>
            </div>

            <div className="info-box">
              <h4>🗺 State</h4>
              <p>{hospital.state}</p>
            </div>

            <div className="info-box">
              <h4>
                <FaPhone /> Phone
              </h4>
              <p>{hospital.phone}</p>
            </div>

            <div className="info-box">
              <h4>
                <FaClock /> Timings
              </h4>
              <p>{hospital.timings}</p>
            </div>

            <div className="info-box">
              <h4>🚑 Emergency</h4>
              <p>
                {hospital.emergency
                  ? "Available 24/7"
                  : "Not Available"}
              </p>
            </div>

          </div>

          <h2 className="department-title">
            Available Departments
          </h2>

          <div className="department-list">

            {hospital.departments.map((dept, index) => (
              <span
                key={index}
                className="department-item"
              >
                {dept}
              </span>
            ))}

          </div>

          <div className="button-group">

            <button
              className="call-btn"
              onClick={() =>
                window.open(`tel:${hospital.phone}`)
              }
            >
              📞 Call Hospital
            </button>

            <button
              className="map-btn"
              onClick={() =>
                window.open(
                  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    hospital.address
                  )}`,
                  "_blank"
                )
              }
            >
              <FaLocationDot /> Get Directions
            </button>

            {hospital.website && (
              <button
                className="website-btn"
                onClick={() =>
                  window.open(hospital.website, "_blank")
                }
              >
                <FaGlobe /> Visit Website
              </button>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default HospitalDetails;