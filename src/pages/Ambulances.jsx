import React, { useEffect, useState } from "react";
import "./Ambulances.css";
import { FaTruckMedical, FaLocationDot, FaPhone } from "react-icons/fa6";

function Ambulances() {
  const [ambulances, setAmbulances] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        const query = `
[out:json];
(
node["emergency"="ambulance_station"](around:10000,${latitude},${longitude});
way["emergency"="ambulance_station"](around:10000,${latitude},${longitude});
relation["emergency"="ambulance_station"](around:10000,${latitude},${longitude});
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
          setAmbulances(data.elements || []);
        } catch (err) {
          console.error(err);
          alert("Unable to fetch ambulance stations.");
        }

        setLoading(false);
      },
      () => {
        alert("Please allow location permission.");
        setLoading(false);
      }
    );
  }, []);

  return (
    <section className="ambulance-page page-background">
      <div className="container">

        <h1>Nearby Ambulance Stations</h1>

        {loading ? (
          <h2 className="loading">
            Finding nearby ambulance stations...
          </h2>
        ) : ambulances.length === 0 ? (
          <div className="empty">
            <h2>No ambulance stations found.</h2>
          </div>
        ) : (
          <div className="ambulance-grid">
            {ambulances.map((item, index) => {
              const lat = item.lat || item.center?.lat;
              const lon = item.lon || item.center?.lon;

              return (
                <div
                  className="ambulance-card"
                  key={index}
                >
                  <FaTruckMedical className="ambulance-icon" />

                  <h2>
                    {item.tags?.name ||
                      "Ambulance Station"}
                  </h2>

                  <p>
                    <FaLocationDot />
                    {" "}
                    {item.tags?.["addr:street"] ||
                      item.tags?.["addr:city"] ||
                      "Address unavailable"}
                  </p>

                  <button
                    className="map-btn"
                    onClick={() =>
                      window.open(
                        `https://www.google.com/maps?q=${lat},${lon}`,
                        "_blank"
                      )
                    }
                  >
                    Open in Maps
                  </button>

                  <a href="tel:108">
                    <button className="call-btn">
                      <FaPhone /> Call 108
                    </button>
                  </a>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}

export default Ambulances;