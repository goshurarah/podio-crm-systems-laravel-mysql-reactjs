import React, { useState } from "react";
import "./../GlobalStakeholder/GlobalStakeholderStyle.css";
import list_gs from "./../../Assets/list_ite_gs.png";

function GlobalStakeholder() {
  const [content, setContent] = useState(
    "At PodioCRMSystems, we are dedicated to empowering real estate businesses to thrive in an ever-evolving market. With a strong focus on customer relationship management (CRM) and streamlined operations through Podio, we have been the trusted partner for countless real estate professionals looking to elevate their business to the next level."
  );
  const [activeItem, setActiveItem] = useState("about");

  const handleItemClick = (item) => {
    // Set content based on the clicked item
    switch (item) {
      case "about":
        setActiveItem("about");
        setContent(
          "At PodioCRMSystems, we are dedicated to empowering real estate businesses to thrive in an ever-evolving market. With a strong focus on customer relationship management (CRM) and streamlined operations through Podio, we have been the trusted partner for countless real estate professionals looking to elevate their business to the next level."
        );
        break;
      case "mission":
        setActiveItem("mission");
        setContent(
          "Our mission is to empower businesses with the tools and knowledge they need to thrive in the digital age. We are dedicated to providing top-tier services that streamline operations, automate processes, and drive efficiency. Our goal is to help overwhelmed businesses regain control, achieve their full potential, and put their best foot forward in an ever-evolving world"
        );
        break;
      case "vision":
        setActiveItem("vision");
        setContent(
          "Our vision is to be the trusted partner that businesses turn to when seeking solutions for automation, workflow optimization, and software excellence. We aspire to set the industry standard for personalized and effective consulting services. By offering tailored solutions that adapt and grow with our clients, we aim to contribute to their sustained success and growth, making businesses more agile, efficient, and resilient in the face of challenges."
        );
        break;
      default:
        setContent("");
    }
  };

  return (
    <div className="main_div_globalstakeholder">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="d-flex flex-row">
              <div className="orange_line_gs"></div>
              <p className="blue_heading_whoare">WHO WE</p>
              <p className="orange_heading_whoare"> ARE?</p>
            </div>
            <div className="main_div_heading_gs">
              <p className="black_heading_gs">We Are Global Stakeholder</p>
              <div className="d-flex flex-row">
                <p className="black_heading_gs">Over 2000+</p>
                <p className="orange_heading_gs">Companies</p>
              </div>
            </div>

            <p className="para_below_heading_gs">
              Appropriately enhance principle-centered innovation rather than
              high standards in platforms. Credibly orchestrate functional.
            </p>

            <div className="main_div_heading_gs">
              <div className="row">
                <div className="col-lg-1 col-md-1 col-1 ">
                  <img src={list_gs} alt="process" />
                </div>
                <div className="col-lg-11 col-md-11 col-11">
                  <p className="para_list_gs">Communicate orthogonal process</p>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-1 col-md-1 col-1 ">
                  <img src={list_gs} alt="process" />
                </div>
                <div className="col-lg-11 col-md-11 col-11">
                  <p className="para_list_gs">
                    Professionally grow cutting-edge paradigms
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-1 col-md-1 col-1 ">
                  <img src={list_gs} alt="process" />
                </div>
                <div className="col-lg-11 col-md-11 col-11">
                  <p className="para_list_gs">
                    Professionally grow cutting-edge paradigms
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="main_div_aboutus_mission_vision">
              <div className="d-flex flex-row">
                <div
                  className={`${
                    activeItem === "about"
                      ? "orange_div_active"
                      : "blue_div_active"
                  }`}
                  onClick={() => handleItemClick("about")}
                >
                  About Us
                </div>
                <div
                  className={`${
                    activeItem === "mission"
                      ? "orange_div_active"
                      : "blue_div_active"
                  }`}
                  onClick={() => handleItemClick("mission")}
                >
                  Mission
                </div>
                <div
                  className={`${
                    activeItem === "vision"
                      ? "orange_div_active"
                      : "blue_div_active"
                  }`}
                  onClick={() => handleItemClick("vision")}
                >
                  Vision
                </div>
              </div>
            </div>

            <div className="show_content">{content && <p>{content}</p>}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlobalStakeholder;
