import React, { useRef, useState } from "react";

function LiveLocation() {
  const [location, setLocation] = useState(null);
  const [tracking, setTracking] = useState(false);

  const watchId = useRef(null);

  const startTracking = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    setTracking(true);

    watchId.current = navigator.geolocation.watchPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },

      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert("Please allow Location permission.");
            break;

          case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;

          case error.TIMEOUT:
            alert("Location request timed out.");
            break;

          default:
            alert("Unable to access location.");
        }

        setTracking(false);
      },

      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  const stopTracking = () => {
    if (watchId.current !== null) {
      navigator.geolocation.clearWatch(watchId.current);
      watchId.current = null;
    }

    setTracking(false);
  };

  return (
    <section className="location-page">
      <div className="container">

        <h1>Live Location Tracking</h1>

        <div className="location-card">

          <p>
            Track your live location during emergency situations.
          </p>

          {location ? (
            <div className="location-details">

              <h3>Your Current Location</h3>

              <p>
                <strong>Latitude:</strong>{" "}
                {location.latitude.toFixed(6)}
              </p>

              <p>
                <strong>Longitude:</strong>{" "}
                {location.longitude.toFixed(6)}
              </p>

              <a
                href={`https://www.google.com/maps?q=${location.latitude},${location.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="start-btn"
                style={{
                  marginTop: "20px",
                  display: "inline-block",
                  textDecoration: "none",
                }}
              >
                Open in Google Maps
              </a>

            </div>
          ) : (
            <p>Location not available</p>
          )}

          <div className="location-buttons">

            <button
              className="start-btn"
              onClick={startTracking}
              disabled={tracking}
            >
              {tracking ? "Tracking..." : "Start Tracking"}
            </button>

            <button
              className="stop-btn"
              onClick={stopTracking}
              disabled={!tracking}
            >
              Stop Tracking
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default LiveLocation;