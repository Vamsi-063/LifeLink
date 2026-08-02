import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa6";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.get("/users");

      const user = response.data.find(
        (u) =>
          u.email.trim().toLowerCase() === email.trim().toLowerCase() &&
          u.password === password
      );

      if (user) {
        // Login Session
        localStorage.setItem("isLoggedIn", "true");

        // User ID
        localStorage.setItem("userId", user.id);

        // User Details
        localStorage.setItem("user", JSON.stringify(user));

        alert("Login Successful ✅");

        navigate("/dashboard");
      } else {
        alert("Invalid Email or Password ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Login Failed ❌");
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-container">

        <h1>Welcome Back</h1>

        <p className="auth-subtitle">
          Login to access LifeLink Emergency Care
        </p>

        <form className="auth-form" onSubmit={handleLogin}>

          <div className="input-box">
            <FaEnvelope />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-box">
            <FaLock />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>

          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

        </form>

        <p className="register-link">
          Don't have an account?{" "}
          <Link to="/register">Register</Link>
        </p>

      </div>
    </section>
  );
}

export default Login;