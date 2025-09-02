import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "Guest";

  return (
    <div className="page-container">
      <div className="form-box">
        <h2>Welcome, {email} 🎉</h2>
        <button onClick={() => navigate("/login")}>Logout</button>
      </div>
    </div>
  );
}

export default Home;
