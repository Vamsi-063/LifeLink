import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaTruckMedical,
  FaHospital,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";

import ambulances from "../data/ambulances";

function Ambulances() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredAmbulances = ambulances.filter(
    (ambulance) =>
      ambulance.hospital
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      ambulance.city
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      ambulance.state
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <section className="page-background">
      <div className="container">

        <h1 className="page-title">Available Ambulances</h1>

        <p className="section-text">
          Search nearby ambulance services.
        </p>

        <input
          type="text"
          className="hospital-search"
          placeholder="Search by Hospital, City or State..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="service-grid">

          {filteredAmbulances.length > 0 ? (
            filteredAmbulances.map((ambulance) => (
              <div
                key={ambulance.id}
                className="emergency-card"
              >

                <div className="service-card-icon">
                  <FaTruckMedical />
                </div>

                <h3>{ambulance.hospital}</h3>

                <p>
                  <FaLocationDot /> {ambulance.city}, {ambulance.state}
                </p>

                <p>
                  <FaHospital /> {ambulance.type}
                </p>

                <p>
                  <FaPhone /> {ambulance.phone}
                </p>

 <button
  className="primary-btn"
  onClick={() => {
    console.log("Clicked:", ambulance.id);
    alert("Clicked " + ambulance.id);
    navigate(`/ambulance/${ambulance.id}`);
  }}
>
  View Details
</button>

              </div>
            ))
          ) : (
            <h3 style={{ textAlign: "center", width: "100%" }}>
              No Ambulances Found
            </h3>
          )}

        </div>

      </div>
    </section>
  );
}

export default Ambulances;