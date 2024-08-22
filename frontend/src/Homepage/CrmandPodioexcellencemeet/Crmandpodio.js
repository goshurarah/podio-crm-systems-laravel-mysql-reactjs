import React, { useEffect, useState } from 'react';
import "./../CrmandPodioexcellencemeet/CrmpodioStyle.css";
import discovericon from "./../../Assets/discover_icon.png";
import Navbar from "../Navbar/Navbar";

function Crmandpodio() {
  const [visibleText, setVisibleText] = useState(
    "Picture this: A real estate business that practically runs\n  itself, leaving you with more time, money, and peace of mind.\n  Sound too good to be true? It's not."
  );

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setVisibleText((prevText) => prevText.substring(0, index));
      index++;
      if (index > visibleText.length) clearInterval(intervalId);
    }, 100); // Adjust speed here (lower is faster)
    return () => clearInterval(intervalId);
  }, []);






 

  return (
    <div className="top_upper_div_podiio_crm">
      <div className="main_div_crm_podio">
        <Navbar />
        <div className="container">
          <div className="main_heading_div_podio">
            <p className="heading_real_estate">
              Elevating Real Estate Success: Where CRM and Podio
            </p>

            <div className="row">
              <div className="col-lg-8 col-md-5 col-5">
                <p className="excellence_para">Excellence</p>
              </div>
              <div className="col-lg-4 col-md-4 col-6 p-0 m-0">
                <p className="Meet_para">Meet</p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-1 col-md-1 col-2">
                <div className="hr_line_orange" />
              </div>
              <div className="col-lg-11 col-md-11 col-10">
                <p className="hr_line_para typing-text">
                  {" "}
                  Picture this: A real estate business that practically runs
                  itself, leaving you with more time, money, and peace of mind.
                  Sound too good to be true? It's not.
                </p>

                <p className="hr_line_para ">
                  If you're in the real estate game without a smart,
                  cost-effective system for following up and closing deals,
                  you're throwing money away.
                </p>
              </div>
            </div>

            <button className="button_discover">
              <img src={discovericon} alt="discoverlogo" /> Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crmandpodio;
