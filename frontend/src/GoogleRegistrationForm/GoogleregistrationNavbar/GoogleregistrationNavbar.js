import React from "react";
import "./../GoogleregistrationNavbar/GoogleregistrationNavbar.css";
import Navbar from "../../Homepage/Navbar/Navbar";
function GoogleregistrationNavbar() {
  return (
    <div className="main_div_signupnavbar_navbar_google">
      <Navbar />
      <div className="container">
        <p className="heading_signupnavbar_google">Registration</p>
        <div className="d-flex flex-row">
          <p className="para_signupnavbar_white_google">HOME</p>
          <div className="orange_line_signupnavbar_google"></div>
          <p className="para_signupnavbar_orange_google">SignUp with Google</p>
        </div>
      </div>
    </div>
  );
}

export default GoogleregistrationNavbar;
