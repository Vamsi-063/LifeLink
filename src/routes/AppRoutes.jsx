import React from "react";
import { Routes, Route } from "react-router-dom";


// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";

import Login from "../pages/Login";
import Register from "../pages/Register";

import Dashboard from "../pages/Dashboard";
import LiveLocation from "../pages/LiveLocation";
import Profile from "../pages/Profile";


// Component
import ProtectedRoute from "../components/ProtectedRoute";


function AppRoutes() {

  return (

    <Routes>


      {/* Public Routes */}

      <Route 
        path="/" 
        element={<Home />} 
      />


      <Route 
        path="/about" 
        element={<About />} 
      />


      <Route 
        path="/services" 
        element={<Services />} 
      />


      <Route 
        path="/contact" 
        element={<Contact />} 
      />


      <Route 
        path="/login" 
        element={<Login />} 
      />


      <Route 
        path="/register" 
        element={<Register />} 
      />



      {/* Protected Routes */}


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



      {/* Page Not Found */}

      <Route

        path="*"

        element={<Home />}

      />


    </Routes>

  );

}


export default AppRoutes;