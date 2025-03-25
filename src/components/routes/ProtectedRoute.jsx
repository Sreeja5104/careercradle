import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { state } = useAuth();

  // If the user is authenticated, allow access; otherwise, redirect to login
  return state.isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
