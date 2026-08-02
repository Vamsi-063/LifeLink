import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Public Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";

// Dashboard
import Dashboard from "../pages/Dashboard";
import LiveLocation from "../pages/LiveLocation";
import Profile from "../pages/Profile";

// Hospitals
import Hospitals from "../pages/Hospitals";
import HospitalDetails from "../pages/HospitalDetails";

// Doctors
import Doctors from "../pages/Doctors";
import DoctorDetails from "../pages/DoctorDetails";
import Appointment from "../pages/Appointment";

// Blood Banks
import BloodBanks from "../pages/BloodBanks";
import BloodBankDetails from "../pages/BloodBankDetails";
import BloodRequest from "../pages/BloodRequest";

// Emergency Contacts
import EmergencyContacts from "../pages/EmergencyContacts";

// Ambulances
import Ambulances from "../pages/Ambulances";
import AmbulanceDetails from "../pages/AmbulanceDetails";
import BookAmbulance from "../pages/BookAmbulance";

// Protected Route
import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <Routes>

      {/* Home */}
      <Route
        path="/"
        element={
          isLoggedIn ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Home />
          )
        }
      />

      {/* Public Pages */}
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Hospitals */}
      <Route path="/hospitals" element={<Hospitals />} />
      <Route path="/hospital/:id" element={<HospitalDetails />} />

      {/* Doctors */}
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctor/:id" element={<DoctorDetails />} />
      <Route path="/appointment/:id" element={<Appointment />} />

      {/* Blood Banks */}
      <Route path="/bloodbanks" element={<BloodBanks />} />
      <Route path="/bloodbank/:id" element={<BloodBankDetails />} />
      <Route path="/bloodrequest/:id" element={<BloodRequest />} />

      {/* Emergency Contacts */}
      <Route path="/emergencycontacts" element={<EmergencyContacts />} />

      {/* Ambulances */}
      <Route path="/ambulances" element={<Ambulances />} />
      <Route path="/ambulance/:id" element={<AmbulanceDetails />} />
      <Route
        path="/bookambulance/:id"
        element={
          <ProtectedRoute>
            <BookAmbulance />
          </ProtectedRoute>
        }
      />

      {/* Protected Pages */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/location"
        element={
          <ProtectedRoute>
            <LiveLocation />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* 404 */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}

export default AppRoutes;