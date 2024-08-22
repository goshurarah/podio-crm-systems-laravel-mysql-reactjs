import React from 'react'
import "./../AdditionalNavbar/AdditionalNavbarStyle.css"
import Navbar from '../../Homepage/Navbar/Navbar'
function AdditionalNavbar() {
  return (
    <div className="main_div_additionals_navbar">
    <Navbar />
    <div className="container">
      <p className="heading_additionals">Make Your Own Plan</p>
      <div className="d-flex flex-row">
        <p className="para_additionals_white">Home</p>
        <div className="orange_line_additionals"></div>
        <p className="para_additionals_orange">Additional Services</p>
      </div>
    </div>
  </div>
  )
}

export default AdditionalNavbar
