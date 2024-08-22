import React, { useEffect, useState } from "react";
import "./../AutomatedrunningNumbers/AutomatedRunningStyle.css";
import plus_sign from "./../../Assets/plus_sign.png";
import axios from "axios";
function AutomatedRunning() {
  const [acheivements, setacheivements] = useState([]);

  useEffect(() => {
    getacheivementsData();
  }, []);

  const getacheivementsData = () => {
    axios
      .get(`/api/achievements`, {
        headers: {
          'ngrok-skip-browser-warning': 'true',
        }
      })
      .then((res) => {
        setacheivements(res.data); // Make sure to set the state with res.data
      })
      .catch((error) => {
        console.error("Error fetching acheivements data:", error);
      });
  };
  return (
    <div className="main_div_automated_running ">
      <div className="container">
        <div className="row">
          {acheivements ? acheivements?.map((acheivement, index) => {
            return (
        
                <div className="col-lg-3 col-md-6 col-12" key={index}>
                  <div className="main_div_automated_para_wrap">
                    <div className="d-flex flex-row">
                      <p className="bold_number_para_automated">
                        {acheivement?.count}
                      </p>
                      {acheivement?.description ==
                      "Automation Running" ? null : (
                        <img
                          className="plus_sign_style"
                          src={plus_sign}
                          alt="plus_sign"
                        />
                      )}
                    </div>
                    <p className="automated_running_para">
                      {acheivement?.description}
                    </p>
                  </div>
                </div>
           
            );
          }) : null}
        </div>
      </div>
    </div>
  );
}

export default AutomatedRunning;
