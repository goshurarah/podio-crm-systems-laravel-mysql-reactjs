import React from 'react'
import "./../SignUpNavbar/SignupStyle.css"
import Navbar from '../../Homepage/Navbar/Navbar'
function SignUpNavbar() {
  return (
    <div className="main_div_signupnavbar_navbar">
    <Navbar />
    <div className="container">
      <p className="heading_signupnavbar">Registration</p>
      <div className="d-flex flex-row">
        <p className="para_signupnavbar_white">HOME</p>
        <div className="orange_line_signupnavbar"></div>
        <p className="para_signupnavbar_orange">SignUp</p>
      </div>
    </div>
  </div>
  )
}

export default SignUpNavbar
