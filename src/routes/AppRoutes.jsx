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

      {/* Authentication */}

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Pages */}

      <Route
        path="/about"
        element={
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        }
      />

      <Route
        path="/services"
        element={
          <ProtectedRoute>
            <Services />
          </ProtectedRoute>
        }
      />

      <Route
        path="/contact"
        element={
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        }
      />

      {/* Hospitals */}

      <Route
        path="/hospitals"
        element={
          <ProtectedRoute>
            <Hospitals />
          </ProtectedRoute>
        }
      />

      <Route
        path="/hospital/:id"
        element={
          <ProtectedRoute>
            <HospitalDetails />
          </ProtectedRoute>
        }
      />

      {/* Doctors */}

      <Route
        path="/doctors"
        element={
          <ProtectedRoute>
            <Doctors />
          </ProtectedRoute>
        }
      />

      <Route
        path="/doctor/:id"
        element={
          <ProtectedRoute>
            <DoctorDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/appointment/:id"
        element={
          <ProtectedRoute>
            <Appointment />
          </ProtectedRoute>
        }
      />

      {/* Blood Banks */}

      <Route
        path="/bloodbanks"
        element={
          <ProtectedRoute>
            <BloodBanks />
          </ProtectedRoute>
        }
      />

      <Route
        path="/bloodbank/:id"
        element={
          <ProtectedRoute>
            <BloodBankDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/bloodrequest/:id"
        element={
          <ProtectedRoute>
            <BloodRequest />
          </ProtectedRoute>
        }
      />

      {/* Emergency Contacts */}

      <Route
        path="/emergencycontacts"
        element={
          <ProtectedRoute>
            <EmergencyContacts />
          </ProtectedRoute>
        }
      />

      {/* Ambulances */}

      <Route
        path="/ambulances"
        element={
          <ProtectedRoute>
            <Ambulances />
          </ProtectedRoute>
        }
      />

      <Route
        path="/ambulance/:id"
        element={
          <ProtectedRoute>
            <AmbulanceDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/bookambulance/:id"
        element={
          <ProtectedRoute>
            <BookAmbulance />
          </ProtectedRoute>
        }
      />

      {/* Dashboard */}

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

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

    </Routes>

  );

}

export default AppRoutes;