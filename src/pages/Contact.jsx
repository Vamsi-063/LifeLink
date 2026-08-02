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
          You can call, email, or chat with our support members anytime.
        </p>

        <div className="contact-wrapper">

          <div className="contact-info">

            {/* Support Member 1 */}

            <a href="tel:+919876543210" className="contact-card">
              <FaPhone />
              <div>
                <h3>supporter 1</h3>
                <p>📞 +91 86393 37702</p>
              </div>
            </a>

            {/* Support Member 2 */}

            <a href="tel:+919182352294" className="contact-card">
              <FaPhone />
              <div>
                <h3>supporter 2</h3>
                <p>📞 +91 91823 52294</p>
              </div>
            </a>

            <a
              href="https://wa.me/918639337702"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <FaWhatsapp />
              <div>
                <h3>Chat with us</h3>
                <p>💬 WhatsApp Support</p>
              </div>
            </a>

            <a
              href="mailto:chakalivamsi557@gmail.com"
              className="contact-card"
            >
              <FaEnvelope />
              <div>
                <h3>Mail us</h3>
                <p>lifelinksupport108@gmail.com</p>
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