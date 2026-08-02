import React from "react";
import { FaHeartPulse } from "react-icons/fa6";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">


        {/* Logo Section */}
        <div className="footer-brand">

          <h2>
            <FaHeartPulse />
            LifeLink
          </h2>

          <p>
            Emergency Care System providing fast
            medical assistance and support.
          </p>

        </div>



        {/* Links */}
        <div className="footer-links">

          <h3>
            Quick Links
          </h3>

          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
          <a href="/login">Login</a>

        </div>



        {/* Emergency */}
        <div className="footer-contact">

          <h3>
            Emergency
          </h3>

          <p>
            🚑 Ambulance Support
          </p>

          <p>
            📍 Live Location Tracking
          </p>

          <p>
            ❤️ 24/7 Medical Help
          </p>

        </div>


      </div>


      <div className="footer-bottom">

        <p>
          © 2026 LifeLink Emergency Care. All Rights Reserved.
        </p>

      </div>


    </footer>

  );

}

export default Footer;


