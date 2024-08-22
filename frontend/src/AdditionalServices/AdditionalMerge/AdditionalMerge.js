import React, { useEffect, useState } from "react";
import Footer from "../../Homepage/FooterPodiocrmsystems/Footer";
import EndFooter from "../../Homepage/End_Footer/EndFooter";
import Form from "../../Homepage/FormGetInTouch/Form";
import MapHomepage from "../../Homepage/MapInHomepage/MapHomepage";
import Faq from "../../Homepage/Faq/Faq";
import AdditionalServicetable from "../AdditionalServiceTable/AdditionalServicetable";
import AdditionalNavbar from "../AdditionalNavbar/AdditionalNavbar";

function AdditionalMerge() {
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
      <AdditionalNavbar />
      <AdditionalServicetable />
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

export default AdditionalMerge;
