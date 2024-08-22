import React from "react";
import "./../LinkAdditionalService/LinkAdditionalStyle.css";
import { Link, useNavigate } from "react-router-dom";

function LinkAdditionalServices() {
  const navigate = useNavigate();
  const handleAdditionalServices = () => {
    navigate("/additionalservices");
  };
  return (
    <div className="main_div_linkadditionalservices">
      <div className="d-flex justify-content-center">
        {" "}
        <button className="additional_servicesbutton" onClick={handleAdditionalServices}>
          Additional services
        </button>
      </div>
    </div>
  );
}

export default LinkAdditionalServices;
