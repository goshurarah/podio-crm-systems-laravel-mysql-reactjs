import React from 'react'
import "./EditReferalProfileNavbar.css"
import Navbar from '../../Homepage/Navbar/Navbar'
function EditReferalProfileNavbar() {
  return (
    <div className="main_div_referalprofileeditnavbar_navbar">
    <Navbar />
    <div className="container">
      <p className="heading_referalprofileeditnavbar">Edit Profile</p>
      <div className="d-flex flex-row">
        <p className="para_referalprofileeditnavbar_white">HOME</p>
        <div className="orange_line_referalprofileeditnavbar"></div>
        <p className="para_referalprofileeditnavbar_orange">Profile</p>
      </div>
    </div>
  </div>
  )
}

export default EditReferalProfileNavbar
