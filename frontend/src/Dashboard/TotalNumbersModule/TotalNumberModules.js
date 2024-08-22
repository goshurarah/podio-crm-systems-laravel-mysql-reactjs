import React, { useEffect, useState } from "react";
import "./../TotalNumbersModule/TotalNumbersModulesStyle.css";
import totalinetgration from "./../../Assets/totalintegrationicon.png";
import totallead from "./../../Assets/totlaleadicon.png";
import axios from "axios";
import NotificationDisplay from "../../NotficationDisplay/NotificationDisplay";

function TotalNumberModules() {
  const token = localStorage.getItem("token");
  const axiosInstance = axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
      'ngrok-skip-browser-warning': 'true',
    },
  });

  const [profilePicture, setProfilePicture] = useState("");
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [userProfileData, setuserProfileData] = useState(null);


  console.log(image,"image")
  useEffect(() => {
    getuserProfileData();
  }, []);

  const getuserProfileData = () => {
    axiosInstance.get(`/api/user`)
      .then((res) => {
        setuserProfileData(res?.data);
      })
      .catch((error) => {
        console.error("Error fetching user profile data:", error.message);
      });
  };

  const handleFileUpload = (event) => {
    console.log("File selected"); // Add this line to check if function is called
    const file = event.target.files[0];
    
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePicture(reader.result);
      setImage({
        preview: reader.result,
        raw: file,
      });
      handleUploadProfilePicture(); // Call API to upload profile picture after selecting photo
    };
    
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  

  const handleUploadProfilePicture = async () => {
    console.log("Image raw:", image.raw); // Add this line to check if image.raw is available
    
    if (!image.raw) {
      return;
    }
  
    const formData = new FormData();
    formData.append("profile_pic", image.raw);
  
    try {
      await axiosInstance.put(`/api/user/update-profile-pic`, formData);
      getuserProfileData(); // Update user profile data after successful upload
    } catch (error) {
      console.error("Error uploading profile picture:", error);
    }
  };
  

  return (
    <div className="main_div_totla_numbers_module">
      <div className="row m-0 p-0">
        <div className="col-lg-1 col-md-1 col-1"></div>

        <div className="col-lg-10 col-md-10 col-10">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="total_integration_div">
                <div className="d-flex justify-content-between">
                  <p className="total_integration_para">Total Integrations</p>

                  <img
                    src={totalinetgration}
                    className="totlainetgration_icon_style"
                  />
                </div>

                <p className="totla_number_integration_para">500</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="total_integration_div">
                <div className="d-flex justify-content-between">
                  <p className="total_integration_para">Total Leads</p>

                  <img
                    src={totallead}
                    className="totlainetgration_icon_style"
                  />
                </div>

                <p className="totla_number_integration_para">500</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="main_div_profile_detail">
                <div className="row">
                  <div className="col-lg-2 col-md-2 col-12">
                    <div className="profile_picture_user_dashboard">
                      <img
                        className="image_in_profile_div_dashboard"
                        src={profilePicture || userProfileData?.profile_pic}
                        alt="Profile"
                      />
                      <label htmlFor="fileInput" className="upload-text">
                        Upload
                      </label>
                      <input
                        type="file"
                        id="fileInput"
                        accept="image/*"
                        onChange={handleFileUpload}
                        style={{ display: "none" }}
                      />
                    </div>

                    
                  </div>
                  <div className="col-lg-10 col-md-10 col-12">
                    <div className="d-flex flex-row">
                      <p className="First_Name_para_profile">First Name:</p>
                      <p className="namepara_profile_dashboard">
                        {userProfileData ? userProfileData.first_name : null}
                      </p>
                    </div>

                    <div className="d-flex flex-row">
                      <p className="First_Name_para_profile">Last Name:</p>
                      <p className="namepara_profile_dashboard">
                        {userProfileData ? userProfileData.last_name : null}
                      </p>
                    </div>

                    <div className="d-flex flex-row">
                      <p className="First_Name_para_profile">Email:</p>
                      <p className="namepara_profile_dashboard">
                        {userProfileData ? userProfileData.email : null}
                      </p>
                    </div>

                    <div className="d-flex flex-row">
                      <p className="First_Name_para_profile">Phone Number:</p>
                      <p className="namepara_profile_dashboard">
                        {userProfileData ? userProfileData.phone_number : null}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-1 col-md-1 col-1"></div>
      </div>
    </div>
  );
}

export default TotalNumberModules;
