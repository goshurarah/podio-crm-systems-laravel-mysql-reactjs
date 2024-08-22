import React from "react";
import "./../LinkDashboard/LinkDashboard.css";
import { Link, useNavigate } from "react-router-dom";
function LinkDashboard() {
  const navigate = useNavigate();
  const handleDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <div className="main_div_linkDashboard">
      <div className="d-flex justify-content-center">
        <button className="Dashboardbutton" onClick={handleDashboard}>
          Dashboard
        </button>
      </div>
    </div>
  );
}

export default LinkDashboard;
