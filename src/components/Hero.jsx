import React from "react";
import { useNavigate } from "react-router-dom";
import { FaAmbulance, FaHeartbeat } from "react-icons/fa";

function Hero() {

  const navigate = useNavigate();

  return (

    <section className="hero">

      <div className="hero-container">


        {/* Left Content */}
        <div className="hero-content">

          <h1>
            Your Life,
            <span> Our Priority</span>
          </h1>


          <p>
            LifeLink Emergency Care helps you get immediate
            medical assistance during emergencies with fast
            response, ambulance support and live location tracking.
          </p>


          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => navigate("/dashboard")}
            >
              <FaHeartbeat /> Emergency SOS
            </button>


            <button
              className="secondary-btn"
              onClick={() => navigate("/services")}
            >
              <FaAmbulance /> Our Services
            </button>

          </div>

        </div>



        {/* Right Image */}
        <div className="hero-image">

          <img
            src="/medical-bg.jpg"
            alt="Emergency Care"
          />

        </div>


      </div>

    </section>

  );
}

export default Hero;