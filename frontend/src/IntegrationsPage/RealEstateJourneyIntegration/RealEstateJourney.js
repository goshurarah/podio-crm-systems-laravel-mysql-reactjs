import React, { useState } from "react";
import "./../RealEstateJourneyIntegration/RealEstateJourneyStyle.css";
import lead_mgm from "./../../Assets/lead_mgm_icon.png";
import lead_mgmhover from "./../../Assets/lead_hover.png";
import customizable_workflow from "./../../Assets/customizable_workflow_icon.png";
import customizable_workflowhover from "./../../Assets/custmizationworkflow_hover.png";
import pipline_icon from "./../../Assets/pipline_mgm_icon.png";
import pipline_iconhover from "./../../Assets/pipeline_hover.png";
import taskandactivity from "./../../Assets/taskandactivity_icon.png";
import taskandactivityhover from "./../../Assets/taskactivity_hover.png";
import calender_icon from "./../../Assets/calender_int_icon.png";
import calender_iconhover from "./../../Assets/calender_hover.png";
import email_and_sms_icon from "./../../Assets/email_and_sms_icon.png";
import email_and_sms_iconhover from "./../../Assets/email_hover.png";
import analytic_icon from "./../../Assets/analytic_icon.png";
import analytic_iconhover from "./../../Assets/analytic_hover.png";
import integrations_capa_icon from "./../../Assets/integration_capabilities.png";
import integrations_capa_iconhover from "./../../Assets/inetgration_hover.png";
import mobile_acc_icon from "./../../Assets/mobile_acc.png";
import mobile_acc_iconhover from "./../../Assets/mobile_hover.png";
import permisssion_icon from "./../../Assets/permisssionaccess_icon.png";
import permisssion_iconhover from "./../../Assets/permisssion_hover.png";
import collaboration_icon from "./../../Assets/collaboration_tools.png";
import collaboration_iconhover from "./../../Assets/collaboration_hover.png";

