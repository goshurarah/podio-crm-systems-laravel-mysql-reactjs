import React, { useState } from "react";
import "./../ProcessAboutus/ProcessStyle.css";
import comprihensiveicon from "./../../Assets/com_pr.png";
import comprihensiveiconhover from "./../../Assets/compre_hover.png";
import collpr from "./../../Assets/coll_pr.png";
import collprhover from "./../../Assets/coll_hover.png";
import intpr from "./../../Assets/int_pr.png";
import intprhover from "./../../Assets/int_hover.png";
import adappr from "./../../Assets/adap_pr.png";
import adapprhover from "./../../Assets/adap_hover.png";
import asolution from "./../../Assets/asolution.png";
import asolutiohover from "./../../Assets/asolution_hover.png";
import seamlesstaskicon from "./../../Assets/seamlesstask.png";
import seamlesstaskiconhover from "./../../Assets/seamless_hover (2).png";
import customizationicon from "./../../Assets/customization.png";
import customizationiconhover from "./../../Assets/cust_hover.png";
import effective from "./../../Assets/effective.png";
import effectivehover from "./../../Assets/effective_hover.png";
import custombuilticon from "./../../Assets/custombuilt.png";
import custombuilticonhover from "./../../Assets/custom_hover.png";

function Process() {
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

  return (
    <div className="main_div_realestatejourney">
      <div className="container">
        <p className="first_heading_white_process">Our Process: Simplifying</p>
        <p className="first_heading_orange_process">Success</p>

        <p className="para_below_heading_process">
          We follow a methodical process designed to help overwhelmed businesses
          find their footing, streamline operations, and thrive. Here's how we
          guide you toward a more efficient and prosperous future:
        </p>
        <div className="main_div_card_process">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 m-0 p-0">
              <div
                className="main_div_card_process_inside"
                onMouseEnter={handleHover1}
                onMouseLeave={handleHover1}
              >
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-4">
                    <p className="bold_number_in_card_process">01</p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <div className="card_align_image_process">
                      <img
                        src={
                          isHovered1
                            ? comprihensiveiconhover
                            : comprihensiveicon
                        }
                        alt="process"
                        className={`image_in_card ${
                          isHovered1 ? "hovered" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4 m-0 p-0"></div>
                </div>
                <div className="card_align_image_process">
                  <p className="heading_card_inside_process">
                    Comprehensive Analysis
                  </p>
                  <div className="hr_tag_in_card_process"></div>
                </div>

                <div className="para_main_in_card_process">
                  <p className="para_in_card_process">
                    We begin by diving deep into your business, dissecting your
                    current processes to uncover opportunities for automation
                    and time-saving. This phase ensures that no inefficiency
                    goes unnoticed.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 m-0 p-0">
              <div
                className="main_div_card_process_inside"
                onMouseEnter={handleHover2}
                onMouseLeave={handleHover2}
              >
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-4">
                    <p className="bold_number_in_card_process">02</p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <div className="card_align_image_process">
                      <img
                        src={isHovered2 ? collprhover : collpr}
                        alt="process"
                        className={`image_in_card ${
                          isHovered2 ? "hovered" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4"></div>
                </div>
                <div className="card_align_image_process">
                  <p className="heading_card_inside_process">
                    Collaborative Discovery
                  </p>
                  <div className="hr_tag_in_card_process"></div>
                </div>

                <div className="para_main_in_card_process">
                  <p className="para_in_card_process">
                    Our software engineering team collaborates closely with you.
                    We take the time to explain our findings and listen to your
                    insights on what might be missing or could be improved.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 m-0 p-0">
              <div
                className="main_div_card_process_inside"
                onMouseEnter={handleHover3}
                onMouseLeave={handleHover3}
              >
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-4">
                    <p className="bold_number_in_card_process">03</p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <div className="card_align_image_process">
                      <img
                        src={
                          isHovered3 ? custombuilticonhover : custombuilticon
                        }
                        alt="process"
                        className={`image_in_card ${
                          isHovered3 ? "hovered" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4"></div>
                </div>
                <div className="card_align_image_process">
                  <p className="heading_card_inside_process">
                     Custom-Built Solutions
                  </p>
                  <div className="hr_tag_in_card_process"></div>
                </div>

                <div className="para_main_in_card_process">
                  <p className="para_in_card_process">
                    Armed with a deep understanding of your business, we embark
                    on a journey to design and develop business software
                    solutions tailored precisely to your needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 m-0 p-0">
              <div
                className="main_div_card_process_inside"
                onMouseEnter={handleHover4}
                onMouseLeave={handleHover4}
              >
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-4">
                    <p className="bold_number_in_card_process">04</p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <div className="card_align_image_process">
                      <img
                        src={isHovered4 ? asolutiohover : asolution}
                        alt="process"
                        className={`image_in_card ${
                          isHovered4 ? "hovered" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4"></div>
                </div>
                <div className="card_align_image_process">
                  <p className="heading_card_inside_process">
                     A Solution Crafted for You
                  </p>
                  <div className="hr_tag_in_card_process"></div>
                </div>

                <div className="para_main_in_card_process">
                  <p className="para_in_card_process">
                    What sets us apart is our commitment to crafting solutions
                    that work specifically for your unique business and its
                    needs. we create a blueprint designed to reflect your
                    identity.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 m-0 p-0">
              <div
                className="main_div_card_process_inside"
                onMouseEnter={handleHover5}
                onMouseLeave={handleHover5}
              >
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-4">
                    <p className="bold_number_in_card_process">05</p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <div className="card_align_image_process">
                      <img
                        src={
                          isHovered5 ? seamlesstaskiconhover : seamlesstaskicon
                        }
                        alt="process"
                        className={`image_in_card ${
                          isHovered5 ? "hovered" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4"></div>
                </div>
                <div className="card_align_image_process">
                  <p className="heading_card_inside_process">
                    Seamless Task Management
                  </p>
                  <div className="hr_tag_in_card_process"></div>
                </div>

                <div className="para_main_in_card_process">
                  <p className="para_in_card_process">
                    Our solutions empower you to automate, assign, shift,
                    remove, or add tasks with ease. You'll run advanced
                    algorithms to cleanse, filter, and visualize data, offering
                    real-time insights into trends and challenges.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 m-0 p-0">
              <div
                className="main_div_card_process_inside"
                onMouseEnter={handleHover6}
                onMouseLeave={handleHover6}
              >
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-4">
                    <p className="bold_number_in_card_process">06</p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <div className="card_align_image_process">
                      <img
                        src={isHovered6 ? intprhover : intpr}
                        alt="process"
                        className={`image_in_card ${
                          isHovered6 ? "hovered" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4"></div>
                </div>
                <div className="card_align_image_process">
                  <p className="heading_card_inside_process">
                    Integration with Your Favorites
                  </p>
                  <div className="hr_tag_in_card_process"></div>
                </div>

                <div className="para_main_in_card_process">
                  <p className="para_in_card_process">
                    Our systems seamlessly integrate with your preferred
                    finance, human resource, sales, and marketing software. It's
                    all about making your workflow as smooth and cohesive as
                    possible. .
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 m-0 p-0">
              <div
                className="main_div_card_process_inside"
                onMouseEnter={handleHover7}
                onMouseLeave={handleHover7}
              >
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-4">
                    <p className="bold_number_in_card_process">07</p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <div className="card_align_image_process">
                      <img
                        src={isHovered7 ? adapprhover : adappr}
                        alt="process"
                        className={`image_in_card ${
                          isHovered7 ? "hovered" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4"></div>
                </div>
                <div className="card_align_image_process">
                  <p className="heading_card_inside_process">
                    Adapting for Growth
                  </p>
                  <div className="hr_tag_in_card_process"></div>
                </div>

                <div className="para_main_in_card_process">
                  <p className="para_in_card_process">
                    From implementation onward and through every stage of your
                    business's growth, our software remains flexible and
                    scalable, adapting to your changing needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 m-0 p-0">
              <div
                className="main_div_card_process_inside"
                onMouseEnter={handleHover8}
                onMouseLeave={handleHover8}
              >
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-4">
                    <p className="bold_number_in_card_process">08</p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <div className="card_align_image_process">
                      <img
                        src={
                          isHovered8
                            ? customizationiconhover
                            : customizationicon
                        }
                        alt="process"
                        className={`image_in_card ${
                          isHovered8 ? "hovered" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4"></div>
                </div>
                <div className="card_align_image_process">
                  <p className="heading_card_inside_process">
                    Customization and Personalization
                  </p>
                  <div className="hr_tag_in_card_process"></div>
                </div>

                <div className="para_main_in_card_process">
                  <p className="para_in_card_process">
                    We believe in the power of customization and
                    personalization. Our software engineering team excels at
                    building systems that boost your overall efficiency,
                    productivity, and effectiveness.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 m-0 p-0 displaynonecard">
              <div
                className="main_div_card_process_inside"
                onMouseEnter={handleHover9}
                onMouseLeave={handleHover9}
              >
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-4">
                    <p className="bold_number_in_card_process">09</p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <div className="card_align_image_process">
                      <img
                        src={isHovered9 ? effectivehover : effective}
                        alt="process"
                        className={`image_in_card ${
                          isHovered9 ? "hovered" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4"></div>
                </div>
                <div className="card_align_image_process">
                  <p className="heading_card_inside_process">
                    Effective Problem Solving
                  </p>
                  <div className="hr_tag_in_card_process"></div>
                </div>

                <div className="para_main_in_card_process">
                  <p className="para_in_card_process">
                    Whether it's streamlining business processes, automating
                    workflows, organizing sales leads, or reducing data entry
                    errors, we at Defined Ventures excel in providing effective
                    business problem-solving solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="flexcentercard">
              <div className="col-lg-3 col-md-4 col-sm-6 m-0 p-0">
                <div
                  className="main_div_card_process_inside"
                  onMouseEnter={handleHover9}
                  onMouseLeave={handleHover9}
                >
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-4">
                      <p className="bold_number_in_card_process">09</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">
                      <div className="card_align_image_process">
                        <img
                          src={isHovered9 ? effectivehover : effective}
                          alt="process"
                          className={`image_in_card ${
                            isHovered9 ? "hovered" : ""
                          }`}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4"></div>
                  </div>
                  <div className="card_align_image_process">
                    <p className="heading_card_inside_process">
                      Effective Problem Solving
                    </p>
                    <div className="hr_tag_in_card_process"></div>
                  </div>

                  <div className="para_main_in_card_process">
                    <p className="para_in_card_process">
                      Whether it's streamlining business processes, automating
                      workflows, organizing sales leads, or reducing data entry
                      errors, we at Defined Ventures excel in providing
                      effective business problem-solving solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
