import React, { useEffect, useState } from "react";
import "./../ReferalsDashboardMainPage/ReferalsdashboardMainPage.css";
import dummy from "./../../Assets/round_dummy.png";
import pencil from "./../../Assets/pencilicon.png";
import golddollar from "./../../Assets/gold_dollar_icon.png";
import fb from "./../../Assets/fbLink.png";
import twitter from "./../../Assets/twitterLink.png";
import insta from "./../../Assets/instaLink.png";
import youtube from "./../../Assets/youtubeLink.png";
import down from "./../../Assets/downbtnlink.png";
import green_checkedmark from "./../../Assets/green_checkedmark.png";
import { Link } from "react-router-dom";
import axios from "axios";

function ReferalsdashboardMainPage() {
  const [inputValue, setInputValue] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    return () => {
      setInputValue("dummy link");
    };
  }, []);
  // Function to handle copying text
  const handleCopy = () => {
    const input = document.getElementById("inputField");
    input.select();
    document.execCommand("copy");
    setCopied(true);
  };

  // Function to handle changes in the input field
  const handleChange = (event) => {
    setInputValue(event.target.value);
    setCopied(false); // Reset copied state when input changes
  };

  const [selectedTable, setSelectedTable] = useState("last7days");

  const getAxiosInstance = () => {
    const token = localStorage.getItem("token");
    return axios.create({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  const axiosInstance = getAxiosInstance();

  console.log(axiosInstance, "axiosInstance");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    return () => {
      getAffiliateUserInfo();
    };
  }, []);
  const getAffiliateUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/api/affiliate");
      console.log(response.data, "user data");

      setFirstName(response.data.first_name);
      setLastName(response.data.last_name);
    } catch (error) {
      console.error("Error fetching affiliate user info:", error);
      // Handle error gracefully, such as displaying an error message to the user
    }
  };

  const [affiliateinfo, setaffiliateinfo] = useState("");
  const [sevendaysdata, setsevendaysdata] = useState("");
  useEffect(() => {
    return () => {
      getAffiliateUserInfodesp();
    };
  }, []);
  const getAffiliateUserInfodesp = async () => {
    try {
      const response = await axiosInstance.get("/api/affiliate/dashboard");
      console.log(response, "referal data");
      setaffiliateinfo(response?.data?.affiliate);
      setsevendaysdata(response?.data?.performanceDetails);
    } catch (error) {
      console.error("Error fetching affiliate user info:", error);
      // Handle error gracefully, such as displaying an error message to the user
    }
  };




  const [fourweeksdata, setfourweeksdata] = useState("");
  useEffect(() => {
    return () => {
      getfourweeksdata();
    };
  }, []);

  const getfourweeksdata = async () => {
    try {
      const response = await axiosInstance.get("/api/affiliate/last4weeks");
      console.log(response, "fourweeksdata");
      setfourweeksdata(response?.data?.performanceDetails);
    } catch (error) {
      console.error("Error fetching affiliate user info:", error);
      // Handle error gracefully, such as displaying an error message to the user
    }
  };


  const [sixmonthdata, setsixmonthdata] = useState("");
  useEffect(() => {
    return () => {
      getsixmonthdata();
    };
  }, []);

  const getsixmonthdata = async () => {
    try {
      const response = await axiosInstance.get("/api/affiliate/last6months");
      console.log(response, "sixmonthdata");
      setsixmonthdata(response?.data?.performanceDetails);
    } catch (error) {
      console.error("Error fetching affiliate user info:", error);
      // Handle error gracefully, such as displaying an error message to the user
    }
  };
  return (
    <div className="container">
      <div className="main_div_profile_view">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row">
            <img src={dummy} className="profile_pic_style" />
            <p className="profile_title">
              {firstName} {lastName}
            </p>
          </div>

          <div className="d-flex flex-row">
            <img src={pencil} className="pencil_pic_style" />
            <Link to="/referral/edit/profile">
              <p className="profile_edit">Edit Profile</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        {/* <div className="main_div_center_item">
          <p className="number_show_referals">0</p>
          <p className="name_show_referals">Referrals</p>
    
        </div>
        <div className="hr_line_referal" /> */}

        <div className="main_div_center_item">
          <p className="number_show_referals">
            {affiliateinfo?.customers ? affiliateinfo?.customers : "0"}
          </p>
          <p className="name_show_referals">Customers</p>
        </div>
        <div className="hr_line_referal" />

        <div className="main_div_center_item">
          <p className="number_show_referals">
            {affiliateinfo?.clicks ? affiliateinfo?.clicks : "0"}
          </p>
          <p className="name_show_referals">clicks</p>
        </div>
        <div className="hr_line_referal" />

        <div className="main_div_center_item">
          <p className="number_show_referals">
            $
            {affiliateinfo?.unpaid_earnings
              ? affiliateinfo?.unpaid_earnings
              : "0"}
          </p>
          <p className="name_show_referals">unpaid earnings</p>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="d-flex flex-row">
          <img src={golddollar} className="gold_icon_style" />
          <p className="recruit_spending_para">
            Recruit affiliates and get 5% commission from their spending.
          </p>
        </div>
      </div>

      <div className="main_div_referral_link">
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-row">
            <p className="black_heading_social">Share on</p>
            <p className="orange_heading_social">social media</p>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="d-flex flex-row">
            <img src={fb} className="social_icon_referrals" />
            <img src={insta} className="social_icon_referrals" />
            <img src={twitter} className="social_icon_referrals" />
            <img src={youtube} className="social_icon_referrals" />
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="d-flex flex-row">
            <p className="para_share_referral_link">
              Share this referral link to your friends and followers 
            </p>
            {/* <p className="para_share_referral_link2">(customize link)</p> */}
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="main_div_copy_link">
            <div className="d-flex">
              <div>
                <button className="blue_link_button">Link</button>
              </div>
              <div>
                <input
                  id="inputField"
                  className="input_link_copy"
                  value={
                    affiliateinfo?.referral_link
                      ? affiliateinfo?.referral_link
                      : null
                  }
                />
              </div>
              <div className="ml-auto">
                <button className="orange_link_button" onClick={handleCopy}>
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="d-flex justify-content-center">
          <div className="main_div_para_below_link">
            <p className="para_below_link">
              Click the "Links" button above to view all available referral
              links. You can also create your own links with sub-ids.
            </p>
          </div>
        </div>

        <div className="main_div_table_dashboard_referal">
          <div className="main_div_tablestriped_referal">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col">Link</th>
                  <th scope="col">SubId</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="link_td">Default</td>
                  <td>Aweber</td>
                  <td>
                    <img className="" src={green_checkedmark} />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="link_td">Default</td>
                  <td>Aweber</td>
                  <td>
                    <img className="" src={green_checkedmark} />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="link_td">Default</td>
                  <td>Aweber</td>
                  <td>
                    <img className="" src={green_checkedmark} />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}
      </div>

      {/* <div className="main_div_add_link_btn">
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-row">
            <button className="blue_btn_add_link">Add Link</button>

            <p className="cancel_para">Cancel</p>
          </div>
        </div>
      </div> */}

      <div className="main_div_referral_link">
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-row">
            <p className="black_heading_social">Performance</p>
            <p className="orange_heading_social">details</p>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <button
            onClick={() => setSelectedTable("last7days")}
            className={`last_7day_data ${
              selectedTable === "last7days" ? "active" : ""
            }`}
          >
            Last 7 days
          </button>
          <button
            onClick={() => setSelectedTable("last4weeks")}
            className={`last_7day_data ${
              selectedTable === "last4weeks" ? "active" : ""
            }`}
          >
            Last 4 weeks
          </button>
          <button
            onClick={() => setSelectedTable("last6months")}
            className={`last_7day_data ${
              selectedTable === "last6months" ? "active" : ""
            }`}
          >
            Last 6 months
          </button>
        </div>

        {/* Render different tables based on selectedTable */}
        <div className="main_div_table_dashboard_referal">
          {selectedTable === "last7days" && (
            <div className="main_div_tablestriped_referal">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col">Day</th>
                    <th scope="col">Click</th>
                    <th scope="col">Signups</th>
                    <th scope="col">Customers</th>
                    <th scope="col">Earnings</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {sevendaysdata
                    ? sevendaysdata?.map((data, index) => {
                        return (
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{data?.day}</td>
                            <td>{data?.clicks}</td>
                            <td>{data?.signups}</td>
                            <td>{data?.customers}</td>
                            <td>{data?.earnings}</td>
                            <td></td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </table>
            </div>
          )}

          {selectedTable === "last4weeks" && (
            <div className="main_div_tablestriped_referal">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col">Day</th>
                    <th scope="col">Click</th>
                    <th scope="col">Signups</th>
                    <th scope="col">Customers</th>
                    <th scope="col">Earnings</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                {fourweeksdata
                    ? fourweeksdata?.map((data, index) => {
                        return (
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{data?.day}</td>
                            <td>{data?.clicks}</td>
                            <td>{data?.signups}</td>
                            <td>{data?.customers}</td>
                            <td>{data?.earnings}</td>
                            <td></td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </table>
            </div>
          )}

          {selectedTable === "last6months" && (
            <div className="main_div_tablestriped_referal">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col">Day</th>
                    <th scope="col">Click</th>
                    <th scope="col">Signups</th>
                    <th scope="col">Customers</th>
                    <th scope="col">Earnings</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                {sixmonthdata
                    ? sixmonthdata?.map((data, index) => {
                        return (
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{data?.day}</td>
                            <td>{data?.clicks}</td>
                            <td>{data?.signups}</td>
                            <td>{data?.customers}</td>
                            <td>{data?.earnings}</td>
                            <td></td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <div className="main_div_referral_link">
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-row">
            <p className="black_heading_social">Payout </p>
            <p className="orange_heading_social">Terms</p>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <p className="para_desp_payout_term">
            Your selected payout method is <b>Custom </b>(change) with minimum
            payout of $50. Your payout terms are<b> Monthly / Net-custom.</b>
          </p>
        </div>

        <div className="d-flex justify-content-center">
          <div className="d-flex flex-row">
            <p className="orange_heading_social">Your latest payments</p>
          </div>
        </div>

        <div className="main_div_table_dashboard_referal">
          <div className="main_div_tablestriped_referal">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col">Status</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Due</th>
                  <th scope="col">Paid at</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>available</td>
                  <td>100</td>
                  <td>23 oct,2012</td>
                  <td>23 oct,2012</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>available</td>
                  <td>100</td>
                  <td>23 oct,2012</td>
                  <td>23 oct,2012</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>available</td>
                  <td>100</td>
                  <td>23 oct,2012</td>
                  <td>23 oct,2012</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="margin_bottom_main_div"></div>
    </div>
  );
}

export default ReferalsdashboardMainPage;
