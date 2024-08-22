import React from 'react'
import "./../ReferralsHomepageNavbar/ReferralsHomepageNavbar.css"
import Navbar from '../../Homepage/Navbar/Navbar'
function ReferralsHomepageNavbar() {
  return (
    <div className="main_div_referralhomepagenavbar_navbar">
    <Navbar />
    <div className="container">
      <p className="heading_referralhomepagenavbar">Affiliated Program</p>
      <div className="d-flex flex-row">
        <p className="para_referralhomepagenavbar_white">HOME</p>
        <div className="orange_line_referralhomepagenavbar"></div>
        <p className="para_referralhomepagenavbar_orange">Affiliated Program</p>
      </div>
    </div>
  </div>
  )
}

export default ReferralsHomepageNavbar
