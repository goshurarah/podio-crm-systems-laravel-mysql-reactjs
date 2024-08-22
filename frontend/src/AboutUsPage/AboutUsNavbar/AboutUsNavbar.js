import React from "react";
import Navbar from "../../Homepage/Navbar/Navbar";
import "./../AboutUsNavbar/AboutusNavbarStyle.css";
function AboutUsNavbar() {
  return (
    <div className="main_div_aboutus_navbar">
      <Navbar />
      <div className="container">
        <p className="heading_au">About Us</p>
        <div className="d-flex flex-row">
          <p className="para_au_white">Home</p>
          <div className="orange_line_au"></div>
          <p className="para_au_orange">About Us</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsNavbar;
