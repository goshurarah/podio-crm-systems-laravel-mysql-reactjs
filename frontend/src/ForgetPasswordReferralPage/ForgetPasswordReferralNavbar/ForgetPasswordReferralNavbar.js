import React from "react";
import "./../ForgetPasswordReferralNavbar/ForgetPasswordReferralNavbar.css";
import Navbar from "../../Homepage/Navbar/Navbar";
function ForgetPasswordReferralNavbar() {
  return (
    <div className="main_div_forgetpassword_referral_navbar">
      <Navbar />
      <div className="container">
        <p className="heading_forgetpassword_referral">
          Referral Forget Password
        </p>
        <div className="d-flex flex-row">
          <p className="para_forgetpassword_referral_white">SiGN IN</p>
          <div className="orange_line_forgetpassword_referral"></div>
          <p className="para_forgetpassword_referral_orange">Forget Password</p>
        </div>
      </div>
    </div>
  );
}

export default ForgetPasswordReferralNavbar;
