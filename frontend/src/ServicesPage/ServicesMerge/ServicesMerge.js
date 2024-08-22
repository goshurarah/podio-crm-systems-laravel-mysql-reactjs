import React, { useEffect, useState } from "react";
import ServicesNavbar from "../ServicesNavbar/ServicesNavbar";
import ServicesDetails from "../ServicesDetails/ServicesDetails";
import Form from "../../Homepage/FormGetInTouch/Form";
import MapHomepage from "../../Homepage/MapInHomepage/MapHomepage";
import Faq from "../../Homepage/Faq/Faq";
import Footer from "../../Homepage/FooterPodiocrmsystems/Footer";
import EndFooter from "../../Homepage/End_Footer/EndFooter";
import ServicesInclude from "../ServicesInclude/ServicesInclude";

function ServicesMerge() {
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
      <ServicesNavbar />
      <ServicesDetails />
      <ServicesInclude />
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

export default ServicesMerge;
