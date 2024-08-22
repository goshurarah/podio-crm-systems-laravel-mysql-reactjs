import React, { useState } from "react";
import "./../ForgetPasswordReferralForm/ForgetPasswordReferralForm.css";
import email_icon from "./../../Assets/email_icon.png";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../../Loader/Loader";
import NotificationDisplay from "../../NotficationDisplay/NotificationDisplay";

function ForgetPasswordReferralForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState(null);

  const handleSentEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      email: email,
    };
    axios
      .post("/api/forgot-password", payload)
      .then((response) => {
        setLoading(false);
        setNotificationMessage("Email sent successfully!");
        setEmail("");
        setTimeout(() => {
          setNotificationMessage("");
        }, 4000);
      })
      .catch((error) => {
        setLoading(false);
        setNotificationMessage("Failed to send email!");
        setTimeout(() => {
          setNotificationMessage("");
        }, 4000);
      });
  };
  return (
    <div className="container">
      <div className="main_div_forgetpassword_referral">
        <div className="row">
          <div className="col-lg-2 col-md-12 col-12"></div>
          <div className="col-lg-8 col-md-12 col-12">
            <div className="main_div_form_forgetpassword_referral">
              <div className="form_main_div_forgetpassword_referral">
                <form onSubmit={handleSentEmail}>
                  <div className="padding_div_form_forgetpassword_referral">
                    <p className="heading_in_form_forgetpassword_referral">
                      Forget Password
                    </p>

                    <div className="input_style_firstname_forgetpassword_referral">
                      <div className="d-flex flex-row">
                        <img src={email_icon} className="" alt="emaillogo" />
                        <input
                          className="input_firstname_style_forgetpassword_referral"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          type="email"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="main_div_buttons_forgetpassword_referral">
                    <button
                      className="orange_button_forgetpassword_referral"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? <Loader /> : "Send Link to Email"}
                    </button>
                  </div>
                </form>
                <div className="main_div_buttons_forgetpassword_referral">
                  <p className="or_para_forgetpassword_referral">Or</p>
                  <Link to="/referral/signin">
                    <button className="blue_button_forgetpassword_referral">
                      Sign In
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12"></div>
        </div>
      </div>

      {notificationMessage && (
        <NotificationDisplay message={notificationMessage} />
      )}
    </div>
  );
}

export default ForgetPasswordReferralForm;
