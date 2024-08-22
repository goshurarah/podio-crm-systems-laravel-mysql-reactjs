import React from 'react'
import "././../ForgetPasswordNavbar/ForgetPasswordNavbarStyle.css"
import Navbar from '../../Homepage/Navbar/Navbar'


function ForgetPasswordNavbar() {
  return (
    <div className="main_div_forgotpassword_navbar">
    <Navbar />
    <div className="container">
      <p className="heading_forgotpassword">Forget Password</p>
      <div className="d-flex flex-row">
        <p className="para_forgotpassword_white">SiGN IN</p>
        <div className="orange_line_forgotpassword"></div>
        <p className="para_forgotpassword_orange">Forget Password</p>
      </div>
    </div>
  </div>
  )
}

export default ForgetPasswordNavbar
