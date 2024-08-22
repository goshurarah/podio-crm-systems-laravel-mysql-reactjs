import React, { useEffect, useState } from "react";
import "./../FormGetInTouch/FormStyle.css";
import free_sonsultant_icon from "./../../Assets/free_consultant_icon.png";
import emailform from "./../../Assets/email_form.png";
import phoneform from "./../../Assets/phone_form.png";
import clockform from "./../../Assets/clockform.png";
import locationform from "./../../Assets/location_form.png";
import NotificationDisplay from "../../NotficationDisplay/NotificationDisplay";
import Loader from "../../Loader/Loader";

function Form() {
  const [notificationMessage, setNotificationMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    type: "Contact Us",
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
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

    const recaptchaResponse = window.grecaptcha.getResponse();
    if (!recaptchaResponse) {
      document.getElementById("recaptchaError").innerText =
        "Please complete the reCAPTCHA verification.";
      return;
    }
    setLoading(true);

    fetch("https://workflow-automation.podio.com/catch/6c7af09dkldv2sy", {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      timeout: 10000,
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setFormData({
          type: "Contact Us",
          name: "",
          email: "",
          phone: "",
          website: "", // Update this line
          message: "", // Update this line
        });
        window.grecaptcha.reset();
        setNotificationMessage("Request successful!");
        setTimeout(() => {
          setNotificationMessage("");
        }, 4000);
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle other errors

        setLoading(false);
        setFormData({
          type: "Contact Us",
          name: "",
          email: "",
          phone: "",
          website: "", // Update this line
          message: "", // Update this line
        });
        window.grecaptcha.reset();
        setNotificationMessage("Request successful!");
        setTimeout(() => {
          setNotificationMessage("");
        }, 4000);
      });
  };

  useEffect(() => {
    // Load reCAPTCHA when component mounts
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    return () => {
      // Clean up reCAPTCHA script when component unmounts
      document.head.removeChild(script);
    };
  }, []);
  return (
    <div className="main_div_form_get_in_touch">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-12 p-0 m-0">
            <form onSubmit={handleSubmit}>
              <div className="white_side_form_main_div">
                <p className="para_in_form">Get In Touch</p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-6">
                    <input
                      className="input_style_name_form"
                      placeholder="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      type="text"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-6">
                    <input
                      className="input_style_name_form"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      type="email"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-6">
                    <input
                      className="input_style_name_form"
                      placeholder="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      type="text"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-6">
                    <input
                      className="input_style_name_form"
                      placeholder="Website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      required
                      type="text"
                    />
                  </div>
                </div>

                <textarea
                  className="textarea_form_get_in_touch"
                  value={formData.message}
                  name="message"
                  onChange={handleChange}
                  required
                  type="text"
                />

                <div
                  className="g-recaptcha"
                  data-sitekey="6Lc5xmEpAAAAADv5GAPKRn9NZGk6oaFYncN-Fdkh"
                  data-size="normal"
                  style={{
                    transform: "scale(0.77)",
                    WebkitTransform: "scale(0.77)",
                    transformOrigin: "0 0",
                    WebkitTransformOrigin: "0 0",
                    maxWidth: "100%",
                  }}
                ></div>

                <div className="text-danger" id="recaptchaError"></div>

                <button
                  className="button_style_form_get_in_touch"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <Loader />
                  ) : (
                    <>
                      <img src={free_sonsultant_icon} alt="Free Consultant" />{" "}
                      Free Consultant
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-4 col-md-12 col-12 p-0 m-0">
            <div className="blue_side_form_main_div">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-3">
                  <img
                    src={locationform}
                    className="email_style_icon_form"
                    alt="formlogo"
                  />
                </div>
                <div className="col-lg-9 col-md-9 col-9">
                  <p className="location_heading_form">Company Location</p>
                  <p className="para_in_location_form ">16 Stonefield Drive,</p>
                  <p className="para_in_location_form">
                    Waterbury, CT 06705, USA
                  </p>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-lg-3 col-md-3 col-3">
                  <img
                    src={phoneform}
                    className="email_style_icon_form"
                    alt="formlogo"
                  />
                </div>
                <div className="col-lg-9 col-md-9 col-9">
                  <p className="location_heading_form">Telephone Number</p>
                  <p className="para_in_location_form">(959) 666-9597</p>
                  {/* <p className="para_in_location_form">+880 636 524 265</p> */}
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-lg-3 col-md-3 col-3">
                  <img
                    src={emailform}
                    className="email_style_icon_form"
                    alt="formlogo"
                  />
                </div>
                <div className="col-lg-9 col-md-9 col-9">
                  <p className="location_heading_form">Our Email Address</p>
                  <p className="para_in_location_form ">
                    contact@podiocrmsystems.com
                  </p>
                  {/* <p className="para_in_location_form">yourmail@gmail.com</p> */}
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-lg-3 col-md-3 col-3">
                  <img
                    src={clockform}
                    className="email_style_icon_form"
                    alt="formlogo"
                  />
                </div>
                <div className="col-lg-9 col-md-9 col-9">
                  <p className="location_heading_form"> Office Time </p>
                  <p className="para_in_location_form ">Mon - Fri</p>
                  <p className="para_in_location_form">(9AM - 5PM EST)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NotificationDisplay message={notificationMessage} />
    </div>
  );
}

export default Form;
