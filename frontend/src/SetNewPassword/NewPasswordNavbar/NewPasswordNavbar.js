import React from "react";
import "./../NewPasswordNavbar/NewPasswordNavbarStyle.css";
import Navbar from "../../Homepage/Navbar/Navbar";

function NewPasswordNavbar() {
  return (
    <div className="main_div_newpassword_navbar">
      <Navbar />
      <div className="container">
        <p className="heading_newpassword">Set New Password</p>
        <div className="d-flex flex-row">
          <p className="para_newpassword_white">SIGN IN</p>
          <div className="orange_line_newpassword"></div>
          <p className="para_newpassword_orange">New Password</p>
        </div>
      </div>
    </div>
  );
}

export default NewPasswordNavbar;
