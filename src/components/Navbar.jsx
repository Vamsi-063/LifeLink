import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHeartPulse, FaArrowLeft } from "react-icons/fa6";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleProtectedNavigation = (path) => {
    if (!isLoggedIn) {
      alert("Please Login First 🔒");
      navigate("/login");
      return;
    }

    navigate(path);
  };

  const isActive = (page) => {
    switch (page) {
      case "home":
        return location.pathname === "/";

      case "about":
        return location.pathname === "/about";

      case "services":
        return [
          "/services",
          "/hospitals",
          "/hospital",
          "/doctors",
          "/doctor",
          "/appointment",
          "/bloodbanks",
          "/bloodbank",
          "/ambulance",
          "/ambulances",
          "/bookambulance",
          "/bloodrequest",
          "/emergencycontacts",
        ].some((path) => location.pathname.startsWith(path));

      case "contact":
        return location.pathname === "/contact";

      case "dashboard":
        return [
          "/dashboard",
          "/location",
          "/profile",
        ].some((path) => location.pathname.startsWith(path));

      default:
        return false;
    }
  };

  return (
    <nav className="navbar">

      {/* Back Button */}
      {location.pathname !== "/" && (
        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft />
        </button>
      )}

      {/* Logo */}
      <div className="logo">
        <Link to="/" className="logo-link">

          <div className="brand">
            <FaHeartPulse className="heart" />
            <span className="life">Life</span>
            <span className="link-text">Link</span>
          </div>

          <p className="tagline">
            Emergency Care
          </p>

        </Link>
      </div>

      {/* Navigation */}
      <div className="nav-links">

        <Link
          to="/"
          className={isActive("home") ? "active" : ""}
        >
          Home
        </Link>

        <button
          className={`nav-link-btn ${isActive("about") ? "active" : ""}`}
          onClick={() => handleProtectedNavigation("/about")}
        >
          About
        </button>

        <button
          className={`nav-link-btn ${isActive("services") ? "active" : ""}`}
          onClick={() => handleProtectedNavigation("/services")}
        >
          Services
        </button>

        <button
          className={`nav-link-btn ${isActive("contact") ? "active" : ""}`}
          onClick={() => handleProtectedNavigation("/contact")}
        >
          Contact
        </button>

        {isLoggedIn && (
          <Link
            to="/dashboard"
            className={isActive("dashboard") ? "active" : ""}
          >
            Dashboard
          </Link>
        )}

      </div>

      {/* Buttons */}
      <div className="nav-buttons">

        {!isLoggedIn ? (
          <>
            <Link to="/login" className="login-btn">
              Login
            </Link>

            <Link to="/register" className="register-btn">
              Register
            </Link>
          </>
        ) : (
          <button
            className="logout-btn"
            onClick={logout}
          >
            Logout
          </button>
        )}

      </div>

    </nav>
  );
}

export default Navbar;