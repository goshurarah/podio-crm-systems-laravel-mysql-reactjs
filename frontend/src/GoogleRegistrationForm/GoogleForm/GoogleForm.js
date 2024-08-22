import React, { useEffect, useState } from "react";
import "./../GoogleForm/GoogleForm.css";
import phone_icon from "./../../Assets/phone_icon.png";
import company_icon from "./../../Assets/company_icon.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../../Loader/Loader";
import NotificationDisplay from "../../NotficationDisplay/NotificationDisplay";

function GoogleForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");

  const token = localStorage.getItem("token");
  const axiosInstance = axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
      "ngrok-skip-browser-warning": "true",
    },
  });

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const registerAction = (e) => {
    e.preventDefault();
    setLoading(true);
    let payload = {
      phone_number: phoneNumber,
      company_name: companyName,
    };
    const csrfToken = document
      .querySelector('meta[name="csrf-token"]')
      .getAttribute("content");

    axiosInstance
      .put("api/user/update-company-phone", payload, {
        headers: {
          "X-CSRF-TOKEN": csrfToken,
        },
      })
      .then((r) => {
        setLoading(false);
        setNotificationMessage("Registration complete successfully");

        setTimeout(() => {
          setNotificationMessage("");
          navigate("/dashboard");
        }, 2000);
      })
      .catch((e) => {
        if (e.response.data.errors != undefined) {
          setLoading(false);
        }
      });
  };

  return (
    <div className="container">
      <div className="main_div_signup_google">
        <div className="row">
          <div className="col-lg-2 col-md-12 col-12"></div>
          <div className="col-lg-8 col-md-12 col-12">
            <div className="main_div_form_signup_google">
              <div className="form_main_div_google">
                <form onSubmit={registerAction}>
                  <div className="padding_div_form_signup_google">
                    <p className="heading_in_form_google">Registration</p>

                    <div className="input_style_firstname_google">
                      <div className="d-flex flex-row">
                        <img
                          src={phone_icon}
                          className=""
                          alt="signinupinputlogo"
                        />
                        <input
                          className="input_firstname_style_google"
                          placeholder="Phone Number"
                          value={phoneNumber}
                          onChange={(e) => handleInputChange(e, setPhoneNumber)}
                          type="text"
                          required
                        />
                      </div>
                    </div>

                    <div className="input_style_firstname_google">
                      <div className="d-flex flex-row">
                        <img
                          src={company_icon}
                          className=""
                          alt="signinupinputlogo"
                        />
                        <input
                          className="input_firstname_style_google"
                          placeholder="Company Name"
                          value={companyName}
                          onChange={(e) => handleInputChange(e, setCompanyName)}
                          type="text"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="main_div_buttons_signup_google">
                    <button
                      className="orange_button_signup_google"
                      disabled={loading}
                      type="submit"
                    >
                      {loading ? <Loader /> : "Register"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12"></div>
        </div>
      </div>
      <NotificationDisplay message={notificationMessage} />
    </div>
  );
}

export default GoogleForm;
