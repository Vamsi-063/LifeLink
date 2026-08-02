import React, { useState } from "react";
import {
  FaPhoneVolume,
  FaPhone,
} from "react-icons/fa6";

import emergencyContacts from "../data/emergencyContacts";

function EmergencyContacts() {
  const [search, setSearch] = useState("");

  const filteredContacts = emergencyContacts.filter(
    (contact) =>
      contact.service
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <section className="page-background">

      <div className="container">

        <h1 className="page-title">
          Emergency Contacts
        </h1>

        <p className="section-text">
          Important emergency numbers available 24/7.
        </p>

        <input
          type="text"
          className="search-input"
          placeholder="Search Service..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <div className="service-grid">

          {filteredContacts.map((contact) => (

            <div
              className="emergency-card"
              key={contact.id}
            >

              <div className="service-card-icon">
                <FaPhoneVolume />
              </div>

              <h3>{contact.service}</h3>

              <p>{contact.description}</p>

              <h2
                style={{
                  color: "#1565c0",
                  margin: "15px 0",
                }}
              >
                {contact.number}
              </h2>

              <button
                className="primary-btn"
                onClick={() =>
                  window.open(`tel:${contact.number}`)
                }
              >
                <FaPhone /> Call Now
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default EmergencyContacts;