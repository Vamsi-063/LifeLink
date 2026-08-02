import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaDroplet,
  FaHospital,
  FaLocationDot,
  FaPhone,
  FaClock,
} from "react-icons/fa6";

import bloodBanks from "../data/bloodBanks";

function BloodBankDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const bank = bloodBanks.find(
    (b) => b.id === Number(id)
  );

  if (!bank) {
    return (
      <section className="page-background">
        <div className="details-container">
          <h2>Blood Bank Not Found</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="page-background">

      <div className="details-container">

        <div className="details-card">

          {/* Header */}

          <div className="details-header">

            <div className="blood-icon">
              <FaDroplet />
            </div>

            <h1>{bank.name}</h1>

            <p className="doctor-specialization">
              {bank.hospital}
            </p>

          </div>

          {/* Information */}

          <div className="info-grid">

            <div className="info-box">
              <h4><FaHospital /> Hospital</h4>
              <p>{bank.hospital}</p>
            </div>

            <div className="info-box">
              <h4><FaLocationDot /> State</h4>
              <p>{bank.state}</p>
            </div>

            <div className="info-box">
              <h4><FaLocationDot /> City</h4>
              <p>{bank.city}</p>
            </div>

            <div className="info-box">
              <h4><FaLocationDot /> Address</h4>
              <p>{bank.address}</p>
            </div>

            <div className="info-box">
              <h4><FaPhone /> Phone</h4>
              <p>{bank.phone}</p>
            </div>

            <div className="info-box">
              <h4><FaClock /> Emergency</h4>
              <p>
                {bank.emergency
                  ? "Available 24/7"
                  : "Not Available"}
              </p>
            </div>

            <div className="info-box">
              <h4><FaDroplet /> Available Blood Groups</h4>

              <div className="blood-groups">
                {bank.bloodGroups.map((group) => (
                  <span
                    key={group}
                    className="blood-group"
                  >
                    {group}
                  </span>
                ))}
              </div>

            </div>

          </div>

          {/* Buttons */}

          <div className="button-group">

            <button
              className="call-btn"
              onClick={() => window.open(`tel:${bank.phone}`)}
            >
              📞 Call Blood Bank
            </button>

            <button
              className="request-btn"
              onClick={() =>
                navigate(`/bloodrequest/${bank.id}`)
              }
            >
              🩸 Request Blood
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default BloodBankDetails;