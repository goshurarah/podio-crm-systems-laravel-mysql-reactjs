import React from "react";
import "./../OtherServicesAdds/OtherServicesAdds.css";
import rapidskipicon from "./../../Assets/rapidskipicon.png";
import rapidskippic from "./../../Assets/rapid-skip-tracing.png";
import settingicon from "./../../Assets/settingicon.png";
import laptopicon from "./../../Assets/laptoprapidskipicpon.png";

function OtherServicesAdds() {
  return (
    <div className="main_div_otherservicesadds">
      <div className="our_pricing_center_otherservicesadds">
        <div className="d-flex justify-content-center">
          <div className="hr_line_pricng_orange_otherservicesadds" />
          <p className="our_pricing_text_otherservicesadds">Our Pricing</p>
          <div className="hr_line_pricng_orange_otherservicesadds" />
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <p className="choose_for_best_text_black">Choose Your Best</p>
        <p className="pricing_plans_orange"> Pricing Plans</p>
      </div>

      <div className="container">
        <div className="div_card_rapidskip row">
          <div className="col-lg-4 col-md-4 col-4">
            <img
              src={rapidskipicon}
              className="rapidskipiconstyle"
              alt="serviceslogo"
            />
          </div>
          <div className="col-lg-8 col-md-8 col-8">
            <img
              src={rapidskippic}
              className="rapidskippicstyle"
              alt="serviceslogo"
            />
            <div className="main_div_per_record">
              <p className="para_in_rapid_skip">
                THE DAYS OF OVERSPENDING ARE OVER! The Most Affordable
                Skiptracing in Existence. We offer 2 simple plans. Whether you
                choose a monthly membership or standard account, RapidSkip
                Tracing gives you access to the Most Accurate DATA at the BEST
                PRICE! Create an account today & start finding the right sellers
                for your business.
              </p>

              <div className="d-flex justify-content-between">
                <div>
                  <div className="d-flex flex-row">
                    <p className="dollar_price_rapidskip">$0.07 /</p>
                    <p className="record_rapidskip">record</p>
                  </div>
                  <p className="minorder_rapidskip m-0 p-0">
                    *min order 10,000 records
                  </p>
                  <div className="main_div_button_discover">
                    <button className="discovermore_rapidskip">
                      <img src={settingicon} alt="serviceslogo" /> Discover More
                    </button>
                  </div>
                </div>

                <div>
                  <img
                    src={laptopicon}
                    className="m-0 p-0"
                    alt="serviceslogo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherServicesAdds;
