import React, { useState } from "react";
import "./../WhyUs/WhyUsStyle.css";
import tailorsolution from "./../../Assets/tailoer_Solution.png";
import tailorhover from "./../../Assets/tailer_hover.png";
import userfriendly from "./../../Assets/user_friendly.png";
import userfriendlyhover from "./../../Assets/userfriendly_hover.png";
import dedicated from "./../../Assets/dedicated.png";
import dedicated_hover from "./../../Assets/dedicated_hover.png";
import seamlessintegration from "./../../Assets/seamless.png";
import seamlessintegrationhover from "./../../Assets/seamless_hover.png";
import proventrack from "./../../Assets/proven_track.png";
import proventrackhover from "./../../Assets/proventrack_hover.png";
import affordableprice from "./../../Assets/affordableprice.png";
import affordablepricehover from "./../../Assets/affordable_hover.png";
import industryinsight from "./../../Assets/industry_insight.png";
import industryinsighthover from "./../../Assets/industry_hover.png";
import transparency from "./../../Assets/transparency.png";
import transparencyhover from "./../../Assets/transparency_hover.png";

function WhyUs() {
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

  return (
    <div className="container">
      <div className="d-flex flex-row">
        <p className="black_heading_why">Why</p>
        <p className="orange_heading_why">US?</p>
      </div>

      <div className="main_div_card">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 m-0 p-0">
            <div
              className="main_div_card_why_us"
              onMouseEnter={handleHover1}
              onMouseLeave={handleHover1}
            >
              <div className="row">
                <div className="col-lg-4 col-md-4 col-4">
                  <p className="bold_number_in_card">01</p>
                </div>
                <div className="col-lg-4 col-md-4 col-4">
                  <div className="card_align_image">
                    <img
                      src={isHovered1 ? tailorhover : tailorsolution}
                      alt="whyuslogo"
                      className={`image_in_card ${isHovered1 ? "hovered" : ""}`}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-4"></div>
              </div>

              <div className="card_align_image">
                <p className="heading_card_inside">Tailored Solutions</p>
                <div className="hr_tag_in_card"></div>
              </div>

              <div className="para_main_in_card">
                <p className="para_in_card">
                  We don't believe in one-size-fits-all. Our solutions are
                  meticulously customized to match the specific needs and goals
                  of your real estate business, ensuring a perfect fit.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 m-0 p-0">
            <div
              className="main_div_card_why_us"
              onMouseEnter={handleHover2}
              onMouseLeave={handleHover2}
            >
              <div className="row">
                <div className="col-lg-4 col-md-4 col-4">
                  <p className="bold_number_in_card">02</p>
                </div>
                <div className="col-lg-4 col-md-4 col-4">
                  <div className="card_align_image">
                    <img
                      src={isHovered2 ? userfriendlyhover : userfriendly}
                      alt="whyuslogo"
                      className={`image_in_card ${isHovered2 ? "hovered" : ""}`}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-4"></div>
              </div>

              <div className="card_align_image">
                <p className="heading_card_inside">User-Friendly Interfaces</p>
                <div className="hr_tag_in_card"></div>
              </div>

              <div className="para_main_in_card">
                <p className="para_in_card">
                  Our CRM and Podio systems are designed with user-friendliness
                  in mind. You'll find our interfaces intuitive, making adoption
                  and daily use a breeze for your team.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 m-0 p-0">
            <div
              className="main_div_card_why_us"
              onMouseEnter={handleHover3}
              onMouseLeave={handleHover3}
            >
              <div className="row">
                <div className="col-lg-4 col-md-4 col-4">
                  <p className="bold_number_in_card">03</p>
                </div>
                <div className="col-lg-4 col-md-4 col-4">
                  <div className="card_align_image">
                    <img
                      src={isHovered3 ? dedicated_hover : dedicated}
                      className={`image_in_card ${isHovered3 ? "hovered" : ""}`}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-4"></div>
              </div>

              <div className="card_align_image">
                <p className="heading_card_inside">Dedicated Support</p>
                <div className="hr_tag_in_card"></div>
              </div>

              <div className="para_main_in_card">
                <p className="para_in_card">
                  When you partner with us, you gain access to our dedicated
                  support team. We're available to assist you with any
                  questions, issues, or concerns, ensuring you're never on your
                  own.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 m-0 p-0">
            <div
              className="main_div_card_why_us"
              onMouseEnter={handleHover4}
              onMouseLeave={handleHover4}
            >
              <div className="row">
                <div className="col-lg-4 col-md-4 col-4">
                  <p className="bold_number_in_card">04</p>
                </div>
                <div className="col-lg-4 col-md-4 col-4">
                  <div className="card_align_image">
                    <img
                      src={
                        isHovered4
                          ? seamlessintegrationhover
                          : seamlessintegration
                      }
                      className={`image_in_card ${isHovered4 ? "hovered" : ""}`}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-4"></div>
              </div>

              <div className="card_align_image">
                <p className="heading_card_inside">Seamless Integration</p>
                <div className="hr_tag_in_card"></div>
              </div>

              <div className="para_main_in_card">
                <p className="para_in_card">
                  Our systems seamlessly integrate with your existing tools and
                  processes, minimizing disruption and maximizing efficiency
                  during the transition.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 m-0 p-0">
            <div
              className="main_div_card_why_us"
              onMouseEnter={handleHover5}
              onMouseLeave={handleHover5}
            >
              <div className="row">
                <div className="col-lg-4 col-md-4 col-4">
                  <p className="bold_number_in_card">05</p>
                </div>
                <div className="col-lg-4 col-md-4 col-4">
                  <div className="card_align_image">
                    <img
                      src={isHovered5 ? proventrackhover : proventrack}
                      className={`image_in_card ${isHovered5 ? "hovered" : ""}`}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-4"></div>
              </div>

              <div className="card_align_image">
                <p className="heading_card_inside">Proven Track Record</p>
                <div className="hr_tag_in_card"></div>
              </div>

              <div className="para_main_in_card">
                <p className="para_in_card">
                  Our success stories and satisfied clients speak volumes about
                  the results we deliver. Check out our testimonials to hear
                  from real estate professionals who've experienced the
                  difference we make.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 m-0 p-0">
            <div
              className="main_div_card_why_us"
              onMouseEnter={handleHover6}
              onMouseLeave={handleHover6}
            >
              <div className="row">
                <div className="col-lg-4 col-md-4 col-4">
                  <p className="bold_number_in_card">06</p>
                </div>
                <div className="col-lg-4 col-md-4 col-4">
                  <div className="card_align_image">
                    <img
                      src={isHovered6 ? affordablepricehover : affordableprice}
                      className={`image_in_card ${isHovered6 ? "hovered" : ""}`}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-4"></div>
              </div>

              <div className="card_align_image">
                <p className="heading_card_inside">Affordable Pricing Plans</p>
                <div className="hr_tag_in_card"></div>
              </div>

              <div className="para_main_in_card">
                <p className="para_in_card">
                  We believe that quality shouldn't come at a premium. Our
                  pricing plans are designed to be affordable, providing
                  unbeatable value for your investment.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 m-0 p-0">
            <div
              className="main_div_card_why_us"
              onMouseEnter={handleHover7}
              onMouseLeave={handleHover7}
            >
              <div className="row">
                <div className="col-lg-4 col-md-4 col-4">
                  <p className="bold_number_in_card">07</p>
                </div>
                <div className="col-lg-4 col-md-4 col-4">
                  <div className="card_align_image">
                    <img
                      src={isHovered7 ? industryinsighthover : industryinsight}
                      className={`image_in_card ${isHovered7 ? "hovered" : ""}`}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-4"></div>
              </div>

              <div className="card_align_image">
                <p className="heading_card_inside">Industry Insights</p>
                <div className="hr_tag_in_card"></div>
              </div>

              <div className="para_main_in_card">
                <p className="para_in_card">
                  Benefit from our deep industry knowledge and insights. We'll
                  keep you and your system updated with the latest real estate
                  trends and strategies.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 m-0 p-0">
            <div
              className="main_div_card_why_us"
              onMouseEnter={handleHover8}
              onMouseLeave={handleHover8}
            >
              <div className="row">
                <div className="col-lg-4 col-md-4 col-4">
                  <p className="bold_number_in_card">08</p>
                </div>
                <div className="col-lg-4 col-md-4 col-4">
                  <div className="card_align_image">
                    <img
                      src={isHovered8 ? transparencyhover : transparency}
                      className={`image_in_card ${isHovered8 ? "hovered" : ""}`}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-4"></div>
              </div>

              <div className="card_align_image">
                <p className="heading_card_inside">Transparency</p>
                <div className="hr_tag_in_card"></div>
              </div>

              <div className="para_main_in_card">
                <p className="para_in_card">
                  We believe in clear and transparent communication. You'll
                  always know what's happening with your system and how it's
                  contributing to your success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
