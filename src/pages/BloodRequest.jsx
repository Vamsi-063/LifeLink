import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import bloodBanks from "../data/bloodBanks";

function BloodRequest() {
  const { id } = useParams();
  const navigate = useNavigate();

  const bank = bloodBanks.find(
    (b) => b.id === Number(id)
  );

  const [form, setForm] = useState({
    patient: "",
    mobile: "",
    bloodGroup: "",
    hospital: "",
    date: "",
    reason: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `✅ Blood Request Sent Successfully!

Blood Bank: ${bank.name}
Blood Group: ${form.bloodGroup}`
    );

    navigate("/bloodbanks");
  };

  return (
    <section className="page-background">

      <div className="form-container">

        <h1>Request Blood</h1>

        <p>
          <strong>{bank.name}</strong>
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="patient"
            placeholder="Patient Name"
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            onChange={handleChange}
            required
          />

          <select
            name="bloodGroup"
            onChange={handleChange}
            required
          >
            <option value="">
              Select Blood Group
            </option>

            {bank.bloodGroups.map((group) => (
              <option
                key={group}
                value={group}
              >
                {group}
              </option>
            ))}

          </select>

          <input
            type="text"
            name="hospital"
            placeholder="Hospital Name"
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="date"
            onChange={handleChange}
            required
          />

          <textarea
            rows="4"
            name="reason"
            placeholder="Reason"
            onChange={handleChange}
          />

          <button type="submit">
            Submit Request
          </button>

        </form>

      </div>

    </section>
  );
}

export default BloodRequest;