import React, { useEffect, useState } from "react";
import "./../HowToEarnPassiveIncome/HowToEarnPassiveIncome.css";
import icon from "./../../Assets/affiliatedicon.svg";
import step1 from "./../../Assets/step_one_icon.svg";
import step2 from "./../../Assets/step_two_icon.svg";
import step3 from "./../../Assets/step_three_icon.svg";
import { Link, NavLink } from "react-router-dom";
import kind1 from "./../../Assets/kindicon1.svg";
import kind2 from "./../../Assets/kindicon2.svg";
import kind3 from "./../../Assets/kindicon3.svg";
import kind4 from "./../../Assets/kindicon4.svg";
function HowToEarnPassiveIncome() {
  const [tokendashboard, settokendashboard] = useState("");
  const [affiliateUser, setaffiliateUser] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    const affiliate = localStorage.getItem("affiliateUser");
    setaffiliateUser(affiliate);
    settokendashboard(token);
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <p className="future_income_para">FUTURE INCOME</p>
          <p className="Earn_Passive_income_para">Earn Passive Income</p>
          <p className="From_Kind_Products_para">From Kind Products</p>

          {tokendashboard && affiliateUser == "affiliateUser" ? (
            <NavLink to="/referral/dashboard">
              <button className="become_an_affiliated_btn">Dashboard</button>
            </NavLink>
          ) : (
            <Link to="/referral/registration">
              <button className="become_an_affiliated_btn">
                Become an affiliate now
              </button>
            </Link>
          )}
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="d-flex justify-content-end">
            <img src={icon} className="icon_style_affiliated" />
          </div>
          <img src={icon} className="icon_style_affiliated_second" />
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="d-flex flex-row">
          <p className="how_to_earn_para">How to Earn </p>
          <p className="passive_income_para">Passive Income?</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="card_step_one_main_div">
            <p className="step_one_heading">Step 1</p>
            <p className="step_one_desp">
              Register to get your Kind Affiliate Link
            </p>
            <div className="d-flex justify-content-center">
              <img src={step1} className="icon_step_one" />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="card_step_one_main_div">
            <p className="step_one_heading">Step 2</p>
            <p className="step_one_desp">Promote to your Audience</p>
            <div className="d-flex justify-content-center">
              <img src={step2} className="icon_step_one" />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="card_step_one_main_div">
            <p className="step_one_heading">Step 3</p>
            <p className="step_one_desp">Get Paid 10% on Every order your</p>
            <div className="d-flex justify-content-center">
              <img src={step3} className="icon_step_one" />
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="d-flex flex-row">
          <p className="how_to_earn_para">Why Become</p>
          <p className="passive_income_para">a Kind Affiliate?</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="kind_affiliat_main_div">
            <div className="d-flex justify-content-center">
              <img src={kind1} className="icon_kind" />
            </div>
            <p className="kind_desp">Passive income from adding Value</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="kind_affiliat_main_div">
            <div className="d-flex justify-content-center">
              <img src={kind2} className="icon_kind" />
            </div>
            <p className="kind_desp">
              Help others progressively close More Deals and get a money
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="kind_affiliat_main_div">
            <div className="d-flex justify-content-center">
              <img src={kind3} className="icon_kind" />
            </div>
            <p className="kind_desp">
              Friends / Followers will thank you for Saving them money
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="kind_affiliat_main_div">
            <div className="d-flex justify-content-center">
              <img src={kind4} className="icon_kind" />
            </div>
            <p className="kind_desp">
              Become a Top G providing affordable data to your Community
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToEarnPassiveIncome;
