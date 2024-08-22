import React, { useState } from "react";
import "./../FooterPodiocrmsystems/FooterStyle.css";
import smalldots from "./../../Assets/small_dots.png";
import bigdots from "./../../Assets/big_dots_footer.png";
import callicon from "./../../Assets/call_footer.png";
import fb from "./../../Assets/fb_icon_footer.png";
import insta from "./../../Assets/insta_icon_footer.png";
import twitter from "./../../Assets/twitter_icon_footer.png";
import youtube from "./../../Assets/youtube_icon_footer.png";
import add_email from "./../../Assets/send_email_icon_footer.png";
import { Link } from "react-router-dom";
import NotificationDisplay from "../../NotficationDisplay/NotificationDisplay";
import Loader from "../../Loader/Loader";

function Footer() {
  const [loading, setLoading] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [formData, setFormData] = useState({
    type: "Newsletter",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("https://workflow-automation.podio.com/catch/6c7af09dkldv2sy", {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setFormData({
          type: "Newsletter",
          email: "",
        });
        setNotificationMessage("Request successful!");
        setTimeout(() => {
          setNotificationMessage("");
        }, 4000);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
        setFormData({
          type: "Newsletter",
          email: "",
        });
        setNotificationMessage("Request successful!");
        setTimeout(() => {
          setNotificationMessage("");
        }, 4000);
      });
  };

  return (
    <div className="main_div_footer_podio_crm_systems">
      <div className="container">
        <div className="main_div_free_business_consultant ">
          <div className="row">
            <div className="col-lg-1 col-md-1 col-5">
              <img
                src={smalldots}
                className="small_dots_style"
                alt="footerlogo"
              />
            </div>
            <div className="col-lg-3 col-md-3 col-6">
              <p className="get_your_free_para">
                Get your Free Business Consolution
              </p>
            </div>
            <div className="col-lg-3 col-md-3 col-5">
              <img
                src={callicon}
                className="call_icon_style"
                alt="footerlogo"
              />
            </div>
            <div className="col-lg-3 col-md-3 col-5">
              <p className="para_phone_number_footer">(959) 666-9597</p>
              <p className="email_footer_para">contact@podiocrmsystems.com</p>
            </div>
            <div className="col-lg-2 col-md-2 col-12 ">
              <div className="d-flex align-items-end flex-column">
                <img
                  src={bigdots}
                  className="big_dots_style mt-auto p-2"
                  alt="footerlogo"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <Link to="/about_us">
              <p className="about_us_heading_footer">About Us</p>
            </Link>
            <div className="orange_line_belowaboutus"></div>
            <p className="para_below_about_us_footer">
              Business Consulting is optimize standing manufactured products and
              installation synergy. Professionally predominat why professional
              business
            </p>
            <div className="d-flex flex-row">
              <img src={fb} className="icon_setting_footer" alt="footerlogo" />
              <img
                src={insta}
                className="icons_setting_footer"
                alt="footerlogo"
              />
              <img
                src={twitter}
                className="icons_setting_footer"
                alt="footerlogo"
              />
              <img
                src={youtube}
                className="icons_setting_footer"
                alt="footerlogo"
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-12">
            <p className="about_us_heading_footer">Company</p>
            <div className="orange_line_belowaboutus"></div>
            <Link to="/">
              <p className="link_company_footer">Home</p>
            </Link>
            <Link to="/about_us">
              <p className="links_company_footer">About Us</p>
            </Link>
            <Link to="/contact_us">
              <p className="links_company_footer">Contact Us</p>
            </Link>
            <Link to="/services">
              <p className="links_company_footer">Services</p>
            </Link>
            <Link to="/blogs">
              <p className="links_company_footer">Blogs</p>
            </Link>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-12">
            <p className="about_us_heading_footer">Services</p>
            <div className="orange_line_belowaboutus"></div>
            <p className="link_company_footer">Strategy & Planing</p>
            <p className="links_company_footer">Consumer Market</p>
            <p className="links_company_footer">Data Analysis</p>
            <p className="links_company_footer">Corporate Finance</p>
            <p className="links_company_footer">Market Research</p>
          </div>
          <div className="col-lg-1 col-md-4 col-sm-6 col-12"></div>
          <div className="col-lg-3 col-md-12 col-sm-12 col-12">
            <p className="about_us_heading_footer">Popular Posts</p>
            <div className="orange_line_belowaboutus"></div>
            <form onSubmit={handleSubmit}>
              <div className="d-flex flex-row">
                <input
                  className="input_style_add_email_footer"
                  placeholder="Enter E-Mail"
                  value={formData.email}
                  name="email"
                  onChange={handleChange}
                  type="email"
                  required
                />
                <button className="btn_style_add_email_footer" type="submit">
                  {loading ? (
                    <Loader />
                  ) : (
                    <>
                      <img src={add_email} alt="footerlogo" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <NotificationDisplay message={notificationMessage} />
    </div>
  );
}

export default Footer;
