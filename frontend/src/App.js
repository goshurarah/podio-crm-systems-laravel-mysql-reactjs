import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeMerge from "./Homepage/HomepageMerge/HomeMerge";
import ConatctUsPageMerge from "./ContactUsPage/ContactUsPageMerge/ConatctUsPageMerge";
import IntegrationsMerge from "./IntegrationsPage/IntegrationsMerge/IntegrationsMerge";
import AboutUsMerge from "./AboutUsPage/AboutUsMerge/AboutUsMerge";
import SignUpMerge from "./SignUp/SignUpMerge/SignUpMerge";
import SignInMerge from "./SignInPage/SignInMerge/SignInMerge";
import ForgetPasswordMerge from "./ForgetPasswordEmailSentPage/FogetPasswordMerge/ForgetPasswordMerge";
import NewPasswordMerge from "./SetNewPassword/NewPasswordMerge/NewPasswordMerge";
import ServicesMerge from "./ServicesPage/ServicesMerge/ServicesMerge";
import DashboardPanelMain from "./Dashboard/DashboardPanelMain/DashboardPanelMain";
import PackagePayment from "./Homepage/PackagePayment/PackagePayment";
import AdditionalMerge from "./AdditionalServices/AdditionalMerge/AdditionalMerge";
import SuccessfulPayment from "./Homepage/PricingPackages/SuccessfulPayment";
import CancelPayment from "./Homepage/PricingPackages/CancelPayment";
import Blogs from "./BlogsPage/Blogs";
import BlogPostOpen from "./BlogPostOpen/BlogPostOpen";
import BlogsTags from "./BlogTags/BlogsTags";
import BlogsCategory from "./BlogsCategory/BlogsCategory";
import AdminDashboardmerge from "./AdminDashboard/AdminDashboardMerge/AdminDashboardmerge";
import IntegrationDetailMerge from "./IntegrationDetailPage/IntegrationMerge/IntegrationDetailMerge";
import GoogleRegister from "./GoogleRegisteration/GoogleRegister";
import GoogleRegistrationmerge from "./GoogleRegistrationForm/GoogleRegistrationMerge/GoogleRegistrationmerge";
import ReferalDashboardMerge from "./ReferalsDashboard/ReferalDashboardMerge/ReferalDashboardMerge";
import ReferralseRegistraionMerge from "./ReferralsRegistraion/ReferralseRegistraionMerge/ReferralseRegistraionMerge";
import ReferralsSigninMerge from "./ReferralsSignIn/ReferralsSigninMerge/ReferralsSigninMerge";
import ForgetPasswordReferralMerge from "./ForgetPasswordReferralPage/ForgetPasswordReferralMerge/ForgetPasswordReferralMerge";
import SetNewPasswordReferralMerge from "./SetNewPasswordReferral/SetNewPasswordReferralMerge/SetNewPasswordReferralMerge";
import ReferralsHomepageMerge from "./ReferralsHomepage/ReferralsHomepageMerge/ReferralsHomepageMerge";
import EditReferalProfileMerge from "./EditReferalProfile/EditReferalProfileMerge/EditReferalProfileMerge";
import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  useEffect(() => {
    runScript();
    console.log("fucntion call");
  }, []);

  const runScript = async () => {
    console.log("fucntion call 1");
    try {
      console.log("fucntion call 2");
      const clickUrlInput = window.location.href;
      const REFERRAL_LINK_START_WITH =
        process.env.REACT_APP_REFERRAL_LINK_START_WITH;
      console.log(clickUrlInput, "clickUrlInput");
      console.log(REFERRAL_LINK_START_WITH, "REFERRAL_LINK_START_WITH");
      if (clickUrlInput.startsWith(REFERRAL_LINK_START_WITH)) {
        const ipAddress = await getIPAddress();
        const response = await sendData(clickUrlInput, ipAddress);
        console.log(response.data); // Assuming the server responds with something meaningful
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getIPAddress = async () => {
    try {
      const response = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://api.ipify.org?format=json"
      );
      return response.data.ip;
    } catch (error) {
      console.error("IP Error:", error);
    }
  };

  const sendData = async (clickUrlInput, ipAddress) => {
    try {
      console.log("fucntion call 4");
      const response = await axios.post(
        "api/affiliate/clicks",
        {
          clickUrl: clickUrlInput,
          clickIP: ipAddress,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": "{{ csrf_token() }}", // Add CSRF token if needed
          },
        }
      );
      return response;
    } catch (error) {
      console.error("Clicked Error:", error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeMerge />} />
        <Route path="/contact_us" element={<ConatctUsPageMerge />} />
        <Route path="/about_us" element={<AboutUsMerge />} />
        <Route path="/integrations" element={<IntegrationsMerge />} />
        <Route
          path="/integrations/detail/:id"
          element={<IntegrationDetailMerge />}
        />

        <Route path="/services" element={<ServicesMerge />} />
        <Route path="/additionalservices" element={<AdditionalMerge />} />

        <Route path="/signup" element={<SignUpMerge />} />
        <Route path="/signin" element={<SignInMerge />} />
        <Route path="/auth/google" element={<GoogleRegister />} />
        <Route
          path="/google/registration"
          element={<GoogleRegistrationmerge />}
        />

        <Route path="/forget_password" element={<ForgetPasswordMerge />} />
        <Route
          path="/reset-password/:token/:email"
          element={<NewPasswordMerge />}
        />
        <Route path="/payment/:value" element={<PackagePayment />} />

        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id/:title" element={<BlogPostOpen />} />
        <Route path="/tags/:id" element={<BlogsTags />} />
        <Route path="/category/:id" element={<BlogsCategory />} />

        <Route path="/payment/success" element={<SuccessfulPayment />} />
        <Route path="/payment/cancel" element={<CancelPayment />} />

        <Route path="/dashboard" element={<DashboardPanelMain />} />
        <Route path="/admindashboard" element={<AdminDashboardmerge />} />

        <Route
          path="/referral/registration"
          element={<ReferralseRegistraionMerge />}
        />
        <Route path="/referral/signin" element={<ReferralsSigninMerge />} />
        <Route
          path="/referral/forget_password"
          element={<ForgetPasswordReferralMerge />}
        />
        <Route
          path="/referral/reset-password/:token/:email"
          element={<SetNewPasswordReferralMerge />}
        />
        <Route path="/referral/dashboard" element={<ReferalDashboardMerge />} />
        <Route path="/referral/homepage" element={<ReferralsHomepageMerge />} />
        <Route
          path="/referral/edit/profile"
          element={<EditReferalProfileMerge />}
        />
      </Routes>
    </Router>
  );
}

export default App;
