import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHeartPulse } from "react-icons/fa6";
function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
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
    "/contacts",
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

      <div className="nav-links">

        <Link
          to="/"
          className={isActive("home") ? "active" : ""}
        >
          Home
        </Link>

        <Link
          to="/about"
          className={isActive("about") ? "active" : ""}
        >
          About
        </Link>

        <Link
          to="/services"
          className={isActive("services") ? "active" : ""}
        >
          Services
        </Link>

        <Link
          to="/contact"
          className={isActive("contact") ? "active" : ""}
        >
          Contact
        </Link>

        {isLoggedIn && (
          <Link
            to="/dashboard"
            className={isActive("dashboard") ? "active" : ""}
          >
            Dashboard
          </Link>
        )}

      </div>

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