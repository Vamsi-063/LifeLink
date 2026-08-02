import React from "react";

function About() {

  return (

    <section className="about-page page-background">

      <div className="container">

        <div className="about-content">

          <h1>About LifeLink</h1>

          <p>
            LifeLink Emergency Care is an emergency management system
            designed to provide fast medical assistance during
            critical situations.
          </p>

          <p>
            Our platform helps users request emergency services,
            share live location, connect with hospitals and
            get quick support when every second matters.
          </p>

          <div className="about-cards">

            <div className="about-card">

              <h3>🚑 Fast Response</h3>

              <p>
                Quick emergency support with ambulance assistance.
              </p>

            </div>

            <div className="about-card">

              <h3>📍 Live Tracking</h3>

              <p>
                Share your real-time location during emergencies.
              </p>

            </div>

            <div className="about-card">

              <h3>❤️ Patient Care</h3>

              <p>
                Connecting people with better medical services.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default About;