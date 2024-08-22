import React from 'react'
import "./../ReferralseRegistraionnavbar/ReferralseRegistraionnavbar.css"
import Navbar from '../../Homepage/Navbar/Navbar'
function ReferralseRegistraionnavbar() {
  return (
    <div className="main_div_referalregistrationnavbar_navbar">
    <Navbar />
    <div className="container">
      <p className="heading_referalregistrationnavbar">Referral Registration</p>
      <div className="d-flex flex-row">
        <p className="para_referalregistrationnavbar_white">HOME</p>
        <div className="orange_line_referalregistrationnavbar"></div>
        <p className="para_referalregistrationnavbar_orange">SignUp</p>
      </div>
    </div>
  </div>
  )
}

export default ReferralseRegistraionnavbar
