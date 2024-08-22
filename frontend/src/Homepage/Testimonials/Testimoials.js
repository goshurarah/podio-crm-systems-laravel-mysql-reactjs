import React, { useEffect, useState } from "react";
import "./../Testimonials/TestimonialsStyle.css";
import Slider from "react-slick";
import image1 from "./../../Assets/img for testimonial.png";
import image2 from "./../../Assets/testi2.png";
import star_icon_testi from "./../../Assets/star_icon_testi.png";
import { Link } from "react-router-dom";
import axios from "axios";

function Testimoials() {
  const [reviewsdata, setreviewsdata] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    getReviewsData();
  }, []);

  const getReviewsData = () => {
    axios
      .get(`/api/reviews`, {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      })
      .then((res) => {
  
        setreviewsdata(res.data);
      })
      .catch((error) => {
        console.error("Error fetching reviews data:", error);
        setError("Error fetching reviews data");
      });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="main_div_testimonials">
      <div className="container">
        <div className="d-flex flex-row">
          <div className="line_orange_testimonials"></div>
          <p className="testimonials_heading_orange">Testimonials</p>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <p className="testimonial_white_heading">
              Consen Trusted Customers
            </p>
            <div className="d-flex flex-row">
              <Link to="/contact_us">
                <p className="testimonial_white_heading">Awesome</p>
              </Link>
              <p className="testimonial_heading_orange">Reviews</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-6">
            <div className="d-flex justify-content-end">
              <p className="testimonial_number_white_heading">1,372</p>
              <p className="testimonial_number_heading_orange">+</p>
            </div>
            <div className="d-flex justify-content-end">
              <p className="inside_testimonials_para">Happy Customers</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-6">
            <div className="d-flex justify-content-end">
              <p className="testimonial_number_white_heading">100</p>
              <p className="testimonial_number_heading_orange">%</p>
            </div>
            <div className="d-flex justify-content-end">
              <p className="inside_testimonials_para">Satisfaction Rate</p>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <Slider {...settings}>
            {reviewsdata
              ? reviewsdata?.map((data, index) => {
                  return (
                    <div className="main_div_testimonials_card" key={index}>
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-1 col-md-1 col-1"></div>
                          <div className="col-lg-2 col-md-2 col-2 mt-4">
                            <div className="d-flex fles-row">
                              <img
                                src={data?.profile_pic}
                                className="main_image_for_testimonials"
                              />
                              <img
                                src={image2}
                                className="dotted_image_for_testimonials"
                              />
                            </div>
                          </div>
                          <div className="col-lg-1 col-md-1 col-1"></div>
                          <div className="col-lg-8 col-md-8 col-8">
                            <p className="black_heading_testi_card">
                              {data?.user_name.length > 25
                                ? `${data?.user_name.substring(0, 25)}...`
                   ``             : data?.user_name}
                            </p>
                            <p className="orange_heading_testi_card">
                              {data?.designation.length > 25
                                ? `${data?.designation.substring(0, 25)}...`
                                : data?.designation}
                            </p>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-1 col-md-1 col-1"></div>
                          <div className="col-lg-10 col-md-10 col-10">
                            <p className="para_in_card_testimonials">
                              {data?.review.length > 100
                                ? `${data?.review.substring(0, 110)}...`
                                : data?.review}
                            </p>
                            <div className="d-flex flex-row">
                              <img
                                src={star_icon_testi}
                                className="mr-1"
                                alt="testimonialogo"
                              />
                              <img
                                src={star_icon_testi}
                                className="mr-1"
                                alt="testimonialogo"
                              />
                              <img
                                src={star_icon_testi}
                                className="mr-1"
                                alt="testimonialogo"
                              />
                              <img
                                src={star_icon_testi}
                                className="mr-1"
                                alt="testimonialogo"
                              />
                              <img
                                src={star_icon_testi}
                                className="mr-1"
                                alt="testimonialogo"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimoials;
