import React, { useEffect, useState } from "react";
import { FaHospital, FaLocationDot } from "react-icons/fa6";
import "./Hospitals.css";

function Hospitals() {
  const [search, setSearch] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        const query = `
          [out:json];
          (
            node["amenity"="hospital"](around:5000,${latitude},${longitude});
            way["amenity"="hospital"](around:5000,${latitude},${longitude});
            relation["amenity"="hospital"](around:5000,${latitude},${longitude});
          );
          out center;
        `;

        try {
          const response = await fetch(
            "https://overpass-api.de/api/interpreter",
            {
              method: "POST",
              body: query,
            }
          );

          const data = await response.json();

          setHospitals(data.elements || []);
        } catch (error) {
          console.error(error);
          alert("Unable to fetch nearby hospitals.");
        }

        setLoading(false);
      },
      () => {
        alert("Please allow location permission.");
        setLoading(false);
      }
    );
  }, []);

  const filteredHospitals = hospitals.filter((hospital) =>
    (hospital.tags?.name || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="page-background">
      <div className="container">

        <h1 className="page-title">Nearby Hospitals</h1>

        <p className="section-text">
          Find hospitals near your current location.
        </p>

        <input
          type="text"
          placeholder="Search Hospital..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="hospital-search"
        />

        {loading ? (
          <div className="no-results">
            <h2>📍 Finding Nearby Hospitals...</h2>
          </div>
        ) : filteredHospitals.length > 0 ? (

          <div className="service-grid">

            {filteredHospitals.map((hospital, index) => {

              const lat = hospital.lat || hospital.center?.lat;
              const lon = hospital.lon || hospital.center?.lon;

              return (
                <div
                  key={index}
                  className="emergency-card"
                >

                  <div className="service-card-icon">
                    <FaHospital />
                  </div>

                  <h3>
                    {hospital.tags?.name || "Unnamed Hospital"}
                  </h3>

                  <p>
                    <FaLocationDot />{" "}
                    {hospital.tags?.["addr:street"] ||
                      hospital.tags?.["addr:full"] ||
                      "Address Not Available"}
                  </p>

                  <button
                    className="primary-btn"
                    onClick={() =>
                      window.open(
                        `https://www.google.com/maps?q=${lat},${lon}`,
                        "_blank"
                      )
                    }
                  >
                    Open in Google Maps
                  </button>

                </div>
              );
            })}

          </div>

        ) : (

          <div className="no-results">

            <h2>🏥 No Hospitals Found</h2>

            <p>
              No hospitals found within 5 km of your location.
            </p>

          </div>

        )}

      </div>
    </section>
  );
}

export default Hospitals;