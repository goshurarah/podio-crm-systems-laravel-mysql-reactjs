import React, { useEffect, useState } from "react";
import "./../NewPasswordForm/NewPasswordForm.css";
import password_icon from "./../../Assets/password_icon.png";
import eye_icon from "./../../Assets/eye_icon.png";
import non_seen_eye_icon from "./../../Assets/non_seen_eye_icon.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../../Loader/Loader";
import NotificationDisplay from "../../NotficationDisplay/NotificationDisplay";

function NewPasswordForm() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [loading, setLoading] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState(null);

  useEffect(() => {
    const checkPasswordMatch = () => {
      return password === confirmPassword;
    };
    setPasswordMatch(checkPasswordMatch());
  }, [confirmPassword]);

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  useEffect(() => {
    getEmailData();
  });
  const getEmailData = () => {
    const href = window.location.href;
    return href;
  };

  const url_email = getEmailData();
  function getValueAfterFifthSlash(str) {
    const parts = str.split("/");
    if (parts.length >= 6) {
      return parts[5];
    } else {
      return null; // Return null if there are less than 6 parts
    }
  }
  const value_mail = getValueAfterFifthSlash(url_email);

  useEffect(() => {
    getTokenData();
  }, []);
  const getTokenData = () => {
    const href = window.location.href;
    return href;
  };

  const url = getTokenData();
  const start_point = "/reset-password/";
  const end_point = "/";

  // Using string manipulation
  const start_index = url.indexOf(start_point) + start_point.length;
  const end_index = url.indexOf(end_point, start_index);
  const sliced_url = url.substring(start_index, end_index);

  const newPasswordAction = (e) => {
    e.preventDefault();
    setLoading(true);
    let payload = {
      email: value_mail,
      token: sliced_url,
      password: password,
      confirm_password: confirmPassword,
    };
    axios
      .post("/api/reset-password", payload)
      .then((r) => {
        setLoading(false);
        setNotificationMessage("Password Change successfully");
        setTimeout(() => {
          setNotificationMessage("");
          navigate("/signin");
        }, 4000);
        
      })
      .catch((e) => {
        if (e.response.data.errors != undefined) {
          setNotificationMessage("Error!");
          setLoading(false);
          setTimeout(() => {
            setNotificationMessage("");
          }, 4000);
        }
        setNotificationMessage("Error!");
        setLoading(false);
        setTimeout(() => {
          setNotificationMessage("");
        }, 4000);
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

  return (
    <div className="container">
      <div className="main_div_newpassword">
        <div className="row">
          <div className="col-lg-2 col-md-12 col-12"></div>
          <div className="col-lg-8 col-md-12 col-12">
            <div className="main_div_form_newpassword">
              <div className="form_main_div_new_password">
                <form onSubmit={newPasswordAction}>
                  <div className="padding_div_form_newpassword">
                    <p className="heading_in_form_new_password">New Password</p>
                    {passwordMatch ? (
                      <p className="show_message"></p>
                    ) : (
                      <p className="error_message_not_match">
                        Passwords do not match.
                      </p>
                    )}

                    <div className="input_style_firstname_new_passowrd">
                      <div className="d-flex flex-row">
                        <img
                          src={password_icon}
                          className=""
                          alt="passwordlogo"
                        />
                        <input
                          type={passwordVisible ? "text" : "password"}
                          className="input_firstname_style_new_password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => handleInputChange(e, setPassword)}
                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                        />
                        <img
                          src={passwordVisible ? non_seen_eye_icon : eye_icon}
                          className="eye_style_new_password"
                          onClick={handleTogglePassword}
                        />
                      </div>
                    </div>

                    <div className="input_style_firstname_new_passowrd">
                      <div className="d-flex flex-row">
                        <img
                          src={password_icon}
                          className=""
                          alt="passwordlogo"
                        />
                        <input
                          type={passwordcVisible ? "text" : "password"}
                          className="input_firstname_style_new_password"
                          placeholder="Confirm Password"
                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                          value={confirmPassword}
                          onChange={(e) =>
                            handleInputChange(e, setConfirmPassword)
                          }
                        />
                        <img
                          src={passwordcVisible ? non_seen_eye_icon : eye_icon}
                          className="eye_style_new_password"
                          onClick={handleTogglePasswordc}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="main_div_buttons_newpassword">
                    <button
                      className="orange_button_newpassword"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? <Loader /> : "Set New Password "}
                    </button>
                  </div>
                </form>
                <div className="main_div_buttons_newpassword">
                  <p className="or_para_new_password">Or</p>

                  <Link to="/signin">
                    <button className="blue_button_newpassword">Sign In</button>
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

export default NewPasswordForm;
