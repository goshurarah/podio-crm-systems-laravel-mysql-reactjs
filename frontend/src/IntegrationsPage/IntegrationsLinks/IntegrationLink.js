import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./../IntegrationsLinks/IntegrationLinkStyle.css";
import goodtick from "./../../Assets/good_tick_integration.png";
import moreintegration from "./../../Assets/inetgration_more.png";
import moreintegrationhover from "./../../Assets/int_hover111.png";
import mergeicons from "./../../Assets/merge_icons_i.png";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";
import NotificationDisplay from "../../NotficationDisplay/NotificationDisplay";

function IntegrationLink() {
  const [additionalServices, setAdditionalServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notificationMessage, setNotificationMessage] = useState("");

  useEffect(() => {
    getAdditionalServicesData();
  }, []);

  const getAdditionalServicesData = () => {
    axios
      .get(`/api/services`, {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      })
      .then((res) => {
        setAdditionalServices(res.data);
        setLoading(false); // Data is fetched, loading is completed
      })
      .catch((error) => {
        console.error("Error fetching services data:", error);
        setError("Error fetching services data");
        setNotificationMessage("services data not found");
        setTimeout(() => {
          setNotificationMessage("");
        }, 2000);
        setLoading(false); // Even if there's an error, loading is completed
      });
  };

  const renderServices = (services) => {
    return services.map((data, index) => (
      <Link to={`/integrations/detail/${data.id}`} key={index}>
        <div
          className="d-flex main_div_integration_links m-0 p-0 pt-3 pb-0"
          onMouseOver={(e) =>
            (e.currentTarget.querySelector(".more_i_style").src =
              moreintegrationhover)
          }
          onMouseOut={(e) =>
            (e.currentTarget.querySelector(".more_i_style").src =
              moreintegration)
          }
        >
          <img
            src={goodtick}
            className="goodtick_style"
            alt="linksintegrationlogo"
          />
          <p className="para_in_integrations"> {data?.service_name}</p>
          <img
            src={moreintegration}
            className="more_i_style ml-auto mr-4"
            alt="linksintegrationlogo"
          />
        </div>
      </Link>
    ));
  };

  const splitServices = (services) => {
    const halfIndex = Math.ceil(services.length / 2);
    const firstHalf = services.slice(0, halfIndex);
    const secondHalf = services.slice(halfIndex);
    return [firstHalf, secondHalf];
  };

  const [firstHalf, secondHalf] = splitServices(
    additionalServices?.services || []
  );

  return (
    <div className="main_div_integrations">
      <div className="container">
        <p className="integrations_heading">Integrations:</p>
        <p className="para_integrations_bewlo_h">
          What Podio and its integrations has to offer?
        </p>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12">
            {loading ? <Loader /> : firstHalf && renderServices(firstHalf)}
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            {loading ? <Loader /> : secondHalf && renderServices(secondHalf)}
          </div>
        </div>
      </div>

      <NotificationDisplay message={notificationMessage} />
    </div>
  );
}

export default IntegrationLink;
