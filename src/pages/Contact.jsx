import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaWhatsapp,
} from "react-icons/fa6";

function Contact() {
  return (
    <section className="contact-page page-background">
      <div className="container">

        <h1>Contact Support</h1>

        <p className="section-text">
          Need help? Contact the LifeLink Emergency Care support team.
          You can call, email, or chat with us on WhatsApp anytime.
        </p>

        <div className="contact-wrapper">

          <div className="contact-info">

            {/* Phone */}

            <a
              href="tel:+91YOUR_PHONE_NUMBER"
              className="contact-card"
            >
              <FaPhone />

              <div>
                <h3>Call Support</h3>
                <p>+91 8639337702</p>
              </div>

            </a>

            {/* Email */}

            <a
              href="mailto:lifelinkemergencycare@gmail.com"
              className="contact-card"
            >
              <FaEnvelope />

              <div>
                <h3>Email Support</h3>
                <p>lifelinksupport108@gmail.com</p>
              </div>

            </a>

            {/* WhatsApp */}

            <a
              href="https://wa.me/91YOUR_PHONE_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <FaWhatsapp />

              <div>
                <h3>WhatsApp Support</h3>
                <p>Chat with us instantly</p>
              </div>

            </a>

            {/* Address */}

            <div className="contact-card">
              <FaLocationDot />

              <div>
                <h3>LifeLink Emergency Care</h3>
                <p>Andhra Pradesh, India</p>
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
              placeholder="Describe your message"
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
          Locate emergency services near you.
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