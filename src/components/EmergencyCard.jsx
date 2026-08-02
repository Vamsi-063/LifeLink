import React from "react";

function EmergencyCard({
  icon,
  title,
  description,
  buttonText,
  onClick,
}) {
  return (
    <div className="emergency-card">
      <div className="service-card-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <button className="primary-btn" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
}

export default EmergencyCard;