function RealEstateJourney() {
  const [isHovered1, setIsHovered1] = useState(false);

  const handleHover1 = () => {
    setIsHovered1(!isHovered1);
  };

  const [isHovered2, setIsHovered2] = useState(false);

  const handleHover2 = () => {
    setIsHovered2(!isHovered2);
  };

  const [isHovered3, setIsHovered3] = useState(false);

  const handleHover3 = () => {
    setIsHovered3(!isHovered3);
  };

  const [isHovered4, setIsHovered4] = useState(false);

  const handleHover4 = () => {
    setIsHovered4(!isHovered4);
  };

  const [isHovered5, setIsHovered5] = useState(false);

  const handleHover5 = () => {
    setIsHovered5(!isHovered5);
  };

  const [isHovered6, setIsHovered6] = useState(false);

  const handleHover6 = () => {
    setIsHovered6(!isHovered6);
  };

  const [isHovered7, setIsHovered7] = useState(false);

  const handleHover7 = () => {
    setIsHovered7(!isHovered7);
  };

  const [isHovered8, setIsHovered8] = useState(false);

  const handleHover8 = () => {
    setIsHovered8(!isHovered8);
  };
  const [isHovered9, setIsHovered9] = useState(false);

  const handleHover9 = () => {
    setIsHovered9(!isHovered9);
  };

  const [isHovered10, setIsHovered10] = useState(false);

  const handleHover10 = () => {
    setIsHovered10(!isHovered10);
  };

  const [isHovered11, setIsHovered11] = useState(false);

  const handleHover11 = () => {
    setIsHovered11(!isHovered11);
  };

  return (
    <div className="main_div_realestatejourney">
      <div className="container">
        <p className="first_heading_white_rej">
          Your Real Estate Journey, Simplified
        </p>
        <div className="d-flex flex-row">
          <p className="first_heading_white_rej">and</p>
          <p className="first_heading_orange_rej">Elevated by Podio CRM</p>
        </div>

        <p className="para_below_heading_rej">
          We follow a methodical process designed to help overwhelmed businesses
          find their footing, streamline operations, and thrive. Here's how we
          guide you toward a more efficient and prosperous future:
        </p>
        <div className="main_div_card_rej">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 p-0 m-0">
              <div
                className="main_div_card_rej_inside"
                onMouseEnter={handleHover1}
                onMouseLeave={handleHover1}
              >
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-4">
                    <p className="bold_number_in_card_rej">01</p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <div className="card_align_image_rej">
                      <img
                        src={isHovered1 ? lead_mgmhover : lead_mgm}
                        alt="realestatelogo"
                        className={`image_in_card ${
                          isHovered1 ? "hovered" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4"></div>
                </div>
                <div className="card_align_image_rej">
                  <p className="heading_card_inside_rej">Lead Management</p>
                  <div className="hr_tag_in_card_rej"></div>
                </div>

                <div className="para_main_in_card_rej">
                  <p className="para_in_card_rej">
                    Capture, store, and organize leads in one centralized
                    location. Track lead sources, contact information, and lead
                    status to effectively manage your real estate prospects.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 p-0 m-0">
              <div
                className="main_div_card_rej_inside"
                onMouseEnter={handleHover2}
                onMouseLeave={handleHover2}
              >
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-4">
                    <p className="bold_number_in_card_rej">02</p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <div className="card_align_image_rej">
                      <img
                        src={
                          isHovered2
                            ? customizable_workflowhover
                            : customizable_workflow
                        }
                        alt="realestatelogo"
                        className={`image_in_card ${
                          isHovered2 ? "hovered" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4"></div>
                </div>
                <div className="card_align_image_rej">
                  <p className="heading_card_inside_rej">
                    Customizable Workflows
                  </p>
                  <div className="hr_tag_in_card_rej"></div>
                </div>

                <div className="para_main_in_card_rej">
                  <p className="para_in_card_rej">
                     Create custom workflows to automate repetitive tasks, such
                    as lead follow-ups, appointment scheduling, and document
                    management. Streamline processes to save time and boost
                    efficiency.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 p-0 m-0">
              <div
                className="main_div_card_rej_inside"
                onMouseEnter={handleHover3}
                onMouseLeave={handleHover3}
              >
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-4">
                    <p className="bold_number_in_card_rej">03</p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <div className="card_align_image_rej">
                      <img
                        src={isHovered3 ? pipline_iconhover : pipline_icon}
                        alt="realestatelogo"
                        className={`image_in_card ${
                          isHovered3 ? "hovered" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4"></div>
                </div>
                <div className="card_align_image_rej">
                  <p className="heading_card_inside_rej">Pipeline Management</p>
                  <div className="hr_tag_in_card_rej"></div>
                </div>

                <div className="para_main_in_card_rej">
                  <p className="para_in_card_rej">
                    Visualize your real estate deals with customizable
                    pipelines. Track the progress of each deal from lead to
                    closing, ensuring nothing falls through the cracks.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 p-0 m-0">
              <div
                className="main_div_card_rej_inside"
                onMouseEnter={handleHover4}
                onMouseLeave={handleHover4}
              >
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-4">
                    <p className="bold_number_in_card_rej">04</p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <div className="card_align_image_rej">
                      <img
                        src={
                          isHovered4 ? taskandactivityhover : taskandactivity
                        }
                        alt="realestatelogo"
                        className={`image_in_card ${
                          isHovered4 ? "hovered" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4"></div>
                </div>
                <div className="card_align_image_rej">
                  <p className="heading_card_inside_rej">
                    Task and Activity Tracking
                  </p>
                  <div className="hr_tag_in_card_rej"></div>
                </div>

                <div className="para_main_in_card_rej">
                  <p className="para_in_card_rej">
                    Assign tasks to team members, set reminders, and monitor
                    deadlines related to property showings, inspections, and
                    negotiations. Stay organized and on top of critical
                    activities.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 p-0 m-0">
              <div
                className="main_div_card_rej_inside"
                onMouseEnter={handleHover5}
                onMouseLeave={handleHover5}
              >
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-4">
                    <p className="bold_number_in_card_rej">05</p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <div className="card_align_image_rej">
                      <img
                        src={isHovered5 ? calender_iconhover : calender_icon}
                        alt="realestatelogo"
                        className={`image_in_card ${
                          isHovered5 ? "hovered" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4"></div>
                </div>
                <div className="card_align_image_rej">
                  <p className="heading_card_inside_rej">
                    Calendar Integration
                  </p>
                  <div className="hr_tag_in_card_rej"></div>
                </div>

                <div className="para_main_in_card_rej">
                  <p className="para_in_card_rej">
                    Sync your Podio CRM with your calendar to manage
                    appointments, property viewings, and meetings seamlessly.
                    Ensure your schedule is always up-to-date.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 p-0 m-0">
              <div
                className="main_div_card_rej_inside"
                onMouseEnter={handleHover6}
                onMouseLeave={handleHover6}
              >
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-4">
                    <p className="bold_number_in_card_rej">06</p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <div className="card_align_image_rej">
                      <img
                        src={
                          isHovered6
                            ? email_and_sms_iconhover
                            : email_and_sms_icon
                        }
                        alt="realestatelogo"
                        className={`image_in_card ${
                          isHovered6 ? "hovered" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4"></div>
                </div>
                <div className="card_align_image_rej">
                  <p className="heading_card_inside_rej">
                    Email & SMS Communication
                  </p>
                  <div className="hr_tag_in_card_rej"></div>
                </div>

                <div className="para_main_in_card_rej">
                  <p className="para_in_card_rej">
                    Keep track of email and text correspondence with clients and
                    associates while maintaining a comprehensive communication
                    history.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 p-0 m-0">
              <div
                className="main_div_card_rej_inside"
                onMouseEnter={handleHover7}
                onMouseLeave={handleHover7}
              >
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-4">
                    <p className="bold_number_in_card_rej">07</p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <div className="card_align_image_rej">
                      <img
                        src={isHovered7 ? analytic_iconhover : analytic_icon}
                        alt="realestatelogo"
                        className={`image_in_card ${
                          isHovered7 ? "hovered" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4"></div>
                </div>
                <div className="card_align_image_rej">
                  <p className="heading_card_inside_rej">
                    Analytics and Reporting
                  </p>
                  <div className="hr_tag_in_card_rej"></div>
                </div>

                <div className="para_main_in_card_rej">
                  <p className="para_in_card_rej">
                    Generate custom reports and analytics to gain insights into
                    your real estate performance. Identify trends, measure
                    conversion rates, and make data-driven decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 p-0 m-0">
              <div
                className="main_div_card_rej_inside"
                onMouseEnter={handleHover8}
                onMouseLeave={handleHover8}
              >
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-4">
                    <p className="bold_number_in_card_rej">08</p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <div className="card_align_image_rej">
                      <img
                        src={
                          isHovered8
                            ? integrations_capa_iconhover
                            : integrations_capa_icon
                        }
                        alt="realestatelogo"
                        className={`image_in_card ${
                          isHovered8 ? "hovered" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4"></div>
                </div>
                <div className="card_align_image_rej">
                  <p className="heading_card_inside_rej">
                    Integration Capabilities
                  </p>
                  <div className="hr_tag_in_card_rej"></div>
                </div>

                <div className="para_main_in_card_rej">
                  <p className="para_in_card_rej">
                    Integrate Podio with other real estate-specific tools, such
                    as property listing platforms, marketing automation
                    software, and financial systems, to create a unified
                    ecosystem.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 p-0 m-0">
              <div
                className="main_div_card_rej_inside"
                onMouseEnter={handleHover9}
                onMouseLeave={handleHover9}
              >
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-4">
                    <p className="bold_number_in_card_rej">09</p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <div className="card_align_image_rej">
                      <img
                        src={
                          isHovered9 ? mobile_acc_iconhover : mobile_acc_icon
                        }
                        alt="realestatelogo"
                        className={`image_in_card ${
                          isHovered9 ? "hovered" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4"></div>
                </div>
                <div className="card_align_image_rej">
                  <p className="heading_card_inside_rej">
                    Mobile Accessibility
                  </p>
                  <div className="hr_tag_in_card_rej"></div>
                </div>

                <div className="para_main_in_card_rej">
                  <p className="para_in_card_rej">
                    Access your real estate CRM on the go using the Podio mobile
                    app. Stay connected with clients and prospects, update
                    information, and manage tasks from your mobile device.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 p-0 m-0">
              <div
                className="main_div_card_rej_inside"
                onMouseEnter={handleHover10}
                onMouseLeave={handleHover10}
              >
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-4">
                    <p className="bold_number_in_card_rej">10</p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <div className="card_align_image_rej">
                      <img
                        src={
                          isHovered10 ? permisssion_iconhover : permisssion_icon
                        }
                        alt="realestatelogo"
                        className={`image_in_card ${
                          isHovered10 ? "hovered" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4"></div>
                </div>
                <div className="card_align_image_rej">
                  <p className="heading_card_inside_rej">
                    Permissions and Access Control
                  </p>
                  <div className="hr_tag_in_card_rej"></div>
                </div>

                <div className="para_main_in_card_rej">
                  <p className="para_in_card_rej">
                    Ensure data security and privacy by defining roles and
                    permissions for team members. Control who can access and
                    edit specific client and property information.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 p-0 m-0">
              <div
                className="main_div_card_rej_inside"
                onMouseEnter={handleHover11}
                onMouseLeave={handleHover11}
              >
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-4">
                    <p className="bold_number_in_card_rej">11</p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <div className="card_align_image_rej">
                      <img
                        src={
                          isHovered11
                            ? collaboration_iconhover
                            : collaboration_icon
                        }
                        alt="realestatelogo"
                        className={`image_in_card ${
                          isHovered11 ? "hovered" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4"></div>
                </div>
                <div className="card_align_image_rej">
                  <p className="heading_card_inside_rej">Collaboration Tools</p>
                  <div className="hr_tag_in_card_rej"></div>
                </div>

                <div className="para_main_in_card_rej">
                  <p className="para_in_card_rej">
                    Collaborate with team members, real estate agents, and
                    clients through discussions, chat, and commenting features
                    within Podio. Foster effective communication and teamwork.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealEstateJourney;
