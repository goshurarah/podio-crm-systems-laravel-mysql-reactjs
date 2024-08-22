import React from "react";
import "./../TeamExperts/TeamExperts.css";
import insta from "./../../Assets/insta_team_exp.png";
import twitter from "./../../Assets/twitter_team_exp.png";
import youtube from "./../../Assets/youtube_team_exp.png";
import linkedin from "./../../Assets/linkedin_team_exp.png";
import facebook from "./../../Assets/facebook_team_exp.png";

function TeamExperts() {
  return (
    <div className="main_div_team_experts">
      <div className="container">
        <div className="text_align_center_div_team_exp">
          <div className="d-flex justify-content-center">
            <div className="orange_line_team_exp"></div>
            <p className="para_team_exp_orange_line">Team Member</p>
            <div className="orange_line_team_exp"></div>
          </div>

          <div className="d-flex justify-content-center">
            <p className="lets_meet_with_white_para">Let’s Meet with Our</p>
            <p className="experts_orange_para">Experts</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="main_div_first_expert">
              <div className="icons_bg_style">
                <p className="username_para_experts">Muhammad Abdul Haye</p>
                <p className="designation_para_experts">CEO</p>
                <div className="d-flex justify-content-center">
                  <img
                    src={facebook}
                    className="icon_style_icons_team_exp"
                    alt="socialmedialogo"
                  />
                  <img
                    src={insta}
                    className="icon_style_icons_team_exp"
                    alt="socialmedialogo"
                  />
                  <img
                    src={twitter}
                    className="icon_style_icons_team_exp"
                    alt="socialmedialogo"
                  />
                  <img
                    src={youtube}
                    className="icon_style_icons_team_exp"
                    alt="socialmedialogo"
                  />
                  <a
                    href="https://www.linkedin.com/in/muhammad-abdul-haye-39963877/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={linkedin}
                      className="icon_style_icons_team_exp"
                      alt="LinkedIn Profile"
                    />
                  </a>
                </div>
                <div className="orange_div_below_icons"></div>
                <div />
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="main_div_second_expert">
              <div className="icons_bg_style">
                <p className="username_para_experts">Muhammad Abdus Sami</p>
                <p className="designation_para_experts">CEO</p>
                <div className="d-flex justify-content-center">
                  <img
                    src={facebook}
                    className="icon_style_icons_team_exp"
                    alt="socialmedialogo"
                  />
                  <img
                    src={insta}
                    className="icon_style_icons_team_exp"
                    alt="socialmedialogo"
                  />
                  <img
                    src={twitter}
                    className="icon_style_icons_team_exp"
                    alt="socialmedialogo"
                  />
                  <img
                    src={youtube}
                    className="icon_style_icons_team_exp"
                    alt="socialmedialogo"
                  />
                  <a
                    href="https://www.linkedin.com/in/muhammad-abdus-sami-52159554"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={linkedin}
                      className="icon_style_icons_team_exp"
                      alt="LinkedIn Profile"
                    />
                  </a>
                </div>
                <div className="orange_div_below_icons"></div>
                <div />
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="main_div_third_expert">
              <div className="icons_bg_style">
                <p className="username_para_experts">Muhammad Bilal</p>
                <p className="designation_para_experts">CEO</p>
                <div className="d-flex justify-content-center">
                  <img
                    src={facebook}
                    className="icon_style_icons_team_exp"
                    alt="socialmedialogo"
                  />
                  <img
                    src={insta}
                    className="icon_style_icons_team_exp"
                    alt="socialmedialogo"
                  />
                  <img
                    src={twitter}
                    className="icon_style_icons_team_exp"
                    alt="socialmedialogo"
                  />
                  <img
                    src={youtube}
                    className="icon_style_icons_team_exp"
                    alt="socialmedialogo"
                  />
                  <a
                    href="https://www.linkedin.com/in/muhammad-bilal-601950b0/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={linkedin}
                      className="icon_style_icons_team_exp"
                      alt="LinkedIn Profile"
                    />
                  </a>
                </div>
                <div className="orange_div_below_icons"></div>
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamExperts;
