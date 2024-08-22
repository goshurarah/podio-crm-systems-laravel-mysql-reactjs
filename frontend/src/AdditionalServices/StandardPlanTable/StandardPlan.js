import React from "react";
import "./../StandardPlanTable/StandardPlanStyle.css";
import deletebutton from "./../../Assets/delete_button_service.png";
import deletebuttonhover from "./../../Assets/delete_hover_service.png";
function StandardPlan() {
  return (
    <div className="main_div_table_additionalservices">
      <div className="row m-0 p-0">
        <div className="col-lg-1 col-md-1 col-1 "></div>
        <div className="col-lg-10 col-md-10 col-10 ">
          <div className="main_div_tablestriped_additionalservices">
            <div className="d-flex flex-row">
              {" "}
              <p className="heading_table_striped_additionalservices">
                Standard Plan
              </p>
              <p className="price_standardplan_additional">$850</p>
            </div>

            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">No.</th>
                  <th scope="col">Services</th>
                  <th scope="col">
                    <label for="standardservicescharges">Select</label>
                    <input
                      type="checkbox"
                      id="standardservicescharges"
                      name="standardservicescharges"
                      value="standardservicescharges"
                      class="styled-checkbox"
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>1</td>

                  <td>Complete Lead Life Cycle</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>2</td>

                  <td>Communication with Lead by Podio Email.</td>
                  <td></td>
                </tr>

                <tr>
                  <td></td>
                  <td>3</td>

                  <td>Property Details.</td>
                  <td></td>
                </tr>

                <tr>
                  <td></td>
                  <td>4</td>

                  <td>Communication History (Email/Text/VM).</td>
                  <td></td>
                </tr>

                <tr>
                  <td></td>
                  <td>5</td>

                  <td>
                    Lead assignment to Accusation Managers using Round Robin.
                  </td>
                  <td></td>
                </tr>

                <tr>
                  <td></td>
                  <td>6</td>

                  <td>Lead assignment to Follow-up manager.</td>
                  <td></td>
                </tr>

                <tr>
                  <td></td>
                  <td>7</td>

                  <td>Lead tracking by different statuses.</td>
                  <td></td>
                </tr>

                <tr>
                  <td></td>
                  <td>8</td>

                  <td>Reminders for Lead owners.</td>
                  <td></td>
                </tr>

                <tr>
                  <td></td>
                  <td>9</td>

                  <td>
                    MAO Offer calculator with different percentages to get Max
                    Allowable Offer.
                  </td>
                  <td></td>
                </tr>

                <tr>
                  <td></td>
                  <td>10</td>

                  <td>Tasks for team members.</td>
                  <td></td>
                </tr>

                <tr>
                  <td></td>
                  <td>11</td>

                  <td>Deal Tracking.</td>
                  <td></td>
                </tr>

                <tr>
                  <td></td>
                  <td>12</td>

                  <td>Projected Price, ARV, Profit.</td>
                  <td></td>
                </tr>

                <tr>
                  <td></td>
                  <td>13</td>

                  <td>
                    Drip / Follow UP System inclusive of multiple follow-up
                    sequence templates as well as follow-up message templates
                    with placeholders.
                  </td>
                  <td></td>
                </tr>

                <tr>
                  <td></td>
                  <td>14</td>

                  <td>Daily Reports to track teams’ work.</td>
                  <td></td>
                </tr>

                <tr>
                  <td></td>
                  <td>15</td>

                  <td>Buyers Database.</td>
                  <td></td>
                </tr>

                <tr>
                  <td></td>
                  <td>16</td>

                  <td>Appointments.</td>
                  <td></td>
                </tr>

                <tr>
                  <td></td>
                  <td>17</td>

                  <td>Campaigns Tracking.</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-lg-1 col-md-1 col-1 "></div>
      </div>
    </div>
  );
}

export default StandardPlan;
