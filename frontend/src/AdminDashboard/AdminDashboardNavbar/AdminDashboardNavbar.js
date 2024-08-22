import React from "react";
import "./../AdminDashboardNavbar/AdminDashboardNavbarStyle.css";
import logocrmpodio from "./../../Assets/dashboard_logo.png";
import { Link, useNavigate } from "react-router-dom";

function AdminDashboardNavbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem("paymentmethod");
    localStorage.removeItem("token"); // Replace "yourAuthToken" with the actual name of your authentication token
    // Navigate to the "/signin" page
    navigate("/signin");
  };

  return (
    <div className="main_div_navbar_dashboardadmin_podiocrmsystems">
      <div className="row m-0 p-0">
        <div className="col-lg-1 col-md-1 col-1"> </div>
        <div className="col-lg-10 col-md-10 col-10">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <Link to="/">
                <img
                  src={logocrmpodio}
                  className="logo_style_dashboardadmin"
                  alt="podiologo"
                />
              </Link>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <p className="dashboard_adminheading">Admin Panel</p>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="d-flex justify-content-end">
                <div>
                  <button
                    className="logout_style_button_admin"
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

export default AdminDashboardNavbar;
