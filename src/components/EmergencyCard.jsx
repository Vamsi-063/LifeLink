import React from "react";

function EmergencyCard({ icon, title, description, buttonText }) {
  return (
    <div className="emergency-card">

      <div className="service-card-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <button className="primary-btn">
        {buttonText}
      </button>

    </div>
  );
}

export default EmergencyCard;