import React, { createContext, useContext, useReducer, useEffect } from "react";
import authReducer from "../reducers/authReducer";
import axios from "axios";

// Create Auth Context
export const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const initialState = { isAuthenticated: false, user: null };

  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/auth/check-auth",
          { withCredentials: true } // Ensure cookies are included
        );

        if (response.status === 200) {
          dispatch({ type: "LOGIN", payload: response.data.user });
        }
      } catch (error) {
        console.error("Auth check failed:", error);
      }
    };

    checkAuth();
  }, []);

  // Login Function
  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        { email, password },
        { withCredentials: true }
      );

      if (response.status === 200) {
        dispatch({ type: "LOGIN", payload: response.data.user });
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid credentials! Try again.");
    }
  };

  // Update Profile
  const updateProfile = async (updates) => {
    try {
      const response = await axios.put(
        "http://localhost:8080/api/users/update-profile",
        updates,
        { withCredentials: true }
      );

      if (response.status === 200) {
        dispatch({ type: "UPDATE", payload: response.data.updatedUser });
      }
    } catch (error) {
      console.error("Profile update failed:", error);
    }
  };

  // Logout Function
  const logout = async () => {
    try {
      await axios.post("http://localhost:8080/api/auth/logout", {}, { withCredentials: true });
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ state, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook for Authentication
export const useAuth = () => useContext(AuthContext);
