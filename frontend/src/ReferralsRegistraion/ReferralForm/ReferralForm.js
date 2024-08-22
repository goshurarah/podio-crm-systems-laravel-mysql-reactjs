import React, { useEffect, useState } from "react";
import "./../ReferralForm/ReferralForm.css";
import firstname_icon from "./../../Assets/fn_icon.png";
import email_icon from "./../../Assets/email_icon.png";
import phone_icon from "./../../Assets/phone_icon.png";
import company_icon from "./../../Assets/company_icon.png";
import password_icon from "./../../Assets/password_icon.png";
import eye_icon from "./../../Assets/eye_icon.png";
import non_seen_eye_icon from "./../../Assets/non_seen_eye_icon.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../../Loader/Loader";
import NotificationDisplay from "../../NotficationDisplay/NotificationDisplay";

import "./../ReferralForm/ReferralForm.css";
function ReferralForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [notificationMessage, setNotificationMessage] = useState("");

  useEffect(() => {
    const checkPasswordMatch = () => {
      return password === confirmPassword;
    };
    setPasswordMatch(checkPasswordMatch());
  }, [confirmPassword]);

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const registerAction = (e) => {
    e.preventDefault();
    setLoading(true);
    let payload = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phoneNumber,
      password: password,
      password_confirm: confirmPassword,
    };
    const csrfToken = document
      .querySelector('meta[name="csrf-token"]')
      .getAttribute("content");

    axios
      .post("/api/affiliates/register", payload, {
        headers: {
          "X-CSRF-TOKEN": csrfToken,
        },
      })
      .then((r) => {
        setLoading(false);
        setNotificationMessage("Registration complete successfully!");
        console.log(r);
        localStorage.setItem("token", r?.data?.token);
        localStorage.setItem("affiliateusername", r?.data?.affiliate?.first_name);
        localStorage.setItem("affiliateUser", "affiliateUser");
        setTimeout(() => {
          setNotificationMessage("");
          navigate("/referral/dashboard");
        }, 2000);
      })
      .catch((e) => {
        if (e.response.data.errors != undefined) {
          setLoading(false);
        }
        setLoading(false);
      });
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };
  const [passwordcVisible, setPasswordcVisible] = useState(false);

  const handleTogglePasswordc = () => {
    setPasswordcVisible(!passwordcVisible);
  };

  const navigatetosignpage = () => {
    localStorage.setItem("paymentmethod", "");
    navigate("/referral/signin");
  };
  return (
    <div className="container">
      <div className="main_div_signup">
        <div className="row">
          <div className="col-lg-2 col-md-12 col-12"></div>
          <div className="col-lg-8 col-md-12 col-12">
            <div className="main_div_form_signup">
              <div className="form_main_div_referralform">
                <form onSubmit={registerAction}>
                  <div className="padding_div_form_signup">
                    <p className="heading_in_form_referralform">Registration</p>
                    <div className="input_style_firstname_referralform">
                      <div className="d-flex flex-row">
                        <img
                          src={firstname_icon}
                          className=""
                          alt="signinupinputlogo"
                        />
                        <input
                          className="input_firstname_style_referralform"
                          placeholder="First Name"
                          value={firstName}
                          onChange={(e) => handleInputChange(e, setFirstName)}
                          type="text"
                          required
                        />
                      </div>
                    </div>

                    <div className="input_style_firstname_referralform">
                      <div className="d-flex flex-row">
                        <img
                          src={firstname_icon}
                          className=""
                          alt="signinupinputlogo_referralform"
                        />
                        <input
                          className="input_firstname_style_referralform"
                          placeholder="Last Name"
                          value={lastName}
                          onChange={(e) => handleInputChange(e, setLastName)}
                          type="text"
                          required
                        />
                      </div>
                    </div>

                    <div className="input_style_firstname_referralform">
                      <div className="d-flex flex-row">
                        <img
                          src={email_icon}
                          className=""
                          alt="signinupinputlogo_referralform"
                        />
                        <input
                          className="input_firstname_style_referralform"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => handleInputChange(e, setEmail)}
                          type="email"
                          required
                        />
                      </div>
                    </div>

                    <div className="input_style_firstname_referralform">
                      <div className="d-flex flex-row">
                        <img
                          src={phone_icon}
                          className=""
                          alt="signinupinputlogo_referralform"
                        />
                        <input
                          className="input_firstname_style_referralform"
                          placeholder="Phone Number"
                          value={phoneNumber}
                          onChange={(e) => handleInputChange(e, setPhoneNumber)}
                          type="text"
                          required
                        />
                      </div>
                    </div>

                    <div className="input_style_firstname_referralform">
                      <div className="d-flex flex-row">
                        <img
                          src={password_icon}
                          className=""
                          alt="signinupinputlogo_referralform"
                        />
                        <input
                          type={passwordVisible ? "text" : "password"}
                          className="input_firstname_style_referralform"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => handleInputChange(e, setPassword)}
                          required
                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                        />
                        <img
                          src={passwordVisible ? non_seen_eye_icon : eye_icon}
                          className="eye_style"
                          onClick={handleTogglePassword}
                        />
                      </div>
                    </div>

                    <div className="input_style_firstname_referralform">
                      <div className="d-flex flex-row">
                        <img
                          src={password_icon}
                          className=""
                          alt="signinupinputlogo_referralform"
                        />
                        <input
                          type={passwordcVisible ? "text" : "password"}
                          className="input_firstname_style_referralform"
                          placeholder="Confirm Password"
                          value={confirmPassword}
                          onChange={(e) =>
                            handleInputChange(e, setConfirmPassword)
                          }
                          required
                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                        />
                        <img
                          src={passwordcVisible ? non_seen_eye_icon : eye_icon}
                          className="eye_style"
                          onClick={handleTogglePasswordc}
                        />
                      </div>
                    </div>

                    {passwordMatch ? (
                      <p></p>
                    ) : (
                      <p className="error_message_not_match">
                        Passwords do not match.
                      </p>
                    )}
                  </div>

                  <div className="main_div_buttons_signup">
                    <button
                      className="orange_button_signup"
                      disabled={loading}
                      type="submit"
                    >
                      {loading ? <Loader /> : "Register"}
                    </button>
                  </div>
                </form>
                <div className="main_div_buttons_signup">
                  <p className="or_para">Or</p>

                  <button
                    className="blue_button_signup"
                    onClick={navigatetosignpage}
                  >
                    Sign In
                  </button>
                </div>
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

export default ReferralForm;
