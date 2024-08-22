import React from 'react'
import "./../SignInNavbar/SignInNavbarStyle.css"
import Navbar from '../../Homepage/Navbar/Navbar'


function SignInNavbar() {
  return (
    <div className="main_div_signinnavbar_navbar">
    <Navbar />
    <div className="container">
      <p className="heading_signinnavbar">Login</p>
      <div className="d-flex flex-row">
        <p className="para_signinnavbar_white">HOME</p>
        <div className="orange_line_signinnavbar"></div>
        <p className="para_signinnavbar_orange">Sign In</p>
      </div>
    </div>
  </div>
  )
}

export default SignInNavbar
