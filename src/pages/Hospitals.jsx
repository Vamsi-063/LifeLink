import React, { useState } from "react";
import { FaHospital, FaLocationDot, FaPhone } from "react-icons/fa6";
import "./Hospitals.css";
import hospitals from "../data/hospitals";
import { useNavigate } from "react-router-dom";


function Hospitals() {
  const [search, setSearch] = useState("");
  
  const filteredHospitals = hospitals.filter((hospital) =>
    hospital.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="page-background">
      <div className="container">

        <h1 className="page-title">Nearby Hospitals</h1>

        <p className="section-text">
          Search hospitals and find emergency medical care quickly.
        </p>

        <input
          type="text"
          placeholder="Search Hospital..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="hospital-search"
        />

        <div className="service-grid">

  {filteredHospitals.length > 0 ? (

    filteredHospitals.map((hospital) => (

      <div key={hospital.id} className="emergency-card">

        <div className="service-card-icon">
          <FaHospital />
        </div>

        <h3>{hospital.name}</h3>

        <p>
          <FaLocationDot /> {hospital.location}
        </p>

        <p>
          <FaPhone /> {hospital.phone}
        </p>

        <button
          className="primary-btn"
          onClick={() => {
            window.location.href = `/hospital/${hospital.id}`;
          }}
        >
          View Details
        </button>

      </div>

    ))

  ) : (

    <div className="no-results">

      <h2>🏥 No Hospital Found</h2>

      <p>
        Try searching with another hospital name.
      </p>

    </div>

  )}

</div>

      </div>
    </section>
  );
}

export default Hospitals;