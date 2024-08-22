import React, { useState, useEffect } from "react";
import "./../SignIn/SignInFormStyle.css";
import email_icon from "./../../Assets/email_icon.png";
import password_icon from "./../../Assets/password_icon.png";
import eye_icon from "./../../Assets/eye_icon.png";
import google_icon from "./../../Assets/googleicon.png";
import non_seen_eye_icon from "./../../Assets/non_seen_eye_icon.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../../Loader/Loader";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import NotificationDisplay from "../../NotficationDisplay/NotificationDisplay";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_ID);

function SignInForm() {
  const token = localStorage.getItem("token");

  const [packagetype, setpackagetype] = useState("");

  const totalpriceto_pay = localStorage.getItem("totalpricetopay");
  const services_name = localStorage.getItem("servicesname");

  const [sessionId, setSessionId] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  localStorage.setItem("adminemail", email);
  useEffect(() => {
    return () => {
      setpackagetype(localStorage.getItem("paymentmethod"));
    };
  }, [email, password]);

  // blog conditional rendering code start here
  const [blogcommnets, setblogcommnets] = useState("");
  const [blogreply, setblogreply] = useState("");
  const [blogid, setblogid] = useState("");

  useEffect(() => {
    setblogcommnets(localStorage.getItem("comment"));
    setblogreply(localStorage.getItem("reply"));
    setblogid(localStorage.getItem("blogid"));
  }, []);

  // admin login
  const [adminemail, setadminemail] = useState("");
  useEffect(() => {
    setadminemail(localStorage.getItem("adminemail"));
  }, [email]);
  const handleLogin = async (e) => {
    e.preventDefault();

    // Set loading to true when the form is being submitted
    setLoading(true);

    const payload = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post("/api/login", payload);
      localStorage.setItem("token", response.data.token);

      if (adminemail === "blog-admin@podiocrmsystems.com") {
        navigate("/admindashboard");
      } else if (
        packagetype === "prod_PbsWRhEIQSXQcF" ||
        packagetype === "prod_PbslrdJ3Zp5JnN" ||
        packagetype === "createpackage"
      ) {
        if (packagetype === "prod_PbsWRhEIQSXQcF") {
          handleClick("prod_PbsWRhEIQSXQcF");
        } else if (packagetype === "prod_PbslrdJ3Zp5JnN") {
          handleClick("prod_PbslrdJ3Zp5JnN");
        } else {
          handleClickcustomepackagepay(totalpriceto_pay, services_name);
        }
      } else if (
        blogcommnets !== null ||
        blogcommnets !== "" ||
        blogreply !== null ||
        blogreply !== ""
      ) {
        if (blogid !== null) {
          navigate(`/blogs/${blogid}`);
        } else {
          navigate("/dashboard");
        }
      } else {
        setNotificationMessage("Login successful");
        setTimeout(() => {
          setNotificationMessage("");
          navigate("/dashboard");
        }, 4000);
      }
    } catch (error) {
      setLoading(false);
      setNotificationMessage(error?.response?.data?.error);
      setTimeout(() => {
        setNotificationMessage("");
      }, 4000);
    } finally {
      // Set loading back to false whether the request succeeds or fails
      setLoading(false);
    }
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };
  const [notificationMessage, setNotificationMessage] = useState("");

  const handleClick = async (namepackage) => {
    const token = localStorage.getItem("token");
    const axiosInstance = axios.create({
      headers: {
        Authorization: `Bearer ${token}`,
        "ngrok-skip-browser-warning": "true",
      },
    });

    setNotificationMessage("wait stripe payment load");

    try {
      const response = await axiosInstance.post(
        "/api/plans/checkout",
        {
          product_id: namepackage,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      const data = response.data;
      setSessionId(data.id);

      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: data.id,
      });
      setNotificationMessage("");
      if (error) {
        setNotificationMessage("Error: payment not proceed, try again");
        setTimeout(() => {
          setNotificationMessage("");
        }, 4000);
        console.error(error);
      }
    } catch (error) {
      setNotificationMessage("Error: payment not proceed, try again");
      setTimeout(() => {
        setNotificationMessage("");
      }, 4000);
      console.error("An error occurred:", error);
    }
  };

  const handleGueststandardCheckoutClick = async (packagename) => {
    setNotificationMessage("wait stripe payment load");

    try {
      const response = await axios.post(
        "api/guest/plans/checkout",
        {
          product_id: packagename,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      const data = response.data;
      setSessionId(data.id);

      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: data.id,
      });
      setNotificationMessage("");
      if (error) {
        setNotificationMessage("aa");
        setTimeout(() => {
          setNotificationMessage("");
        }, 4000);
        console.error(error);
      }
    } catch (error) {
      setNotificationMessage("Error: payment not proceed, try again");
      setTimeout(() => {
        setNotificationMessage("");
      }, 4000);
      console.error("An error occurred:", error);
    }
  };

  const handleGueststandardplusCheckoutClick = async (packagename) => {
    setNotificationMessage("wait stripe payment load");

    try {
      const response = await axios.post(
        "api/guest/plans/checkout",
        {
          product_id: packagename,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      const data = response.data;
      setSessionId(data.id);

      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: data.id,
      });
      setNotificationMessage("");
      if (error) {
        setNotificationMessage("aa");
        setTimeout(() => {
          setNotificationMessage("");
        }, 4000);
        console.error(error);
      }
    } catch (error) {
      setNotificationMessage("Error: payment not proceed, try again");
      setTimeout(() => {
        setNotificationMessage("");
      }, 4000);
      console.error("An error occurred:", error);
    }
  };

  const handleClickcustomepackagepay = async (
    totalpriceto_pay,
    services_name
  ) => {
    setNotificationMessage("wait stripe payment load");
    const token = localStorage.getItem("token");
    const axiosInstance = axios.create({
      headers: {
        Authorization: `Bearer ${token}`,
        "ngrok-skip-browser-warning": "true",
      },
    });
    try {
      const response = await axiosInstance.post(
        "api/services-and-modules/checkout",
        {
          amount: totalpriceto_pay,
          services_modules: services_name,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      const data = response.data;
      setSessionId(data.id);

      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: data.id,
      });
      setNotificationMessage("");
      if (error) {
        setNotificationMessage("Error: payment not proceed");
        setTimeout(() => {
          setNotificationMessage("");
        }, 4000);
        console.error(error);
      }
    } catch (error) {
      setNotificationMessage("Error: payment not proceed");
      setTimeout(() => {
        setNotificationMessage("");
      }, 4000);
      console.error("An error occurred:", error);
    }
  };

  const handleClickcustomeGuestpackagepay = async () => {
    setNotificationMessage("wait stripe payment load");

    try {
      const response = await axios.post(
        "api/guest/modules-services/checkout",
        {
          amount: totalpriceto_pay,
          services_modules: services_name,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      const data = response.data;
      setSessionId(data.id);

      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: data.id,
      });
      setNotificationMessage("");
      if (error) {
        setNotificationMessage("Error: payment not proceed");
        setTimeout(() => {
          setNotificationMessage("");
        }, 4000);
        console.error(error);
      }
    } catch (error) {
      setNotificationMessage("Error: payment not proceed");
      setTimeout(() => {
        setNotificationMessage("");
      }, 4000);
      console.error("An error occurred:", error);
    }
  };
  const [googleLoginUrl, setGoogleLoginUrl] = useState(null);

  useEffect(() => {
    axios
      .get("/api/auth/google", { headers: { accept: "application/json" } })
      .then((response) => {
        setGoogleLoginUrl(response.data.url);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container">
      <div className="main_div_signin">
        <div className="row">
          <div className="col-lg-2 col-md-12 col-12"></div>
          <div className="col-lg-8 col-md-12 col-12">
            <div className="main_div_form_signin">
              <div className="form_main_div_sign_in">
                <form onSubmit={handleLogin}>
                  <div className="padding_div_form_signin">
                    <p className="heading_in_form_sign_in">Login</p>

                    <div className="input_style_firstname_signin">
                      <div className="d-flex flex-row">
                        <img
                          src={email_icon}
                          className=""
                          alt="signininputlogo"
                        />
                        <input
                          className="input_firstname_style_signin"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          type="email"
                        />
                      </div>
                    </div>

                    <div className="input_style_firstname_signin">
                      <div className="d-flex flex-row">
                        <img
                          src={password_icon}
                          className=""
                          alt="signininputlogo"
                        />
                        <input
                          type={passwordVisible ? "text" : "password"}
                          className="input_firstname_style_signin"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <img
                          src={passwordVisible ? non_seen_eye_icon : eye_icon}
                          className="eye_style_signin"
                          onClick={handleTogglePassword}
                        />
                      </div>
                    </div>

                    <div className="d-flex flex-row-reverse">
                      <Link
                        to="/forget_password"
                        className="para_orange_forgot_your_password"
                      >
                        Forget Your Password ?
                      </Link>
                    </div>

                    <p className="accept_term_in_signin">
                      Please accept the terms of service
                    </p>

                    <div className="d-flex flex-row">
                      <input
                        type="checkbox"
                        id="accept"
                        name="accept"
                        value="accept"
                        className="checkbox_style_sign_in"
                        required
                        title="Please select the checkbox"
                      />
                      <label for="accept">Click here to accept</label>

                      <p className="term_policy_para_in_signin">
                        {" "}
                        Terms of Services & Privacy Policy
                      </p>
                      <br />
                    </div>
                  </div>

                  <div className="main_div_buttons_signin">
                    <button
                      className="orange_button_signin"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? <Loader /> : "Free Login"}
                    </button>
                  </div>
                </form>
                <div className="main_div_buttons_signin">
                  <p className="or_para_signin">Or</p>
                  <div className="d-flex justify-content-center">
                    <div className="d-flex flex-row">
                      <Link to="/signup">
                        <button className="blue_button_signin">Sign Up</button>
                      </Link>
                      {packagetype === "prod_PbsWRhEIQSXQcF" ? (
                        <button
                          className="grey_btn_guest_continue"
                          onClick={() =>
                            handleGueststandardCheckoutClick(
                              "prod_PbsWRhEIQSXQcF"
                            )
                          }
                        >
                          Continue as Guest
                        </button>
                      ) : null},

                      {packagetype === "prod_PbslrdJ3Zp5JnN" ? (
                        <button
                          className="grey_btn_guest_continue"
                          onClick={() =>
                            handleGueststandardplusCheckoutClick(
                              "prod_PbslrdJ3Zp5JnN"
                            )
                          }
                        >
                          Continue as Guest
                        </button>
                      ) : null}

                      {packagetype === "createpackage" ? (
                        <button
                          className="grey_btn_guest_continue"
                          onClick={() => handleClickcustomeGuestpackagepay()}
                        >
                          Continue as Guest
                        </button>
                      ) : null}
                    </div>
                  </div>
                </div>

                {googleLoginUrl && (
                  <div className="main_div_buttons_signin">
                    <p className="or_para_signin">Or</p>
                    <a href={googleLoginUrl}>
                      <button className="white_button_signin">
                        Signin with <img src={google_icon} />
                      </button>
                    </a>
                  </div>
                )}
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

export default SignInForm;
