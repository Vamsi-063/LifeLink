import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaUserDoctor,
  FaHospital,
  FaLocationDot,
  FaPhone,
  FaClock,
  FaGraduationCap,
  FaBriefcase,
  FaStar,
} from "react-icons/fa6";

import doctors from "../data/doctors";
import "./DoctorDetails.css";

function DoctorDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const doctor = doctors.find(
    (d) => d.id === Number(id)
  );

  if (!doctor) {
    return (
      <section className="page-background">
        <div className="details-container">
          <h2>Doctor Not Found</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="page-background">

      <div className="details-container">

        <div className="details-card">

          <div className="details-header">

            <div className="doctor-avatar">
              <FaUserDoctor />
            </div>

            <h1>{doctor.name}</h1>

            <p className="doctor-specialization">
              {doctor.specialization}
            </p>

            <p className="rating">
              <FaStar /> {doctor.rating} / 5
            </p>

          </div>

          <div className="info-grid">

            <div className="info-box">
              <h4><FaHospital /> Hospital</h4>
              <p>{doctor.hospital}</p>
            </div>

            <div className="info-box">
              <h4><FaLocationDot /> City</h4>
              <p>{doctor.city}</p>
            </div>

            <div className="info-box">
              <h4><FaGraduationCap /> Qualification</h4>
              <p>{doctor.qualification}</p>
            </div>

            <div className="info-box">
              <h4><FaBriefcase /> Experience</h4>
              <p>{doctor.experience}</p>
            </div>

            <div className="info-box">
              <h4><FaClock /> Timings</h4>
              <p>{doctor.timings}</p>
            </div>

            <div className="info-box">
              <h4><FaPhone /> Phone</h4>
              <p>{doctor.phone}</p>
            </div>

          </div>

          <div className="button-group">

            <button
              className="call-btn"
              onClick={() => window.open(`tel:${doctor.phone}`)}
            >
              📞 Call Doctor
            </button>

            <button
  className="book-btn"
  onClick={() => navigate(`/appointment/${doctor.id}`)}
>
  📅 Book Appointment
</button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default DoctorDetails;