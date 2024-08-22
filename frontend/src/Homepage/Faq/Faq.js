import React, { useEffect, useState } from "react";
import "./../Faq/FaqStyle.css";
import listicon from "./../../Assets/faq_list_item.png";
import faq_more_about_icon from "./../../Assets/faq_more_about_icon.png";
// import accordian_icon_faq from "./../../Assets/accordian_icon_faq.png";
import axios from "axios";
import qa from "./../../Assets/qaicon.png";

function Faq() {
  const [faqs, setFaqs] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    getFaqsData();
  }, []);

  const getFaqsData = () => {
    axios
      .get(`/api/faqs`, {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      })
      .then((res) => {
        setFaqs(res.data);
      })
      .catch((error) => {
        console.error("Error fetching FAQs data:", error);
        setError("Error fetching FAQs data");
      });
  };
  return (
    <div className="main_div_faq">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="d-flex flex-row">
              <div className="orange_line_faq"></div>
              <p className="para_process">process</p>
            </div>

            <div className="d-flex flex-row">
              <p className="white_bold_heading_faq">Frequently Asked </p>
              <p className="orange_bold_heading_faq">Question</p>
            </div>
            <p className="para_infaq">
              Appropriately enhance principle-centered innovation rather than
              high standards in platforms. Credibly orchestrate functional.
            </p>
            <div className="row">
              <div className="col-lg-1 col-md-1 col-1">
                <img src={listicon} alt="processlogo" />
              </div>
              <div className="col-lg-10 col-md-10 col-10">
                <p className="para_in_list_faq">
                  Communicate orthogonal process
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-1 col-md-1 col-1">
                <img src={listicon} alt="processlogo" />
              </div>
              <div className="col-lg-10 col-md-10 col-10">
                <p className="para_in_list_faq">
                  Professionally grow cutting-edge paradigms
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-1 col-md-1 col-1">
                <img src={listicon} alt="processlogo" />
              </div>
              <div className="col-lg-10 col-md-10 col-10">
                <p className="para_in_list_faq">
                  Communicate orthogonal process
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-1 col-md-1 col-1">
                <img src={listicon} alt="processlogo" />
              </div>
              <div className="col-lg-10 col-md-10 col-10">
                <p className="para_in_list_faq">
                  Professionally grow cutting-edge paradigms
                </p>
              </div>
            </div>

            <button className="more_about_faq_btn">
              <img src={faq_more_about_icon} alt="processlogo" /> More About
            </button>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div
              className="accordion main_div_accordion_faq"
              id="accordionExample"
            >
              <div id="accordionExample">
                {faqs
                  ? faqs?.map((data, index) => {
                      const accordionId = `accordion-${index}`;
                      const collapseId = `collapse-${index}`;

                      return (
                        <div className="accordion-item" key={index}>
                          <h2
                            className="accordion-header"
                            id={`heading-${index}`}
                          >
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#${collapseId}`}
                              aria-expanded="true"
                              aria-controls={accordionId}
                            >
                              <img
                                src={qa}
                                className="accordion_icon_style"
                                alt="processlogo"
                              />
                              {data?.question}
                            </button>
                          </h2>
                          <div
                            id={collapseId}
                            className={`accordion-collapse collapse ${
                              index === 0 ? "show" : ""
                            }`}
                            aria-labelledby={`heading-${index}`}
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">{data?.answer}</div>
                          </div>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
