import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ambulances from "../data/ambulances";


function BookAmbulance() {
  const { id } = useParams();
  const navigate = useNavigate();

  const ambulance = ambulances.find(
    (a) => a.id === Number(id)
  );

  const [form, setForm] = useState({
    patient: "",
    phone: "",
    address: "",
    emergency: "",
  });

  if (!ambulance) {
    return (
      <section className="page-background">
        <div className="container">
          <h2>Ambulance Not Found</h2>
        </div>
      </section>
    );
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `🚑 Ambulance Booked Successfully!

Driver: ${ambulance.driver}
Hospital: ${ambulance.hospital}
ETA: ${ambulance.eta}`
    );

    navigate("/ambulances");
  };

  return (
    <section className="page-background">

      <div className="form-container">

        <h1>Book Ambulance</h1>

        <p>
          Fill the details to request an ambulance.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="patient"
            placeholder="Patient Name"
            required
            value={form.patient}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            required
            value={form.phone}
            onChange={handleChange}
          />

          <textarea
            name="address"
            placeholder="Pickup Address"
            required
            value={form.address}
            onChange={handleChange}
          />

          <select
            name="emergency"
            required
            value={form.emergency}
            onChange={handleChange}
          >
            <option value="">
              Select Emergency Type
            </option>

            <option>Heart Attack</option>
            <option>Accident</option>
            <option>Pregnancy</option>
            <option>Stroke</option>
            <option>Burn Injury</option>
            <option>Other</option>

          </select>

          <button
            type="submit"
            className="primary-btn"
          >
            Confirm Booking
          </button>

        </form>

      </div>

    </section>
  );
}

export default BookAmbulance;