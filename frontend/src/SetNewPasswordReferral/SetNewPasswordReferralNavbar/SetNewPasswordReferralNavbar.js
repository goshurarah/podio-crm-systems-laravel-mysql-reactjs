import React from 'react'
import "./../SetNewPasswordReferralNavbar/SetNewPasswordReferralNavbar.css"
import Navbar from '../../Homepage/Navbar/Navbar'
function SetNewPasswordReferralNavbar() {
  return (
    <div className="main_div_newpassword_referral_navbar">
    <Navbar />
    <div className="container">
      <p className="heading_newpassword_referral">Set New Referral Password</p>
      <div className="d-flex flex-row">
        <p className="para_newpassword_referral_white">SIGN IN</p>
        <div className="orange_line_newpassword_referral"></div>
        <p className="para_newpassword_referral_orange">New Password</p>
      </div>
    </div>
  </div>
  )
}

export default SetNewPasswordReferralNavbar
