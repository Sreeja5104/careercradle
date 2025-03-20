import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("userEmail");
    if (!user) {
      navigate("/login"); // Redirect to login if no user
    }
  }, [navigate]);

  // Job application links (Replace these with real URLs)
  const jobLinks = {
    "Frontend Developer": "https://careers.google.com/jobs/results/",
    "Backend Developer": "https://www.amazon.jobs/en/",
    "Data Scientist": "https://www.metacareers.com/jobs/",
    "Software Engineer": "https://www.microsoft.com/en-us/careers",
    "UI/UX Designer": "https://jobs.apple.com/en-us/search?team=Design",
    "Cloud Architect": "https://careers.ibm.com/",
    "Cybersecurity Analyst": "https://www.cybersecurityjobsite.com/jobs/",
    "AI Engineer": "https://www.nvidia.com/en-us/about-nvidia/careers/",
    "DevOps Engineer": "https://www.redhat.com/en/jobs",
  };

  // Course links (Replace these with actual course links)
  const courseLinks = {
    "React for Beginners": "https://www.udemy.com/course/react-for-beginners/",
    "Full Stack Web Development": "https://www.coursera.org/specializations/full-stack",
    "Machine Learning Basics": "https://www.edx.org/course/machine-learning-basics",
    "Advanced JavaScript": "https://www.udemy.com/course/advanced-javascript/",
    "Python for Data Science": "https://www.datacamp.com/courses/intro-to-python-for-data-science",
    "UI/UX Design Principles": "https://www.udemy.com/course/ui-ux-design-principles/",
    "DevOps and CI/CD Pipelines": "https://www.pluralsight.com/courses/devops-ci-cd-pipelines",
    "Cybersecurity Fundamentals": "https://www.cybrary.it/course/cyber-security-fundamentals/",
    "Cloud Computing with AWS": "https://www.udemy.com/course/aws-certified-cloud-practitioner/",
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome to CareerCradle</h2>

      {/* Main Content */}
      <div className="dashboard-content">
        {/* Job Openings Box */}
        <div className="box jobs">
          <h3>🔥 Latest Job Openings</h3>
          <ul>
            {Object.entries(jobLinks).map(([jobTitle, link]) => (
              <li key={jobTitle}>
                <strong>{jobTitle}</strong> 
                <button 
                  className="apply-btn" 
                  onClick={() => window.open(link, "_blank")}
                >
                  Apply
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Recommended Courses Box */}
        <div className="box courses">
          <h3>🎓 Recommended Courses</h3>
          <ul>
            {Object.entries(courseLinks).map(([courseTitle, link]) => (
              <li key={courseTitle}>
                <strong>{courseTitle}</strong> 
                <button 
                  className="enroll-btn" 
                  onClick={() => window.open(link, "_blank")}
                >
                  Enroll
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
