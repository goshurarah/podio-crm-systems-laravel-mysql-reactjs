import React from "react";
import "./../LogoTransitions/LogoTransitionStyle.css";
import Slider from "react-slick";
import logono1 from "./../../Assets/logotransition1.png";
import logono2 from "./../../Assets/logotransition2.png";
import logono3 from "./../../Assets/logotransition3.png";
import logono4 from "./../../Assets/logotransition4.png";
import logono5 from "./../../Assets/logotransition5.png";

function LogoTransition() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="container">
      <p className="logo_para_transition">
        {" "}
        Trusted By 200 of the Best Real Estate Wholesale and Flipping Companies
        Nationwide
      </p>

      <div className="main_div_logo_transitions">
        <Slider {...settings}>
          <div>
            <img
              className="logo_style_transition"
              src={logono1}
              alt="transitionlogo"
            />
          </div>
          <div>
            <img
              className="logo_style_transition2"
              src={logono2}
              alt="transitionlogo"
            />
          </div>
          <div>
            <img
              className="logo_style_transition1"
              src={logono3}
              alt="transitionlogo"
            />
          </div>
          <div>
            <img
              className="logo_style_transition"
              src={logono4}
              alt="transitionlogo"
            />
          </div>
          <div>
            <img
              className="logo_style_transition5"
              src={logono5}
              alt="transitionlogo"
            />
          </div>

          <div>
            <img
              className="logo_style_transition"
              src={logono1}
              alt="transitionlogo"
            />
          </div>
          <div>
            <img
              className="logo_style_transition2"
              src={logono2}
              alt="transitionlogo"
            />
          </div>
          <div>
            <img
              className="logo_style_transition1"
              src={logono3}
              alt="transitionlogo"
            />
          </div>
          <div>
            <img
              className="logo_style_transition"
              src={logono4}
              alt="transitionlogo"
            />
          </div>
          <div>
            <img
              className="logo_style_transition5"
              src={logono5}
              alt="transitionlogo"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default LogoTransition;
