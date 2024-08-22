import React, { useEffect, useRef, useState } from "react";
import "./../AdditionalServiceTable/AdditionalServiceTable.css";
import deletebutton from "./../../Assets/delete_button_service.png";
import deletebuttonhover from "./../../Assets/delete_hover_service.png";
import creditpay from "./../../Assets/creditpay.png";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import NotificationDisplay from "../../NotficationDisplay/NotificationDisplay";
import { Navigate, useNavigate } from "react-router-dom";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_ID);


function AdditionalServicetable() {
  const token = localStorage.getItem("token");
  const axiosInstance = axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
      "ngrok-skip-browser-warning": "true",
    },
  });

  const [additionalServices, setadditionalServices] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    getadditionalServicesData();
  }, []);

  const getadditionalServicesData = () => {
    axios
      .get(`/api/services`, {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      })
      .then((res) => {
        setadditionalServices(res.data);
      })
      .catch((error) => {
        console.error("Error fetching services data:", error);
        setError("Error fetching services data");
      });
  };

  const [planmodules, setplanmodules] = useState("");

  useEffect(() => {
    getplanmodules();
  }, []);

  const getplanmodules = () => {
    axios
      .get(`/api/plan_modules`, {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      })
      .then((res) => {
        setplanmodules(res.data);
        console.log(res.data, "modules data");
      })
      .catch((error) => {
        console.error("Error fetching services data:", error);
      });
  };

  const [notificationMessage, setNotificationMessage] = useState("");
  const [sessionId, setSessionId] = useState(null);
  const navigate = useNavigate();

  const handleClick = async (price) => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      const totalpriceto_pay = localStorage.getItem("totalpricetopay");
      const services_name = localStorage.getItem("servicesname");

      handleClickcustomepackagepay(totalpriceto_pay, services_name);
      setNotificationMessage("Payment processing...");
      setTimeout(() => {
        setNotificationMessage("");
      }, 2000);
    } else {
      setNotificationMessage("Please sign in to proceed with payment.");
      setTimeout(() => {
        localStorage.setItem("servicesname", selectedServices);
        localStorage.setItem("totalpricetopay", totalPricePayshow);
        localStorage.setItem("paymentmethod", "createpackage");
        setNotificationMessage("");
        navigate(`/signin`);
      }, 2000);
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

  const [totalPricePayshow, setTotalPricePayshow] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);
  const [selectAllChecked, setSelectAllChecked] = useState(false);

  const [selectedServices, setSelectedServices] = useState([]);

  useEffect(() => {
    const id = localStorage.getItem("serviceid");

    if (id && additionalServices && additionalServices.services.length > 0) {
      const selectedService = additionalServices.services.find(
        (service) => service.id == id
      );
      if (selectedService) {
        setSelectedServices([selectedService.service_name]);
        setTotalPrice(selectedService.price); // Update totalPrice here
      }
    }
  }, [additionalServices]);

  localStorage.setItem("servicesname", selectedServices);
  localStorage.setItem("totalpricetopay", totalPricePayshow);

  const handleCheckboxChange = (e, serviceName, price, id) => {
    const isChecked = e.target.checked;

    if (e.target.name === "selectAll") {
      setSelectAllChecked(isChecked);
      const allServices = additionalServices?.services || [];
      const selectedServiceNames = isChecked
        ? allServices.map((service) => service.service_name)
        : [];
      const selectedServicePrices = isChecked
        ? allServices.reduce((total, service) => total + service.price, 0)
        : 0;
      setSelectedServices(isChecked ? selectedServiceNames : []);

      setTotalPrice(selectedServicePrices);
    } else {
      const updatedSelectedServices = isChecked
        ? [...selectedServices, serviceName]
        : selectedServices.filter((service) => service !== serviceName);
      setSelectedServices(updatedSelectedServices);
      setTotalPrice(isChecked ? totalPrice + price : totalPrice - price);
      // Check if all services are selected and update the select all checkbox accordingly
      const allServices = additionalServices?.services || [];
      const allSelected = allServices.every((service) =>
        updatedSelectedServices.includes(service.service_name)
      );
      setSelectAllChecked(allSelected);
    }
  };

  const [totalPricePay, setTotalPricePay] = useState(0);

  const handleCheckboxChangePricePay = (e) => {
    const isChecked = e.target.checked;
    const price = isChecked ? 850 : 0;
    setTotalPricePay(price);
  };

  useEffect(() => {
    const total = totalPrice + totalPricePay;
    setTotalPricePayshow(total);
  }, [
    handleCheckboxChangePricePay,
    handleCheckboxChange,
    totalPrice,
    totalPricePay,
  ]);

  return (
    <>
      <>
        <div className="main_div_table_additionalservices">
          <div className="container">
            <div className="main_div_tablestriped_additionalservices">
              <div className="d-flex flex-row">
                {" "}
                <p className="heading_table_striped_additionalservices">
                  Modules
                </p>
                {/* <p className="price_standardplan_additional">$850</p> */}
              </div>

              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">No.</th>
                    <th scope="col">Modules</th>
                    <th scope="col">Price</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {planmodules
                    ? planmodules?.map((data, index) => (
                        <tr key={index}>
                          <td></td>
                          <td>{data?.id}</td>
                          <td>{data?.name}</td>
                          <td>${data?.price}</td>
                          <td></td>
                          <td>
                            <label htmlFor={`plan_${index}`}></label>
                            <input
                              type="checkbox"
                              id={`plan_${index}`}
                              name="standardplanscharges"
                              value={data?.price}
                              className="styled-checkbox"
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e,
                                  data?.name,
                                  data?.price,
                                  data?.id
                                )
                              }
                              checked={
                                selectAllChecked ||
                                selectedServices.includes(data?.name)
                              }
                            />
                          </td>
                          <td></td>
                          <td></td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>

      <div className="main_div_table_astable">
        <div className="container">
          <div className="main_div_tablestriped_astable">
            <div className="d-flex justify-content-between">
              {" "}
              <p className="heading_table_striped_astable">
                Additional Services
              </p>
              <p className="price_standardplan_astable">Total: ${totalPrice}</p>
            </div>

            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">No.</th>
                  <th scope="col">Services</th>
                  <th scope="col">Price</th>
                  <th
                    scope="col"
                    // className="d-flex justify-content-end selectallstyle"
                  >
                    {/* Select all */}
                  </th>
                  <th scope="col">
                    {/* <label htmlFor="selectAll"></label>
                    <input
                      type="checkbox"
                      id="selectAll"
                      name="selectAll"
                      value="selectAll"
                      className="styled-checkbox"
                      onChange={(e) => handleCheckboxChange(e)}
                      checked={selectAllChecked}
                    /> */}
                  </th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {additionalServices
                  ? additionalServices?.services?.map((data, index) => (
                      <tr key={index}>
                        <td></td>
                        <td>{data?.id}</td>
                        <td>{data?.service_name}</td>
                        <td>${data?.price}</td>
                        <td></td>
                        <td>
                          <label htmlFor={`service_${index}`}></label>
                          <input
                            type="checkbox"
                            id={`service_${index}`}
                            name="standardservicescharges"
                            value={data?.price}
                            className="styled-checkbox"
                            onChange={(e) =>
                              handleCheckboxChange(
                                e,
                                data?.service_name,
                                data?.price,
                                data?.id
                              )
                            }
                            checked={
                              selectAllChecked ||
                              selectedServices.includes(data?.service_name)
                            }
                          />
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        </div>

        <div className="container">
          <div className="d-flex justify-content-end">
            <button
              className="totalpaystyle"
              onClick={() => handleClick(totalPricePayshow)}
            >
              <img
                src={creditpay}
                className="creditpaystyleicon"
                alt="paylogo"
              />
              Pay {totalPricePayshow}
            </button>
          </div>
        </div>

        <NotificationDisplay message={notificationMessage} />
      </div>
    </>
  );
}

export default AdditionalServicetable;
