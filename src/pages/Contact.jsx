import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

function Contact() {

  return (

    <section className="contact-page page-background">

      <div className="container">

        <h1>Contact Support</h1>

        <p className="section-text">
          We are here when you need us the most.
          LifeLink connects you with reliable emergency support
          anytime, anywhere.
        </p>

        <div className="contact-wrapper">

          <div className="contact-info">

            <div className="contact-card">

              <FaPhone />

              <div>
                <h3>Emergency Helpline</h3>
                <p>Call 108 for immediate medical assistance.</p>
              </div>

            </div>

            <div className="contact-card">

              <FaEnvelope />

              <div>
                <h3>lifelinkemergencycare@gmail.com</h3>
                <p>Our support team will respond quickly.</p>
              </div>

            </div>

            <div className="contact-card">

              <FaLocationDot />

              <div>
                <h3>Emergency Care Center</h3>
                <p>Find nearby healthcare assistance easily.</p>
              </div>

            </div>

          </div>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Enter Your Name"
            />

            <input
              type="email"
              placeholder="Enter Your Email"
            />

            <textarea
              rows="5"
              placeholder="Describe your emergency or message"
            ></textarea>

            <button className="primary-btn">
              Send Message
            </button>

          </form>

        </div>

        <h2 className="map-title">
          Find LifeLink Care Center
        </h2>

        <p className="map-text">
          Locate emergency services near you and get help faster.
        </p>

        <div className="contact-map">

          <iframe
            title="LifeLink Location"
            src="https://www.google.com/maps?q=Andhra Pradesh&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>

        </div>

      </div>

    </section>

  );

}

export default Contact;