import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaDroplet,
  FaHospital,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";

import bloodBanks from "../data/bloodBanks";

function BloodBanks() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredBloodBanks = bloodBanks.filter((bank) =>
    bank.name.toLowerCase().includes(search.toLowerCase()) ||
    bank.city.toLowerCase().includes(search.toLowerCase()) ||
    bank.bloodGroups.join(" ").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="page-background">

      <div className="container">

        <h1 className="page-title">
          Blood Banks
        </h1>

        <p className="section-text">
          Search blood banks and available blood groups.
        </p>

        <input
          type="text"
          placeholder="Search by Blood Group, City or Blood Bank..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="service-grid">

          {filteredBloodBanks.map((bank) => (

            <div
              className="emergency-card"
              key={bank.id}
            >

              <div className="service-card-icon">
                <FaDroplet />
              </div>

              <h3>{bank.name}</h3>

              <p>
                <FaHospital /> {bank.hospital}
              </p>

              <p>
                <FaLocationDot /> {bank.city}
              </p>

              <p>
                <FaPhone /> {bank.phone}
              </p>

              <p>
                <strong>Available:</strong>
                <br />
                {bank.bloodGroups.join(", ")}
              </p>

              <button
                className="primary-btn"
                onClick={() =>
                  navigate(`/bloodbank/${bank.id}`)
                }
              >
                View Details
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default BloodBanks;