import React, { useState } from "react";
import { FaUserDoctor, FaHospital, FaLocationDot, FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import doctors from "../data/doctors";
import "./Doctors.css";

function Doctors() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(search.toLowerCase()) ||
    doctor.hospital.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="page-background">
      <div className="container">

        <h1 className="page-title">Find Doctors</h1>

        <p className="section-text">
          Search experienced doctors from government hospitals across India.
        </p>

        <input
          type="text"
          placeholder="Search by Doctor, Hospital or Specialization..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="doctor-search"
        />

        <div className="service-grid">

          {filteredDoctors.map((doctor) => (

            <div key={doctor.id} className="emergency-card">

              <div className="service-card-icon">
                <FaUserDoctor />
              </div>

              <h3>{doctor.name}</h3>

              <p>
                <strong>{doctor.specialization}</strong>
              </p>

              <p>
                <FaHospital /> {doctor.hospital}
              </p>

              <p>
                <FaLocationDot /> {doctor.city}
              </p>

              <p>
                <FaStar color="#f5b301" /> {doctor.rating}
              </p>

              

              <button
                className="primary-btn"
                onClick={() => navigate(`/doctor/${doctor.id}`)}
              >
                View Profile
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Doctors;