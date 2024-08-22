import React, { useEffect, useState } from "react";
import ReferralsHomepageNavbar from "../ReferralsHomepageNavbar/ReferralsHomepageNavbar";
import Faq from "../../Homepage/Faq/Faq";
import Footer from "../../Homepage/FooterPodiocrmsystems/Footer";
import EndFooter from "../../Homepage/End_Footer/EndFooter";
import Form from "../../Homepage/FormGetInTouch/Form";
import HowToEarnPassiveIncome from "../HowToEarnPassiveIncome/HowToEarnPassiveIncome";

function ReferralsHomepageMerge() {
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
  return (
    <div>
      <ReferralsHomepageNavbar />
      <HowToEarnPassiveIncome />

      <Form />
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
    </div>
  );
}

export default ReferralsHomepageMerge;
