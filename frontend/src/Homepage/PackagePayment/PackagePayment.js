import React, { useState } from "react";
import {
  ApplePay,
  GooglePay,
  CreditCard,
  PaymentForm,
} from "react-square-web-payments-sdk";
import "./../PackagePayment/PackagePaymentStyle.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import NotificationDisplay from "../../NotficationDisplay/NotificationDisplay";
function PackagePayment() {
  const { value } = useParams();
  const [notificationMessage, setNotificationMessage] = useState("");
  // Hardcoded locationId
  const locationId = "LYVFGSS8HRV8B";
  const token = localStorage.getItem("token");
  const axiosInstance = axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const handleCardTokenizeResponse = async (token, verifiedBuyer) => {
    try {
      const response = await axiosInstance.post("/api/process-payment", {
        sourceId: token.token,
        amount: value,
      });
      setNotificationMessage(response?.data?.message);
      setTimeout(() => {
        setNotificationMessage("");
      }, 4000);
      
    } catch (error) {
      console.error("Error processing payment:", error);
      setNotificationMessage("Error processing payment");
      setTimeout(() => {
        setNotificationMessage("");
      }, 4000);
    }
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="main_div_payment_package">
        <PaymentForm
          applicationId="sandbox-sq0idb-pWYACEeFAJT1rRS4Fjwcnw"
          cardTokenizeResponseReceived={handleCardTokenizeResponse}
          createPaymentRequest={() => ({
            countryCode: "US",
            currencyCode: "USD",
            total: {
              amount: value,
              label: "Total",
            },
          })}
          locationId={locationId}
        >
          <ApplePay />
          <GooglePay />
          <CreditCard
            buttonProps={{
              css: {
                backgroundColor: "#771520",
                fontSize: "14px",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#530F16",
                },
              },
            }}
          />
        </PaymentForm>
      </div>
      <NotificationDisplay message={notificationMessage} />
    </div>
  );
}
export default PackagePayment;
