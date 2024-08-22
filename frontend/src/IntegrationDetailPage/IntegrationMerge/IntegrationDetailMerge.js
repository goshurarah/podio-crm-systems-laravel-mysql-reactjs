import React, { useEffect, useState } from "react";
import IntegrationNavbar from "../../IntegrationsPage/IntegrationNavbar/IntegrationNavbar";
import IntegrationDetail from "../IntegrationDetail/IntegrationDetail";
import Form from "../../Homepage/FormGetInTouch/Form";
import MapHomepage from "../../Homepage/MapInHomepage/MapHomepage";
import Faq from "../../Homepage/Faq/Faq";
import Footer from "../../Homepage/FooterPodiocrmsystems/Footer";
import EndFooter from "../../Homepage/End_Footer/EndFooter";

function IntegrationDetailMerge() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
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
      <IntegrationNavbar />
      <IntegrationDetail />
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
    </div>
  );
}

export default IntegrationDetailMerge;
