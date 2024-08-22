import React from 'react'
import "./../ServicesNavbar/ServicesNavbarStyle.css"
import Navbar from '../../Homepage/Navbar/Navbar'

function ServicesNavbar() {
  return (
    <div className="main_div_services_navbar">
    <Navbar />
    <div className="container">
      <p className="heading_services">Services</p>
      <div className="d-flex flex-row">
        <p className="para_services_white">Home</p>
        <div className="orange_line_services"></div>
        <p className="para_services_orange">Services</p>
      </div>
    </div>
  </div>
  )
}

export default ServicesNavbar
