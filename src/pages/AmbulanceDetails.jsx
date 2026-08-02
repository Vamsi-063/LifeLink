import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ambulances from "../data/ambulances";

function AmbulanceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const ambulance = ambulances.find(
    (item) => item.id === Number(id)
  );

  if (!ambulance) {
    return (
      <section className="page-background">
        <div className="container">
          <div className="not-found">
            <h2>Ambulance Not Found</h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="page-background">
      <div className="container">

        <div className="ambulance-details">

          <h1>{ambulance.hospital}</h1>

          <div className="ambulance-info">
            <p><strong>Driver:</strong> {ambulance.driver}</p>
            <p><strong>Vehicle No:</strong> {ambulance.vehicleNo}</p>
            <p><strong>Hospital:</strong> {ambulance.hospital}</p>
            <p><strong>City:</strong> {ambulance.city}</p>
            <p><strong>State:</strong> {ambulance.state}</p>
            <p><strong>Phone:</strong> {ambulance.phone}</p>
            <p><strong>Type:</strong> {ambulance.type}</p>
            <p><strong>Status:</strong> {ambulance.status}</p>
            <p><strong>ETA:</strong> {ambulance.eta}</p>
            <p><strong>Charge:</strong> {ambulance.charge}</p>
          </div>

          <button
            className="book-btn"
            onClick={() =>
              navigate(`/bookambulance/${ambulance.id}`)
            }
          >
            Book Ambulance
          </button>

        </div>

      </div>
    </section>
  );
}

export default AmbulanceDetails;