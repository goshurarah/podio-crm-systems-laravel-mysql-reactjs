import React, { useRef, useState } from "react";
import axios from "axios";
import "./../HirePerHour/HirePerHour.css";
import arrow from "./../../Assets/arrowperhour.svg";
import Loader from "../../Loader/Loader";
import NotificationDisplay from "../../NotficationDisplay/NotificationDisplay";

function HirePerHour() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const isModalperhour = useRef(null);
  const [loading, setLoading] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("/api/hire-per-hour", {
        name: name,
        email: email,
        phone: contactNumber,
      })
      .then((response) => {
        setLoading(false);
        isModalperhour.current.click();
        setModalVisible(false);
        setContactNumber("");
        setEmail("");
        setName("");
        setNotificationMessage("Form submitted successfully");
        setTimeout(() => {
          setNotificationMessage("");
        }, 4000);
        console.log("Form submitted successfully:", response.data);
      })
      .catch((error) => {
        setLoading(false);
        isModalperhour.current.click();
        console.error("Error submitting form:", error);
        setModalVisible(false);
        setNotificationMessage("Error");
        setTimeout(() => {
          setNotificationMessage("");
        }, 4000);
      });
  };

  return (
    <div className="main_div_hire_per_hour">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row">
            <p className="heading_orange_perhour">HIRE</p>
            <p className="heading_white_perhour">NOW</p>
            <img className="arrow_btw_perhour" src={arrow} alt="Arrow" />
            <p className="heading_orange_perhour">$25 </p>
            <p className="heading_white_perhour_small">per hour</p>
          </div>

          <button
            className="click_here_btn_perhour"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            onClick={() => setModalVisible(true)}
          >
            Click Here
          </button>
        </div>
      </div>

      {modalVisible && (
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <form onSubmit={handleSubmit}>
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    Hire now $25 per hour
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setModalVisible(false)}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <input
                    className="input_name_perhour_form"
                    placeholder="Name"
                    value={name}
                    required
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    className="input_name_perhour_form"
                    placeholder="Email"
                    value={email}
                    required
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="input_name_perhour_form"
                    placeholder="Contact Number"
                    value={contactNumber}
                    required
                    type="text"
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn_close_form_perhour"
                    data-dismiss="modal"
                    onClick={() => setModalVisible(false)}
                    ref={isModalperhour}
                  >
                    Close
                  </button>
                  <button type="submit" className="btn_submit_form_perhour">
                    {loading ? <Loader /> : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <>
        <NotificationDisplay message={notificationMessage} />
      </>
    </div>
  );
}

export default HirePerHour;
