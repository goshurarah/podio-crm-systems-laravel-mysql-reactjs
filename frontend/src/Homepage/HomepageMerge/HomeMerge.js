import React, { useEffect, useState } from "react";
import axios from "axios";
import Crmandpodio from "../CrmandPodioexcellencemeet/Crmandpodio";
import PodioCrmPara from "../PodiocrmPara/PodioCrmPara";
import AutomatedRunning from "../AutomatedrunningNumbers/AutomatedRunning";
import LogoTransition from "../LogoTransitions/LogoTransition";
import WhyUs from "../WhyUs/WhyUs";
import Testimoials from "../Testimonials/Testimoials";
import Form from "../FormGetInTouch/Form";
import MapHomepage from "../MapInHomepage/MapHomepage";
import Faq from "../Faq/Faq";
import Footer from "../FooterPodiocrmsystems/Footer";
import EndFooter from "../End_Footer/EndFooter";
import PricingPackages from "../PricingPackages/PricingPackages";
import OtherServicesAdds from "../OtherServicesAdds/OtherServicesAdds";
import HirePerHour from "../HirePerHour/HirePerHour";

function HomeMerge() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    // Show the scroll-to-top button when the user has scrolled down
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    scrollToTop();
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const getAllCookies = () => {
    const cookies = document.cookie.split(";").reduce((cookies, cookie) => {
      const [name, value] = cookie.trim().split("=");
      cookies[name] = value;
      return cookies;
    }, {});
    return cookies;
  };
  const cookies = getAllCookies();
  console.log(cookies, "cookies");

  // Function to post cookies data
  const postCookies = async () => {
    const cookies = getAllCookies();

    try {
      const response = await axios.post("", cookies);

      console.log("Cookies posted successfully:", response.data);
    } catch (error) {
      console.error("Error posting cookies:", error);
    }
  };

  return (
    <>
      <Crmandpodio />
      <PodioCrmPara />
      <AutomatedRunning />
      <LogoTransition />
      <WhyUs />
      <HirePerHour />
      <PricingPackages />
      {/* <OtherServicesAdds/> */}
      <Testimoials />
      <Form />
      <MapHomepage />
      <Faq />
      <Footer />
      <EndFooter />

      <>
        {isVisible && (
          <button onClick={scrollToTop} className="scroll-to-top-button">
            <span>&uarr;</span>
          </button>
        )}
      </>
    </>
  );
}

export default HomeMerge;
