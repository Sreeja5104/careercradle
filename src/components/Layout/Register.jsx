import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/register.css"; // Import CSS file for styling

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    dob: "", // Added Date of Birth field
    role: "",
    profilePic: "",
    resume: null, // New resume state
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Invalid phone number (10 digits required)";
    if (!formData.dob) newErrors.dob = "Date of Birth is required"; // DOB validation
    if (!formData.role) newErrors.role = "Role is required";
    if (!formData.profilePic) newErrors.profilePic = "Profile Image URL is required";
    if (!formData.resume) newErrors.resume = "Resume is required";
    else if (formData.resume.type !== "application/pdf") newErrors.resume = "Only PDF files are allowed";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, resume: file });
      setErrors({ ...errors, resume: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("userEmail", formData.email);
      localStorage.setItem("userName", formData.name);
      localStorage.setItem("userPhone", formData.phone);
      localStorage.setItem("userDOB", formData.dob); // Store DOB in localStorage
      localStorage.setItem("userRole", formData.role);
      localStorage.setItem("userPic", formData.profilePic);
      localStorage.setItem("userResume", formData.resume.name);

      alert("Signup Successful!");
      setLoading(false);
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create an Account</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
          {errors.name && <p className="error">{errors.name}</p>}

          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}

          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          {errors.password && <p className="error">{errors.password}</p>}

          <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
          {errors.phone && <p className="error">{errors.phone}</p>}

          {/* ✅ Date of Birth Input Field */}
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
          {errors.dob && <p className="error">{errors.dob}</p>}

          <input type="text" name="role" placeholder="Role (e.g., Job Seeker, Recruiter)" value={formData.role} onChange={handleChange} />
          {errors.role && <p className="error">{errors.role}</p>}

          <input type="text" name="profilePic" placeholder="Profile Image URL" value={formData.profilePic} onChange={handleChange} />
          {errors.profilePic && <p className="error">{errors.profilePic}</p>}

          {/* Resume Upload Input */}
          <input type="file" accept=".pdf" onChange={handleFileChange} />
          {errors.resume && <p className="error">{errors.resume}</p>}

          <button type="submit" disabled={loading}>{loading ? "Signing up..." : "Sign Up"}</button>
        </form>

        <p>Already have an account? <button onClick={() => navigate("/login")} className="login-link">Log in</button></p>
      </div>
    </div>
  );
};

export default Register;
