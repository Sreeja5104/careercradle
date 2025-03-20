import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/profile.css";

const Profile = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    fullName: "",
    phone: "",
    role: "",
    resume: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("userEmail");
    if (!loggedInUser) {
      navigate("/login");
      return;
    }

    setUser({
      email: loggedInUser,
      fullName: localStorage.getItem("userName") || "User",
      phone: localStorage.getItem("userPhone") || "Not provided",
      role: localStorage.getItem("userRole") || "Job Seeker",
      resume: localStorage.getItem("userResume") || "No resume uploaded",
    });
  }, [navigate]);

  const handleEdit = (field) => {
    const newValue = prompt(`Enter new ${field}:`, user[field]);
    if (newValue) {
      setUser({ ...user, [field]: newValue });
      localStorage.setItem(`user${field.charAt(0).toUpperCase() + field.slice(1)}`, newValue);
    }
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.clear();
      navigate("/");
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h3>Profile Details</h3>
        <div className="profile-detail">
          <p><strong>Full Name:</strong></p>
          <span>{user.fullName}</span>
          <button onClick={() => handleEdit("fullName")}>Edit</button>
        </div>

        <div className="profile-detail">
          <p><strong>Email:</strong></p>
          <span>{user.email}</span>
          <button onClick={() => handleEdit("email")}>Edit</button>
        </div>

        <div className="profile-detail">
          <p><strong>Phone:</strong></p>
          <span>{user.phone}</span>
          <button onClick={() => handleEdit("phone")}>Edit</button>
        </div>

        <div className="profile-detail">
          <p><strong>Role:</strong></p>
          <span>{user.role}</span>
          <button onClick={() => handleEdit("role")}>Edit</button>
        </div>

        <div className="profile-detail">
          <p><strong>Resume:</strong></p>
          {user.resume !== "No resume uploaded" ? (
            <a href={user.resume} target="_blank" rel="noopener noreferrer">View Resume</a>
          ) : (
            "No resume uploaded"
          )}
          <button onClick={() => handleEdit("resume")}>Edit</button>
        </div>

        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
