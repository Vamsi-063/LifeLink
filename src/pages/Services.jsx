import React from "react";
import { useNavigate } from "react-router-dom";
import EmergencyCard from "./EmergencyCard";

import {
  FaTruckMedical,
  FaHospital,
  FaUserDoctor,
  FaDroplet,
  FaPhoneVolume,
} from "react-icons/fa6";

function Services() {
  const navigate = useNavigate();

  const services = [
    {
  icon: <FaTruckMedical />,
  title: "Ambulance Service",
  description: "Get emergency ambulance support quickly during critical situations.",
  buttonText: "Request Ambulance",
  path: "/ambulances",
},
    {
  icon: <FaHospital />,
  title: "Nearby Hospitals",
  description: "Find nearby hospitals and emergency medical centers.",
  buttonText: "View Hospitals",
  path: "/hospitals",
},
   {
  icon: <FaUserDoctor />,
  title: "Doctor Support",
  description: "Connect with doctors for immediate medical guidance.",
  buttonText: "Find Doctor",
  path: "/doctors",
},
    {
  icon: <FaDroplet />,
  title: "Blood Bank",
  description: "Find available blood resources during emergencies.",
  buttonText: "Search Blood",
  path: "/bloodbanks",
},
    {
  icon: <FaPhoneVolume />,
  title: "Emergency Contact",
  description: "Quick access to emergency helpline support.",
  buttonText: "Call Now",
  path: "/emergencycontacts",
},
  ];

  return (
    <section className="services-page page-background">
      <div className="container">
        <h1>Our Emergency Services</h1>

        <p className="section-text">
          Providing fast and reliable healthcare support whenever you need it.
        </p>

        <div className="service-grid">
          {services.map((service, index) => (
            <EmergencyCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              buttonText={service.buttonText}
              onClick={() => navigate(service.path)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;