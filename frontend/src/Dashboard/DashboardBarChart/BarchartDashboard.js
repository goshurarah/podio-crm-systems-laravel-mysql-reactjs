import React, { useEffect, useRef } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import "./../DashboardBarChart/BarchartStyle.css";
import master_card from "./../../Assets/master_card.png";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const CanvasJS = CanvasJSReact.CanvasJS;

function BarchartDashboard() {
  const chartRef = useRef(null);

  const options = {
    animationEnabled: true,
    title: {
      text: "Your Integrations",
      //   horizontalAlign: "left",
      fontColor: "#1D4480",
      fontFamily: "'Poppins', sans-serif",
      fontSize: 24,
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      marginBottom: 3,
    },
    axisY: {
      title: " ",
      interval: 10,
      gridColor: "#DDDDDD",
    },
    axisX: {
      title: " ",
      interval: 1,
      labelAngle: 0,
      padding: 30,
      gridColor: "#DDDDDD",
    },
    dataPointWidth: 14,
    data: [
      {
        type: "stackedColumn",
        name: "Smartphone",
        color: "#FF9900",
        text: "center",
        leadingTrim: "both",
        textEdge: "cap",
        fontFamily: "Rubik",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "normal",
        showInLegend: true,
        gap: 25,
        dataPointWidth: 5,
        dataPoints: [
          { label: "Jan", y: 20, color: "#FF9900" },
          { label: "Feb", y: 40, color: "#FF9900" },
          { label: "Mar", y: 60, color: "#FF9900" },
          { label: "Apr", y: 30, color: "#FF9900" },
          { label: "May", y: 28, color: "#FF9900" },
          { label: "Jun", y: 38, color: "#FF9900" },
          { label: "Jul", y: 18, color: "#FF9900" },
          { label: "Aug", y: 8, color: "#FF9900" },
          { label: "Sep", y: 11, color: "#FF9900" },
          { label: "Oct", y: 22, color: "#FF9900" },
          { label: "Nov", y: 33, color: "#FF9900" },
          { label: "Dec", y: 1, color: "#FF9900" },
        ],
      },
      {
        type: "stackedColumn",
        name: "Rapidskip",
        color: "#2C70D6",
        text: "center",
        leadingTrim: "both",
        textEdge: "cap",
        fontFamily: "Rubik",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "normal",
        showInLegend: true,
        dataPointWidth: 5,
        gap: 25,
        dataPoints: [
          { label: "Jan", y: 5, color: "#2C70D6" },
          { label: "Feb", y: 10, color: "#2C70D6" },
          { label: "Mar", y: 15, color: "#2C70D6" },
          { label: "Apr", y: 30, color: "#2C70D6" },
          { label: "May", y: 28, color: "#2C70D6" },
          { label: "Jun", y: 28, color: "#2C70D6" },
          { label: "Jul", y: 28, color: "#2C70D6" },
          { label: "Aug", y: 28, color: "#2C70D6" },
          { label: "Sep", y: 28, color: "#2C70D6" },
          { label: "Oct", y: 28, color: "#2C70D6" },
          { label: "Nov", y: 28, color: "#2C70D6" },
          { label: "Dec", y: 100, color: "#2C70D6" },
        ],
      },
    ],
  };

  //round  graph

  useEffect(() => {
    const chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true, // change to false
      title: {
        text: "Top Services",
        horizontalAlign: "left",
        fontColor: "#1D4480",
        fontFamily: "'Poppins', sans-serif",
        fontSize: 24,
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "normal",
      },
      data: [
        {
          type: "doughnut",
          showInLegend: true,
          indexLabel: "{name}: {y}", // Display data name and value in the legend
          innerRadius: "80%",
          dataPoints: [
            {
              x: 2,
              y: 50,
              name: "Smartphone",
              //   legendText: "Service 1",
              color: "#2C70D6",
            },
            {
              x: 2,
              y: 18,
              name: "podiocrm",
              //   legendText: "Service 1",
              color: "#00B5E3",
            },
            {
              x: 2,
              y: 41,
              name: "batchleads",
              //   legendText: "Service 1",
              color: "#FF9900",
            },
            {
              x: 2,
              y: 21,
              name: "abc",
              //   legendText: "Service 1",
              color: "#1D4480",
            },
          ],
        },
      ],
    });

    chart.render();

    // Cleanup the chart when the component unmounts
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="main_div_barchartdashboard">
      <div className="row p-0 m-0">
        <div className="col-lg-1 col-md-1 col-1"></div>
        <div className="col-lg-10 col-md-10 col-10">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="main_div_bar_chart">
                <CanvasJSChart options={options} />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="main_div_round_graph">
                <div
                  id="chartContainer"
                  style={{ height: "auto", width: "99%" }}
                ></div>
                <div
                  style={{
                    marginTop: "16px",
                    color: "dimgrey",
                    fontSize: "6px",
                    fontFamily: "Verdana, Arial, Helvetica, sans-serif",
                    textDecoration: "none",
                  }}
                ></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="main_div_payment_card_dashboard">
                <p className="para_in_cardpayment_dashboard">Payment</p>
                <div className="main_div_card_payment_grey">
                  <div className="d-flex justify-content-between">
                    <p className="card_holder_name">David Stone</p>
                    <img
                      src={master_card}
                      className="image_style_cardpayment"
                    />
                  </div>
                  <p className="card_number_payment">Card Number</p>
                  <p className="card_number_digits">4950 45XX XXXX XXXX</p>

                  <div className="d-flex justify-content-between">
                    <div>
                      <p className="card_number_payment">Expiry Date</p>
                      <p className="card_number_digits">12/24</p>
                    </div>
                    <div>
                      <p className="card_number_payment">CVV</p>
                      <p className="card_number_digits">495</p>
                    </div>
                  </div>
                </div>

                <button className="update_button_payment_card">Update </button>
              </div>

              <div className="blue_div_below_cardpayment "></div>
            </div>
          </div>
        </div>
        <div className="col-lg-1 col-md-1 col-1 "></div>
      </div>
    </div>
  );
}

export default BarchartDashboard;
