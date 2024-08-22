import React, { useEffect, useState } from "react";
import "./../IntegrationDetail/IntegrationStyle.css";
import logointegration from "./../../Assets/1.png";
import arrowblueintegration from "./../../Assets/arrowblue integration.png";
import checkouticon from "./../../Assets/checkout_icon.png";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../Loader/Loader";

function IntegrationDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleCheckout = () => {
    localStorage.setItem("serviceid", id);
    navigate("/additionalservices");
  };
  const [additionalServices, setadditionalServices] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    getadditionalServicesData();
  }, []);

  const getadditionalServicesData = () => {
    axios
      .get(`/api/services/${id}`, {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      })
      .then((res) => {
        setadditionalServices(res?.data?.service);
      })
      .catch((error) => {
        console.error("Error fetching services data:", error?.message);
        setError("Error fetching services data");
      });
  };

  return (
    <>
      <div className="main_div_integrationdetail">
        <div className="container">
          <div className="d-flex justify-content-center">
            <img
              src={additionalServices ? additionalServices?.logo : null}
              className="logo_integrationdetail"
              alt={additionalServices?.service_name}
            />
          </div>

          {additionalServices ? additionalServices?.description && (
            <div className="description-container">
              {additionalServices.description
                .split(".")
                .map((sentence, index, array) => (
                  <p
                    key={index}
                    className="para_integrationcontent"
                    dangerouslySetInnerHTML={{
                      __html:
                        sentence.trim() +
                        (index !== array.length - 1 ? "." : ""),
                    }}
                  ></p>
                ))}
            </div>
          ) : <Loader/>}
        </div>
      </div>

      <div className=" checkout_div">
        <div className="container">
          <div className=" row">
            <div className="col-lg-7 col-md-7 col-12">
              <div className="d-flex flex-content-row">
                <p className="heading_quote_integrationdetail">Click Here to</p>

                <p className="heading_quote_integrationdetail_orange">
                  Check Out
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-12">
              <div className="d-flex justify-content-end">
                <img src={arrowblueintegration} className="blue_arrow_int" />
                <button
                  className="checkout_button_int"
                  onClick={handleCheckout}
                >
                  <img src={checkouticon} className="img_checkout_icon" />{" "}
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntegrationDetail;
