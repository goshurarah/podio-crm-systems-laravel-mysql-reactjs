import React from "react";
import "./../DashboardNavbar/DashboardNavbarStyle.css";
import logocrmpodio from "./../../Assets/dashboard_logo.png";
import { Link, useNavigate } from "react-router-dom";

function DashboardNavbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem("paymentmethod");
    localStorage.removeItem("token"); // Replace "yourAuthToken" with the actual name of your authentication token
    // Navigate to the "/signin" page
    navigate("/signin");
  };

  return (
    <div className="main_div_navbar_dashboard_podiocrmsystems">
      <div className="row m-0 p-0">
        <div className="col-lg-1 col-md-1 col-1"> </div>
        <div className="col-lg-10 col-md-10 col-10">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <Link to="/">
                <img
                  src={logocrmpodio}
                  className="logo_style_dashboard"
                  alt="podiologo"
                />
              </Link>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <p className="dashboard_heading">DASHBOARD</p>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="d-flex justify-content-end">
                <div>
                  <button
                    className="logout_style_button"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-1 col-md-1 col-1"> </div>
      </div>
    </div>
  );
}

export default DashboardNavbar;
