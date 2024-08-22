import React from 'react'
import "./../ReferralsSigninNavbar/ReferralsSigninNavbar.css"
import Navbar from '../../Homepage/Navbar/Navbar'
function ReferralsSigninNavbar() {
  return (
    <div className="main_div_referralsigninnavbar_navbar">
    <Navbar />
    <div className="container">
      <p className="heading_referralsigninnavbar">Referral Signin</p>
      <div className="d-flex flex-row">
        <p className="para_referralsigninnavbar_white">HOME</p>
        <div className="orange_line_referralsigninnavbar"></div>
        <p className="para_referralsigninnavbar_orange">Signin</p>
      </div>
    </div>
  </div>
  )
}

export default ReferralsSigninNavbar
