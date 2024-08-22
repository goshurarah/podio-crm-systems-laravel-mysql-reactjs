import React from "react";
import "./../ServicesDetails/ServicesDetailsStyle.css";
import onclick_photo from "./../../Assets/oneclickcanned_icon.png";
import automatic_purchase_photo from "./../../Assets/automatic_purchase_agreement.png";
import all_off_marketing_photo from "./../../Assets/all_of_marketing.png";
import thre_click_photo from "./../../Assets/three_click_comparable_search.png";
import your_entire_aquisition from "./../../Assets/your_entire_aquisition.png";
import powerfull_automation from "./../../Assets/powerfull_automation.png";
import one_place_for_everything from "./../../Assets/one_place_for_everything.png";
import kpis_icon from "./../../Assets/kpis_icon.png";

function ServicesDetails() {
  return (
    <div className="container">
      <div className="main_div_services">
        <div className="main_div_heading_servies">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <p className="black_heading_services">One-Click "Canned </p>
              <p className="orange_heading_services">Responses</p>

              <div className="d-flex flex-row">
                <div className="hr_line_services_orange" />
                <div className="hr_line_services" />
              </div>

              <p className="light_para_below_services_heading">
                No more calling or texting leads off your cell phone as they
                progress through the phases of a deal. Ready to present them
                your offer? Click one button and send your instant "Offer"
                canned response. The lead will get a text with their offer
                amount, an email, and even a voicemail to go and check their new
                offer that they can find in their inbox! You can have unlimited
                canned responses and make new ones at any time.
              </p>
              <p className="bold_para_below_services_heading">
                Per Lead Time Savings: 8 Mins Per Lead Savings at 125 Leads/Mo:
                200 Hours or 8.3 Days of Work
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <img
                src={onclick_photo}
                className="photo_style_servies"
                alt="servicedetiallogo"
              />
            </div>
          </div>
        </div>

        <div className="main_div_heading_servies">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <img
                src={automatic_purchase_photo}
                className="photo_style_automatic_purchase"
                alt="servicedetiallogo"
              />
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <p className="black_heading_services">
                Automatic Purchase Agreement{" "}
              </p>
              <p className="orange_heading_services">Creation and Delivery</p>

              <div className="d-flex flex-row">
                <div className="hr_line_services_orange" />
                <div className="hr_line_services" />
              </div>

              <p className="light_para_below_services_heading">
                Instantly generate custom purchase agreements at the click of a
                button, automatically pre-filled with data pulled in from the
                seller lead file. Click another button to deliver the agreement
                for e-signature on the sellers mobile or desktop device. the
                seller is automatically followed up with to sign, and once they
                do the completed doc is attached right into their Podio file.
              </p>
              <p className="bold_para_below_services_heading">
                Per Lead Time Savings: 35 Mins Per Lead Savings at 125 Leads/Mo:
                875 Hours or 36.5 Days of Work
              </p>
            </div>
          </div>
        </div>

        <div className="main_div_heading_servies">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <p className="black_heading_services">All of Your Marketing, </p>
              <p className="orange_heading_services">Simplified</p>

              <div className="d-flex flex-row">
                <div className="hr_line_services_orange" />
                <div className="hr_line_services" />
              </div>

              <p className="light_para_below_services_heading">
                By having all seller leads, offers, contracts, and closings
                attributed to the single marketing campaign where the lead
                originated, you will be able to pull more in-depth stats than
                ever. Make quick marketing decisions based on live data using 9
                stat and dollar based performance metrics. Marketing Cost Per
                Closing, Cost per Deal, Response Rate %, Closing Rate % and
                More!
              </p>
              <p className="bold_para_below_services_heading">
                Potential Marketing Budget Savings Per Campaign: $300 to $4000
              </p>
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <img
                src={all_off_marketing_photo}
                className="all_off_marketing_photo_style"
                alt="marketinglogo"
              />
            </div>
          </div>
        </div>

        <div className="main_div_heading_servies">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <img
                src={thre_click_photo}
                className="photo_style_three_click"
                alt="marketinglogo"
              />
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <p className="black_heading_services">Three-Click" Comparable</p>
              <p className="orange_heading_services">
                Research on All Seller Leads
              </p>

              <div className="d-flex flex-row">
                <div className="hr_line_services_orange" />
                <div className="hr_line_services" />
              </div>

              <p className="light_para_below_services_heading">
                On every seller lead, a unique link to comparable solds from
                Zillow.com, Redfin.com, Realestate.com, and
                Totalviewrealestate.com are generated. Click on the links, copy
                over the square footage and sold price into podio and the system
                will automatically estimate the ARV of your new lead!
              </p>
            </div>
          </div>
        </div>

        <div className="main_div_heading_servies">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <p className="black_heading_services">
                Your Entire Acquisitions and
              </p>
              <p className="orange_heading_services">
                Dispositions Pipeline, In Perfect Sync.
              </p>

              <div className="d-flex flex-row">
                <div className="hr_line_services_orange" />
                <div className="hr_line_services" />
              </div>

              <p className="light_para_below_services_heading">
                Second to its Automations, the real power in GlobiFlow combined
                with Podio is its ability to look to other places in your
                organization for information. No more double data entry. Enter
                in a Properties details once when a lead comes in and the data
                will be seamlessly carried through each workflow application
                until the final "Closing"  and "Dispositions" sections. Actions
                are tracked every step of the way to give your business
                actionable KPIs to make important efficiency tweaks and changes
                from.
              </p>
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <img
                src={your_entire_aquisition}
                className="your_entire_photo_style"
                alt="marketinglogo"
              />
            </div>
          </div>
        </div>

        <div className="main_div_heading_servies">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <img
                src={powerfull_automation}
                className="photo_style_powerfull"
                alt="marketinglogo"
              />
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <div className="d-flex flex-row">
                <p className="powerfull_heading_services">Powerful</p>
                <p className="orange_heading_services_automations">
                  Automations
                </p>
              </div>

              <div className="d-flex flex-row">
                <div className="hr_line_services_orange" />
                <div className="hr_line_services" />
              </div>

              <p className="light_para_below_services_heading">
                On every seller lead, a unique link to comparable solds from
                Zillow.com, Redfin.com, Realestate.com, and
                Totalviewrealestate.com are generated. Click on the links, copy
                over the square footage and sold price into podio and the system
                will automatically estimate the ARV of your new lead!
              </p>
              <p className="bold_para_below_services_heading">
                77 Pre-Built Automations Streamline your Daily Workflows, and
                bring back valuable time to your teams schedule. 
              </p>
            </div>
          </div>
        </div>

        <div className="main_div_heading_servies">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="d-flex flex-row">
                <p className="powerfull_heading_services">One Place For </p>
                <p className="orange_heading_services_automations">
                  Everything
                </p>
              </div>

              <div className="d-flex flex-row">
                <div className="hr_line_services_orange" />
                <div className="hr_line_services" />
              </div>

              <p className="light_para_below_services_heading">
                Gone are the days of jumping through 5 different softwares and
                spreadsheets to see your information. Find everything and
                communicate with the entire team in one place by tagging them on
                leads (like twitter or facebook) and easily delegating tasks.
              </p>
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <img
                src={one_place_for_everything}
                className="photo_style_oneplace"
                alt="marketinglogo"
              />
            </div>
          </div>
        </div>

        <div className="main_div_heading_servies">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <img
                src={kpis_icon}
                className="photo_style_kpis"
                alt="servicedetiallogo"
              />
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <div className="d-flex flex-row">
                <p className="powerfull_heading_services">Track </p>
                <p className="orange_heading_services_automations">
                  Critical KPI's
                </p>
              </div>

              <div className="d-flex flex-row">
                <div className="hr_line_services_orange" />
                <div className="hr_line_services" />
              </div>

              <p className="light_para_below_services_heading">
                Acquisitions is All About Marketing and the KPIs throughout the
                deal progression. See a Breakdown of all Critical KPI's, and
                fine tune your business from a "Shotgun" into a "Rifle"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesDetails;
