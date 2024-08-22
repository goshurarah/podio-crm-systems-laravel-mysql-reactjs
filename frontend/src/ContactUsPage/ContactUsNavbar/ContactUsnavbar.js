import React from "react";
import "./../ContactUsNavbar/ContactUsStyle.css";
import Navbar from "../../Homepage/Navbar/Navbar";

function ContactUsnavbar() {
  return (
    <div className="main_div_contactus_navbar">
      <Navbar />
      <div className="container">
        <p className="heading_cn">Contact Us</p>
        <div className="d-flex flex-row">
          <p className="para_cn_white">Home</p>
          <div className="orange_line_cn"></div>
          <p className="para_cn_orange">Contact Us</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUsnavbar;
