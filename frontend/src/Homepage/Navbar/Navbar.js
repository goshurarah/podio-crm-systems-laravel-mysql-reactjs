import React, { useEffect, useState } from "react";
import "./../Navbar/NavbarStyle.css";
import podiologo from "./../../Assets/1.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

function Navbar() {















  const [tokendashboard, settokendashboard] = useState("");
  const [affiliateUser, setaffiliateUser] = useState("");
  const [affiliateusername, setaffiliateusername] = useState("");
  const isAdmin = localStorage.getItem("adminemail");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const affiliate = localStorage.getItem("affiliateUser");
    const affiliateusername = localStorage.getItem("affiliateusername");
    setaffiliateusername(affiliateusername);
    setaffiliateUser(affiliate);
    settokendashboard(token);
  }, []);

  const navigatetosignpage = () => {
    localStorage.setItem("paymentmethod", "");
    localStorage.setItem("adminemail", "");
    // navigate("/signin");
  };

  const logoutAffiliateUser = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("affiliateUser", "");
    localStorage.setItem("affiliateusername", "");
    navigate("/referral/signin");
  };

  return (
    <div className="container">
      <div className="main_div_navbar">
        <nav className="navbar navbar-expand-lg main_div_style_navbar_podio">
          <div className="container-fluid">
            <NavLink to="/" className="navbar-brand">
              <img
                className="logo_navbar_homepage_icon"
                src={podiologo}
                alt="podiologo"
              />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 main_center_navbar_items">
                <li className="nav-item nav_item_links_style">
                  <NavLink
                    to="/"
                    exact
                    className="nav-link"
                    activeClassName="active"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item nav_item_links_style">
                  <NavLink
                    to="/integrations"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Integrations
                  </NavLink>
                </li>
                <li className="nav-item nav_item_links_style">
                  <NavLink
                    to="/services"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Services
                  </NavLink>
                </li>
                <li className="nav-item nav_item_links_style">
                  <NavLink
                    to="/referral/homepage"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Affiliate
                  </NavLink>
                </li>
                <li className="nav-item nav_item_links_style">
                  <NavLink
                    to="/about_us"
                    className="nav-link"
                    activeClassName="active"
                  >
                    About Us
                  </NavLink>
                </li>

                <li className="nav-item nav_item_links_style">
                  <NavLink
                    to="/contact_us"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Contact Us
                  </NavLink>
                </li>

                {tokendashboard ? null : (
                  <li className="nav-item nav_item_links_style">
                    <NavLink
                      to="/signin"
                      className="nav-link"
                      activeClassName="active"
                      onClick={navigatetosignpage}
                    >
                      Sign In
                    </NavLink>
                  </li>
                )}
              </ul>
              <form className="d-flex">
                {tokendashboard &&
                isAdmin == "blog-admin@podiocrmsystems.com" ? (
                  <NavLink to="/admindashboard">
                    <button className="sign_up_button_style">
                      Admin Dashboard
                    </button>
                  </NavLink>
                ) : tokendashboard && affiliateUser == "affiliateUser" ? (
                  // <NavLink to="/referral/dashboard">
                  //   <button className="sign_up_button_style">Dashboard</button>
                  // </NavLink>
                  <div class="dropdown">
                    <button
                      class="sign_up_button_style dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {affiliateusername ? affiliateusername : null}
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <NavLink to="/referral/dashboard">
                          <a class="dropdown-item">Dashboard</a>
                        </NavLink>
                      </li>
                      <li>
                        <a class="dropdown-item" onClick={logoutAffiliateUser}>
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                ) : tokendashboard ? (
                  <NavLink to="/dashboard">
                    <button className="sign_up_button_style">Dashboard</button>
                  </NavLink>
                ) : (
                  <NavLink to="/signup">
                    <button className="sign_up_button_style">Sign Up</button>
                  </NavLink>
                )}
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
