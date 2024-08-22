import React, { useEffect, useState } from "react";
import "./../DashboardPanelMain/DashboardPanelMainStyle.css";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import TotalNumberModules from "../TotalNumbersModule/TotalNumberModules";
import BarchartDashboard from "../DashboardBarChart/BarchartDashboard";
import TableDashboard from "../TableDashboard/TableDashboard";
import Footer from "../../Homepage/FooterPodiocrmsystems/Footer";
import EndFooter from "../../Homepage/End_Footer/EndFooter";
import LinkAdditionalServices from "../LinkAdditionalService/LinkAdditionalServices";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function DashboardPanelMain() {
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

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  }, [token, navigate]);

  return (
    <div>
      <DashboardNavbar />
      {/* <LinkAdditionalServices/> */}
      <TotalNumberModules />
      <BarchartDashboard />
      <TableDashboard />
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

export default DashboardPanelMain;
