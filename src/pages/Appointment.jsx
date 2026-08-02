import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import doctors from "../data/doctors";
import "./Appointment.css";

function Appointment() {
  const { id } = useParams();
  const navigate = useNavigate();

  const doctor = doctors.find((d) => d.id === Number(id));

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    mobile: "",
    date: "",
    time: "",
    problem: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.mobile ||
      !form.date ||
      !form.time
    ) {
      alert("Please fill all required fields.");
      return;
    }

    alert(
      `✅ Appointment Booked Successfully!

Doctor: ${doctor.name}
Hospital: ${doctor.hospital}
Date: ${form.date}
Time: ${form.time}`
    );

    navigate("/doctors");
  };

  if (!doctor) {
    return <h2>Doctor Not Found</h2>;
  }

  return (
    <section className="appointment-page">

      <div className="appointment-container">

        <h1>Book Appointment</h1>

        <div className="doctor-info">

          <h2>{doctor.name}</h2>

          <p>{doctor.specialization}</p>

          <p>{doctor.hospital}</p>

        </div>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Patient Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
          />

          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />

          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
          />

          <textarea
            name="problem"
            rows="4"
            placeholder="Describe Your Problem"
            value={form.problem}
            onChange={handleChange}
          />

          <button type="submit">
            Confirm Appointment
          </button>

        </form>

      </div>

    </section>
  );
}

export default Appointment;