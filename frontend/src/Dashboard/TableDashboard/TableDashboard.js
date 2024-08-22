import React from "react";
import "./../TableDashboard/TableDashboardStyle.css";
import deletebutton from "./../../Assets/delete_button_service.png";
import deletebuttonhover from "./../../Assets/delete_hover_service.png";
function TableDashboard() {
  const handleHover = (buttonId) => {
    document.getElementById(buttonId).src = deletebuttonhover;
  };

  const handleLeave = (buttonId) => {
    document.getElementById(buttonId).src = deletebutton;
  };

  return (
    <div className="main_div_table_dashboard">
      <div className="row m-0 p-0">
        <div className="col-lg-1 col-md-1 col-1 "></div>
        <div className="col-lg-10 col-md-10 col-10 ">
          <div className="main_div_tablestriped">
            <p className="heading_table_striped">Your Services Details</p>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Services</th>
                  <th scope="col">Total Order</th>
                  <th scope="col">Type</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Smrtphone integration</td>
                  <td>2035</td>
                  <td>fkopa</td>
                  <td>@$153.00</td>
                  <td>
                    <button className="button_style_paid_blue">Paid</button>
                  </td>
                  <td>
                    <a
                      className="button_style_deleteservice"
                      onMouseEnter={() => handleHover("deleteButton1")}
                      onMouseLeave={() => handleLeave("deleteButton1")}
                    >
                      <img
                        id="deleteButton1"
                        src={deletebutton}
                        alt="Delete Button"
                      />
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>Smrtphone integration</td>
                  <td>2035</td>
                  <td>fkopa</td>
                  <td>@$153.00</td>
                  <td>
                    <button className="button_style_Pending_orange">
                      Pending
                    </button>
                  </td>
                  <td>
                    {" "}
                    <a
                      className="button_style_deleteservice"
                      onMouseEnter={() => handleHover("deleteButton2")}
                      onMouseLeave={() => handleLeave("deleteButton2")}
                    >
                      <img
                        id="deleteButton2"
                        src={deletebutton}
                        alt="Delete Button"
                      />
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>Smrtphone integration</td>
                  <td>2035</td>
                  <td>fkopa</td>
                  <td>@$153.00</td>
                  <td>
                    <button className="button_style_denied_red">Denied</button>
                  </td>
                  <td>
                    {" "}
                    <a
                      className="button_style_deleteservice"
                      onMouseEnter={() => handleHover("deleteButton3")}
                      onMouseLeave={() => handleLeave("deleteButton3")}
                    >
                      <img
                        id="deleteButton3"
                        src={deletebutton}
                        alt="Delete Button"
                      />
                    </a>
                  </td>
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

export default TableDashboard;
