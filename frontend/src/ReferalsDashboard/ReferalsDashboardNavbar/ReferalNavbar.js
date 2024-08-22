import React from 'react'
import Navbar from '../../Homepage/Navbar/Navbar'
import "./../ReferalsDashboardNavbar/ReferalsNavbar.css"
function ReferalNavbar() {
  return (
    <div className="main_div_referaldashboard_navbar">
    <Navbar />
    <div className="container">
      <p className="heading_referaldashboard">Dashboard</p>
      <div className="d-flex flex-row">
        <p className="para_referaldashboard_white">Home</p>
        <div className="orange_line_referaldashboard"></div>
        <p className="para_referaldashboard_orange">Dashboard</p>
      </div>
    </div>
  </div>
  )
}

export default ReferalNavbar
