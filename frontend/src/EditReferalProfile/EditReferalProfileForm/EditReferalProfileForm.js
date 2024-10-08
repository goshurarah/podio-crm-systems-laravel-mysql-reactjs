import React, { useEffect, useState } from "react";
import axios from "axios";
import "./../EditReferalProfileForm/EditReferalProfileForm.css";

import firstname_icon from "./../../Assets/fn_icon.png";
import email_icon from "./../../Assets/email_icon.png";
import phone_icon from "./../../Assets/phone_icon.png";
import company_icon from "./../../Assets/company_icon.png";
import website_icon from "./../../Assets/website_icon.png";
import euvaticon from "./../../Assets/eu vat icon.png";
import country_icon from "./../../Assets/country_icon.png";
import NotificationDisplay from "../../NotficationDisplay/NotificationDisplay";
import Loader from "../../Loader/Loader";
import { useNavigate } from "react-router-dom";

function EditReferalProfileForm() {
  const getAxiosInstance = () => {
    const token = localStorage.getItem("token");
    return axios.create({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const countries = [
    { code: "", name: "Country" },
    { code: "US", name: "United States" },
    { code: "AF", name: "Afghanistan" },
    { code: "AL", name: "Albania" },
    { code: "DZ", name: "Algeria" },
    { code: "AS", name: "American Samoa" },
    { code: "AD", name: "Andorra" },
    { code: "AO", name: "Angola" },
    { code: "AI", name: "Anguilla" },
    { code: "AQ", name: "Antarctica" },
    { code: "AG", name: "Antigua and Barbuda" },
    { code: "AR", name: "Argentina" },
    { code: "AM", name: "Armenia" },
    { code: "AW", name: "Aruba" },
    { code: "AU", name: "Australia" },
    { code: "AT", name: "Austria" },
    { code: "AZ", name: "Azerbaijan" },
    { code: "BS", name: "Bahamas" },
    { code: "BH", name: "Bahrain" },
    { code: "BD", name: "Bangladesh" },
    { code: "BB", name: "Barbados" },
    { code: "BY", name: "Belarus" },
    { code: "BE", name: "Belgium" },
    { code: "BZ", name: "Belize" },
    { code: "BJ", name: "Benin" },
    { code: "BM", name: "Bermuda" },
    { code: "BT", name: "Bhutan" },
    { code: "BO", name: "Bolivia" },
    { code: "BA", name: "Bosnia and Herzegovina" },
    { code: "BW", name: "Botswana" },
    { code: "BV", name: "Bouvet Island" },
    { code: "BR", name: "Brazil" },
    { code: "IO", name: "British Indian Ocean Territory" },
    { code: "BN", name: "Brunei Darussalam" },
    { code: "BG", name: "Bulgaria" },
    { code: "BF", name: "Burkina Faso" },
    { code: "BI", name: "Burundi" },
    { code: "KH", name: "Cambodia" },
    { code: "CM", name: "Cameroon" },
    { code: "CA", name: "Canada" },
    { code: "CV", name: "Cape Verde" },
    { code: "KY", name: "Cayman Islands" },
    { code: "CF", name: "Central African Republic" },
    { code: "TD", name: "Chad" },
    { code: "CL", name: "Chile" },
    { code: "CN", name: "China" },
    { code: "CX", name: "Christmas Island" },
    { code: "CC", name: "Cocos (Keeling) Islands" },
    { code: "CO", name: "Colombia" },
    { code: "KM", name: "Comoros" },
    { code: "CG", name: "Congo" },
    { code: "CD", name: "Congo, the Democratic Republic of the" },
    { code: "CK", name: "Cook Islands" },
    { code: "CR", name: "Costa Rica" },
    { code: "CI", name: "Cote D'Ivoire" },
    { code: "HR", name: "Croatia" },
    { code: "CU", name: "Cuba" },
    { code: "CY", name: "Cyprus" },
    { code: "CZ", name: "Czech Republic" },
    { code: "DK", name: "Denmark" },
    { code: "DJ", name: "Djibouti" },
    { code: "DM", name: "Dominica" },
    { code: "DO", name: "Dominican Republic" },
    { code: "EC", name: "Ecuador" },
    { code: "EG", name: "Egypt" },
    { code: "SV", name: "El Salvador" },
    { code: "GQ", name: "Equatorial Guinea" },
    { code: "ER", name: "Eritrea" },
    { code: "EE", name: "Estonia" },
    { code: "ET", name: "Ethiopia" },
    { code: "FK", name: "Falkland Islands (Malvinas)" },
    { code: "FO", name: "Faroe Islands" },
    { code: "FJ", name: "Fiji" },
    { code: "FI", name: "Finland" },
    { code: "FR", name: "France" },
    { code: "GF", name: "French Guiana" },
    { code: "PF", name: "French Polynesia" },
    { code: "TF", name: "French Southern Territories" },
    { code: "GA", name: "Gabon" },
    { code: "GM", name: "Gambia" },
    { code: "GE", name: "Georgia" },
    { code: "DE", name: "Germany" },
    { code: "GH", name: "Ghana" },
    { code: "GI", name: "Gibraltar" },
    { code: "GR", name: "Greece" },
    { code: "GL", name: "Greenland" },
    { code: "GD", name: "Grenada" },
    { code: "GP", name: "Guadeloupe" },
    { code: "GU", name: "Guam" },
    { code: "GT", name: "Guatemala" },
    { code: "GN", name: "Guinea" },
    { code: "GW", name: "Guinea-Bissau" },
    { code: "GY", name: "Guyana" },
    { code: "HT", name: "Haiti" },
    { code: "HM", name: "Heard Island and Mcdonald Islands" },
    { code: "VA", name: "Holy See (Vatican City State)" },
    { code: "HN", name: "Honduras" },
    { code: "HK", name: "Hong Kong" },
    { code: "HU", name: "Hungary" },
    { code: "IS", name: "Iceland" },
    { code: "IN", name: "India" },
    { code: "ID", name: "Indonesia" },
    { code: "IR", name: "Iran, Islamic Republic of" },
    { code: "IQ", name: "Iraq" },
    { code: "IE", name: "Ireland" },
    { code: "IL", name: "Israel" },
    { code: "IT", name: "Italy" },
    { code: "JM", name: "Jamaica" },
    { code: "JP", name: "Japan" },
    { code: "JO", name: "Jordan" },
    { code: "KZ", name: "Kazakhstan" },
    { code: "KE", name: "Kenya" },
    { code: "KI", name: "Kiribati" },
    { code: "KP", name: "Korea, Democratic People's Republic of" },
    { code: "KR", name: "Korea, Republic of" },
    { code: "KW", name: "Kuwait" },
    { code: "KG", name: "Kyrgyzstan" },
    { code: "LA", name: "Lao People's Democratic Republic" },
    { code: "LV", name: "Latvia" },
    { code: "LB", name: "Lebanon" },
    { code: "LS", name: "Lesotho" },
    { code: "LR", name: "Liberia" },
    { code: "LY", name: "Libyan Arab Jamahiriya" },
    { code: "LI", name: "Liechtenstein" },
    { code: "LT", name: "Lithuania" },
    { code: "LU", name: "Luxembourg" },
    { code: "MO", name: "Macao" },
    { code: "MK", name: "Macedonia, the Former Yugoslav Republic of" },
    { code: "MG", name: "Madagascar" },
    { code: "MW", name: "Malawi" },
    { code: "MY", name: "Malaysia" },
    { code: "MV", name: "Maldives" },
    { code: "ML", name: "Mali" },
    { code: "MT", name: "Malta" },
    { code: "MH", name: "Marshall Islands" },
    { code: "MQ", name: "Martinique" },
    { code: "MR", name: "Mauritania" },
    { code: "MU", name: "Mauritius" },
    { code: "YT", name: "Mayotte" },
    { code: "MX", name: "Mexico" },
    { code: "FM", name: "Micronesia, Federated States of" },
    { code: "MD", name: "Moldova, Republic of" },
    { code: "MC", name: "Monaco" },
    { code: "MN", name: "Mongolia" },
    { code: "MS", name: "Montserrat" },
    { code: "MA", name: "Morocco" },
    { code: "MZ", name: "Mozambique" },
    { code: "MM", name: "Myanmar" },
    { code: "NA", name: "Namibia" },
    { code: "NR", name: "Nauru" },
    { code: "NP", name: "Nepal" },
    { code: "NL", name: "Netherlands" },
    { code: "AN", name: "Netherlands Antilles" },
    { code: "NC", name: "New Caledonia" },
    { code: "NZ", name: "New Zealand" },
    { code: "NI", name: "Nicaragua" },
    { code: "NE", name: "Niger" },
    { code: "NG", name: "Nigeria" },
    { code: "NU", name: "Niue" },
    { code: "NF", name: "Norfolk Island" },
    { code: "MP", name: "Northern Mariana Islands" },
    { code: "NO", name: "Norway" },
    { code: "OM", name: "Oman" },
    { code: "PK", name: "Pakistan" },
    { code: "PW", name: "Palau" },
    { code: "PS", name: "Palestinian Territory, Occupied" },
    { code: "PA", name: "Panama" },
    { code: "PG", name: "Papua New Guinea" },
    { code: "PY", name: "Paraguay" },
    { code: "PE", name: "Peru" },
    { code: "PH", name: "Philippines" },
    { code: "PN", name: "Pitcairn" },
    { code: "PL", name: "Poland" },
    { code: "PT", name: "Portugal" },
    { code: "PR", name: "Puerto Rico" },
    { code: "QA", name: "Qatar" },
    { code: "RE", name: "Reunion" },
    { code: "RO", name: "Romania" },
    { code: "RU", name: "Russian Federation" },
    { code: "RW", name: "Rwanda" },
    { code: "SH", name: "Saint Helena" },
    { code: "KN", name: "Saint Kitts and Nevis" },
    { code: "LC", name: "Saint Lucia" },
    { code: "PM", name: "Saint Pierre and Miquelon" },
    { code: "VC", name: "Saint Vincent and the Grenadines" },
    { code: "WS", name: "Samoa" },
    { code: "SM", name: "San Marino" },
    { code: "ST", name: "Sao Tome and Principe" },
    { code: "SA", name: "Saudi Arabia" },
    { code: "SN", name: "Senegal" },
    { code: "CS", name: "Serbia and Montenegro" },
    { code: "SC", name: "Seychelles" },
    { code: "SL", name: "Sierra Leone" },
    { code: "SG", name: "Singapore" },
    { code: "SK", name: "Slovakia" },
    { code: "SI", name: "Slovenia" },
    { code: "SB", name: "Solomon Islands" },
    { code: "SO", name: "Somalia" },
    { code: "ZA", name: "South Africa" },
    { code: "GS", name: "South Georgia and the South Sandwich Islands" },
    { code: "ES", name: "Spain" },
    { code: "LK", name: "Sri Lanka" },
    { code: "SD", name: "Sudan" },
    { code: "SR", name: "Suriname" },
    { code: "SJ", name: "Svalbard and Jan Mayen" },
    { code: "SZ", name: "Swaziland" },
    { code: "SE", name: "Sweden" },
    { code: "CH", name: "Switzerland" },
    { code: "SY", name: "Syrian Arab Republic" },
    { code: "TW", name: "Taiwan, Province of China" },
    { code: "TJ", name: "Tajikistan" },
    { code: "TZ", name: "Tanzania, United Republic of" },
    { code: "TH", name: "Thailand" },
    { code: "TL", name: "Timor-Leste" },
    { code: "TG", name: "Togo" },
    { code: "TK", name: "Tokelau" },
    { code: "TO", name: "Tonga" },
    { code: "TT", name: "Trinidad and Tobago" },
    { code: "TN", name: "Tunisia" },
    { code: "TR", name: "Turkey" },
    { code: "TM", name: "Turkmenistan" },
    { code: "TC", name: "Turks and Caicos Islands" },
    { code: "TV", name: "Tuvalu" },
    { code: "UG", name: "Uganda" },
    { code: "UA", name: "Ukraine" },
    { code: "AE", name: "United Arab Emirates" },
    { code: "GB", name: "United Kingdom" },

    { code: "UM", name: "United States Minor Outlying Islands" },
    { code: "UY", name: "Uruguay" },
    { code: "UZ", name: "Uzbekistan" },
    { code: "VU", name: "Vanuatu" },
    { code: "VE", name: "Venezuela" },
    { code: "VN", name: "Viet Nam" },
    { code: "VG", name: "Virgin Islands, British" },
    { code: "VI", name: "Virgin Islands, U.s." },
    { code: "WF", name: "Wallis and Futuna" },
    { code: "EH", name: "Western Sahara" },
    { code: "YE", name: "Yemen" },
    { code: "ZM", name: "Zambia" },
    { code: "ZW", name: "Zimbabwe" },
  ];

  const [UserId, setUserId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyRegNumber, setCompanyRegNumber] = useState("");
  const [euVatId, setEuVatId] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [notificationMessage, setnotificationMessage] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const axiosInstance = getAxiosInstance();

  console.log(axiosInstance, "axiosInstance");

  const [affiliateuserinfo, setAffiliateUserInfo] = useState({});

  const getAffiliateUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/api/affiliate");
      console.log(response.data, "user data");
      setAffiliateUserInfo(response.data);
      setUserId(response.data.id);
      setFirstName(response.data.first_name);
      localStorage.setItem("affiliateusername", response.data.first_name);
      setLastName(response.data.last_name);
      setAddress(response.data.address);
      setEmail(response.data.email);
      setCompanyName(response.data.company_name);
      setCompanyRegNumber(response.data.company_registration_number);
      setWebsite(response.data.website);
      setSelectedCountry(response.data.country);
      setPhone(response.data.phone);
      setEuVatId(response.data.eu_vat_id);
    } catch (error) {
      console.error("Error fetching affiliate user info:", error);
      // Handle error gracefully, such as displaying an error message to the user
    }
  };

  useEffect(() => {
    getAffiliateUserInfo();
  }, []); // Empty dependency array means this effect runs only once on mount

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Construct payload
    const payload = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      website: website,
      company_name: companyName,
      company_registration_number: companyRegNumber,
      eu_vat_id: euVatId,
      country: selectedCountry,
      address: address,
      phone_number: phone,
    };

    try {
      // Make API call using Axios
      const response = await axiosInstance.put(
        `/api/affiliates/${UserId}/update`,
        payload
      );
      // Handle response
      setLoading(false);
      getAffiliateUserInfo();
      console.log(response); // Handle success
      setnotificationMessage("Profile Updated Successfully!");
      setTimeout(() => {
        setnotificationMessage("");
        navigate("/referral/dashboard");
      }, 4000);
    } catch (error) {
      setLoading(false);
      console.error("Error submitting form:", error); // Handle error
    }
  };
  return (
    <div className="container">
      <div className="main_div_profile_edit">
        <form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-center">
            <div className="d-flex flex-row">
              <p className="edit_para_edit_ptofile">Update your</p>
              <p className="profile_para_edit_ptofile">profile</p>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div className="input_style_name_edit">
              <div className="d-flex flex-row">
                <img src={firstname_icon} className="icon_input_name" />
                <input
                  className="input_style_firstname_edit"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div className="input_style_name_edit">
              <div className="d-flex flex-row">
                <img src={firstname_icon} className="icon_input_name" />
                <input
                  className="input_style_firstname_edit"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div className="input_style_name_edit">
              <div className="d-flex flex-row">
                <img src={email_icon} className="icon_input_name" />
                <input
                  className="input_style_firstname_edit"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div className="input_style_name_edit">
              <div className="d-flex flex-row">
                <img src={website_icon} className="icon_input_name" />
                <input
                  className="input_style_firstname_edit"
                  placeholder="Website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div className="input_style_name_edit">
              <div className="d-flex flex-row">
                <img src={company_icon} className="icon_input_name" />
                <input
                  className="input_style_firstname_edit"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div className="input_style_name_edit">
              <div className="d-flex flex-row">
                <img src={company_icon} className="icon_input_name" />
                <input
                  className="input_style_firstname_edit"
                  placeholder="Company Registration Number"
                  value={companyRegNumber}
                  onChange={(e) => setCompanyRegNumber(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div className="input_style_name_edit">
              <div className="d-flex flex-row">
                <img src={euvaticon} className="icon_input_name" />
                <input
                  className="input_style_firstname_edit"
                  placeholder="EU VAT ID (if available)"
                  value={euVatId}
                  onChange={(e) => setEuVatId(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div className="input_style_name_edit">
              <div className="d-flex flex-row">
                <img
                  src={country_icon}
                  className="icon_input_name"
                  alt="Country Icon"
                />
                <select
                  className="input_style_firstname_edit"
                  placeholder="Country"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                >
                  {countries.map((country) => (
                    <option key={country.name} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div className="input_style_name_edit_address">
              <div className="d-flex flex-row">
                <textarea
                  className="input_style__edit_address"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div className="input_style_name_edit">
              <div className="d-flex flex-row">
                <img src={phone_icon} className="icon_input_name" />
                <input
                  className="input_style_firstname_edit"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
          </div>

          <p className="grey_para_edit_profile">Latest accepted agreement</p>
          <p className="blue_para_edit_profile">view agreement</p>

          <p className="grey_para_edit_profile">
            Do you want to change your password?
          </p>
          <p className="blue_para_edit_profile">
            Click here to change your password
          </p>

          <p className="grey_para_edit_profile">
            Do you want to change your emails settings and consent?
          </p>
          <p className="blue_para_edit_profile">
            Click here to change your email settings
          </p>

          <div className="d-flex justify-content-center">
            <button
              className="btn_submit_edit_profile"
              type="submit"
              disabled={loading}
            >
              {loading ? <Loader /> : "  Update Profile"}
            </button>
          </div>
        </form>
      </div>

      <>
        {notificationMessage && (
          <NotificationDisplay message={notificationMessage} />
        )}
      </>
    </div>
  );
}

export default EditReferalProfileForm;
