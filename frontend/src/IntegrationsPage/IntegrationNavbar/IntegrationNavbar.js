import React from "react";
import "./../IntegrationNavbar/IntegrationsNvbarStyle.css";
import Navbar from "../../Homepage/Navbar/Navbar";

function IntegrationNavbar() {
  return (
    <div className="main_div_integration_navbar">
      <Navbar />
      <div className="container">
        <p className="heading_i">Integrations</p>
        <div className="d-flex flex-row">
          <p className="para_i_white">Home</p>
          <div className="orange_line_i"></div>
          <p className="para_i_orange">Integrations</p>
        </div>
      </div>
    </div>
  );
}

export default IntegrationNavbar;
