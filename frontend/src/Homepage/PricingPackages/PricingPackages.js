import React, { useEffect, useState } from "react";
import "./../PricingPackages/PricingPackagesStyle.css";
import tickmark from "./../../Assets/tickSymbol.png";
import plussign from "./../../Assets/plus_sign_standard.png";
import tickwhitesymbol from "./../../Assets/tickstandardSymbol.png";
import standardplusicon from "./../../Assets/standardplanplusicon.png";
import axios from "axios";
import Loader from "../../Loader/Loader";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import NotificationDisplay from "../../NotficationDisplay/NotificationDisplay";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_ID);

function PricingPackages() {
  const [standardPackage, setstandardPackage] = useState({});
  const [standardPlusPackage, setstandardPlusPackage] = useState({});
  const [notificationMessage, setNotificationMessage] = useState("");
  const [packagetype, setpackagetype] = useState("");

  useEffect(() => {
    getpricingpackgesData();
  }, []);

  const getpricingpackgesData = () => {
    axios
      .get(`/api/plans`, {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      })
      .then((res) => {
        // Assuming the response data is an array and has at least 3 elements
        if (Array.isArray(res.data) && res.data.length >= 2) {
          setstandardPackage(res.data[0]);
          setstandardPlusPackage(res.data[1]);
        }
      })
      .catch((error) => {
        console.error("Error fetching pricingpackges data:", error);
      });
  };
  const navigate = useNavigate();

  const handleClick = (value) => {
    localStorage.setItem("paymentmethod", "prod_PbsWRhEIQSXQcF");

    const token = localStorage.getItem("token");

    setpackagetype(localStorage.getItem("paymentmethod"));
    if (token !== null) {
      setNotificationMessage("Payment processing...");
      handleClickpackagepaymentstandard();

      setTimeout(() => {
        setNotificationMessage("");
      }, 2000);
    } else {
      setNotificationMessage("Please sign in to proceed with payment.");
      setTimeout(() => {
        setNotificationMessage("");
        navigate(`/signin`);
      }, 2000);
    }
  };

  const handleClickeconomy = (value) => {
    localStorage.setItem("paymentmethod", "prod_PbslrdJ3Zp5JnN");
    const token = localStorage.getItem("token");

    setpackagetype(localStorage.getItem("paymentmethod"));

    if (token !== null) {
      setNotificationMessage("Payment processing...");
      handleClickpackagepaymentstandardplus();

      setTimeout(() => {
        setNotificationMessage("");
      }, 2000);
    } else {
      setNotificationMessage("Please sign in to proceed with payment.");
      setTimeout(() => {
        setNotificationMessage("");
        navigate(`/signin`);
      }, 2000);
    }
  };

  const handleClickcreateplan = (value) => {
    localStorage.setItem("serviceid", "");
    localStorage.setItem("paymentmethod", "createpackage");
    navigate(`/additionalservices`);
  };

  const [sessionId, setSessionId] = useState(null);

  // redirect to checkout if token is saved

  const token = localStorage.getItem("token");

  // const packagepaymentcheckout = () => {
  //   if (packagetype === "prod_PbsWRhEIQSXQcF" || packagetype === "prod_PbslrdJ3Zp5JnN") {
  //     if (packagetype === "prod_PbsWRhEIQSXQcF") {
  //       return (
  //         <Elements stripe={stripePromise}>
  //           {handleClickpackagepayment("prod_PbsWRhEIQSXQcF")}
  //         </Elements>
  //       );
  //     }
  //   } else {
  //     <Elements stripe={stripePromise}>
  //       {handleClickpackagepayment("prod_PbslrdJ3Zp5JnN")}
  //     </Elements>;
  //   }
  // };

  const handleClickpackagepaymentstandard = async (namepackage) => {
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
          product_id: "prod_PbsWRhEIQSXQcF",
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

  const handleClickpackagepaymentstandardplus = async (namepackage) => {
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
          product_id: "prod_PbslrdJ3Zp5JnN",
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

  return (
    <div className=" main_div_background_image_pricing">
      <div className="our_pricing_center">
        <div className="d-flex justify-content-center">
          <div className="hr_line_pricng_orange" />
          <p className="our_pricing_text">Our Pricing</p>
          <div className="hr_line_pricng_orange" />
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <p className="choose_for_best_text_black">Choose Your Best</p>
        <p className="pricing_plans_orange"> Pricing Plans</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-12 d-flex justify-content-center">
            <div className="standard_price_package_main">
              <div className="standard_heading_main_div d-flex justify-content-between">
                <p className="standard_text">
                  {" "}
                  {standardPackage ? standardPackage?.name : null}
                </p>
                <div className="d-flex justify-content-row px-3">
                  <p className="dollar_sign_price">$</p>
                  <p className="price_in_dollar_text">
                    {standardPackage ? parseInt(standardPackage?.price) : null}
                  </p>
                  <p className="per_month"></p>
                  {/* <p className="per_month"></p> */}
                </div>
              </div>

              <div className="main_div_details_packages_standard">
                {standardPackage
                  ? standardPackage?.description?.map((data, index) => {
                      return (
                        <div className="d-flex flex-row" key={index}>
                          <img
                            className="image_style_detail_tick"
                            src={tickwhitesymbol}
                          />
                          <p className="para_in_details_pricing ">{data}</p>
                        </div>
                      );
                    })
                  : null}
              </div>
              <div className="d-flex justify-content-center">
                <button
                  className="select_plan_button_pkg"
                  onClick={() => handleClick(standardPackage?.price)}
                >
                  Select Plan
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 d-flex justify-content-center">
            <div className="economy_main_div">
              <div className="economy_heading_main_div d-flex justify-content-between">
                <p className="economy_text_pkg">
                  {standardPlusPackage ? standardPlusPackage?.name : null}
                </p>
                <div className="d-flex justify-content-row px-3">
                  <p className="dollar_sign_price_blue">$</p>
                  <p className="price_in_dollar_text_blue">
                    {standardPlusPackage
                      ? parseInt(standardPlusPackage?.price)
                      : null}
                  </p>
                  <p className="per_month_blue"></p>
                  {/* <p className="per_month_blue"></p> */}
                </div>
              </div>

              <div className="d-flex justify-content-center">
                {/* <button className="standard_plan_button">Standard Plan</button> */}
                <img src={standardplusicon} className="mt-3" alt="pricelogo" />
              </div>

              <div className="d-flex justify-content-center">
                <img
                  src={plussign}
                  className="plussign_style"
                  alt="pricelogo"
                />
              </div>
              <div className="main_div_economy_details">
                {standardPlusPackage ? (
                  standardPlusPackage?.description?.map((data, index) => {
                    return (
                      <div className="d-flex flex-row" key={index}>
                        <img
                          className="image_style_detail_tick"
                          src={tickmark}
                        />
                        <p className="economy_detail_text ">{data}</p>
                      </div>
                    );
                  })
                ) : (
                  <Loader />
                )}
              </div>
              <div className="d-flex justify-content-center">
                <button
                  className="select_plan_button_pkg"
                  onClick={() => handleClickeconomy(standardPlusPackage?.price)}
                >
                  Select Plan
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 d-flex justify-content-center">
            <div className="premium_main_div">
              <div className="standard_heading_main_div d-flex justify-content-between">
                <p className="standard_text">Make Your Own</p>
              </div>

              <div className="main_div_details_packages_standard">
                {/* {standardPackage
                  ? standardPackage?.description?.map((data, index) => {
                      return (
                        <div className="d-flex flex-row">
                          <img
                            className="image_style_detail_tick"
                            src={tickmark}
                          />
                          <p className="para_in_details_pricing ">{data}</p>
                        </div>
                      );
                    })
                  : null} */}

                <div className="d-flex flex-row">
                  <img
                    className="image_style_detail_tick"
                    src={tickmark}
                    alt="pricelogo"
                  />
                  <p className="para_in_details_pricing ">
                    Go High Level to Podio Integration
                  </p>
                </div>

                <div className="d-flex flex-row">
                  <img
                    className="image_style_detail_tick"
                    src={tickmark}
                    alt="pricelogo"
                  />
                  <p className="para_in_details_pricing ">
                    Active Campaign to Podio Integration (2 way sync)
                  </p>
                </div>

                <div className="d-flex flex-row">
                  <img
                    className="image_style_detail_tick"
                    src={tickmark}
                    alt="pricelogo"
                  />
                  <p className="para_in_details_pricing ">
                    Zapier Flow Adjustment
                  </p>
                </div>

                <div className="d-flex flex-row">
                  <img
                    className="image_style_detail_tick"
                    src={tickmark}
                    alt="pricelogo"
                  />
                  <p className="para_in_details_pricing ">
                    MailChimp for marketing and automation
                  </p>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="main_div_para_craeteplan">
                    <p className="para_in_createplan_pkg">
                      This list is not exhaustive. For more custom integrations
                      and services please click the link below and choose your
                      required package.
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  className="select_plan_button_pkg"
                  onClick={() => handleClickcreateplan()}
                >
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NotificationDisplay message={notificationMessage} />
    </div>
  );
}

export default PricingPackages;
