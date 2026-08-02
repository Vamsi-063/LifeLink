import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    password: "",
    phone: "",
    bloodGroup: "",
    emergencyName: "",
    emergencyPhone: ""

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const users = await api.get("/users");

      const existingUser = users.data.find(

        (user) =>
          user.email.trim().toLowerCase() ===
          formData.email.trim().toLowerCase()

      );

      if (existingUser) {

        alert("Email already registered!");
        return;

      }

      const response = await api.post("/users", formData);

      localStorage.setItem(
        "user",
        JSON.stringify(response.data)
      );

      alert("Registration Successful ✅");

      navigate("/login");

    } catch (error) {

      console.error(error);

      if (error.response) {

        alert(`Registration Failed ❌ (${error.response.status})`);

      } else {

        alert("Cannot connect to server ❌");

      }

    }

  };

  return (

    <section className="auth-page">

      <div className="register-box">

        <h1>Create Account</h1>

        <p className="register-subtitle">
          Register to access LifeLink Emergency Care
        </p>

        <form
          className="register-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            required
          >

            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>

          </select>

          <input
            type="text"
            name="emergencyName"
            placeholder="Emergency Contact Name"
            value={formData.emergencyName}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="emergencyPhone"
            placeholder="Emergency Contact Number"
            value={formData.emergencyPhone}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="register-btn"
          >
            Create Account
          </button>

        </form>

        <p className="login-link">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>

    </section>

  );

}

export default Register;