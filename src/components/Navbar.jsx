import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {

  const location = useLocation();
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn");


  const logout = () => {

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    navigate("/login");
    window.location.reload();

  };


  const activeClass = (path) => {
    return location.pathname === path ? "active" : "";
  };


  return (

    <nav className="navbar">

      <div className="logo">
     <div className="brand">
    <span className="heart">❤️</span>
    <span className="life">Life</span>
    <span className="link">Link</span>
  </div>

      <div className="tagline">
           Emergency Care
       </div>
  </div>


      <div className="nav-links">


        <Link 
          to="/"
          className={activeClass("/")}
        >
          Home
        </Link>


        <Link 
          to="/about"
          className={activeClass("/about")}
        >
          About
        </Link>


        <Link 
          to="/services"
          className={activeClass("/services")}
        >
          Services
        </Link>


        <Link 
          to="/contact"
          className={activeClass("/contact")}
        >
          Contacts
        </Link>



        {
          isLoggedIn && (
            <Link 
              to="/dashboard"
              className={activeClass("/dashboard")}
            >
              Dashboard
            </Link>
          )
        }



        {
          isLoggedIn ? (

            <button 
              className="logout-btn"
              onClick={logout}
            >
              Logout
            </button>

          ) : (

            <Link 
              to="/login"
              className={activeClass("/login")}
            >
              Login
            </Link>

          )
        }


      </div>

    </nav>

  );

}


export default Navbar;