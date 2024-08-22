import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "./../GoogleRegisteration/GoogleRegister.css";
import Loader from "../Loader/Loader";

function GoogleRegister() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  const getuserdata = () => {
    const token = localStorage.getItem("token");
    const axiosInstance = axios.create({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    axiosInstance
      .get("/api/get-user-email")
      .then((res) => {
        console.log(res, "email getting for google redirection");
        if (res.data.phone == null && res.data.company == null) {
          navigate("/google/registration");
        } else {
          navigate("/dashboard");
        }
      })
      .catch((e) => {
        if (e.response.status === 404) {
        } else {
        }
      });
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const paramValue = queryParams.get("code");

    if (paramValue) {
      axios
        .get(`/api/auth/google/callback?code=${paramValue}`, {
          headers: { accept: "application/json" },
        })
        .then((response) => {
          console.log(response, "getting response token from callback");
          setData(response.data);
          localStorage.setItem(
            "token",
            response.data.access_token.plainTextToken
          );
          localStorage.setItem("email", response.data.user.email);
          setTimeout(() => {
            getuserdata(); // Call getuserdata function here
          }, 5000);

          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex justify-content-row">
        {/* <div className="text_alingn_center_para_google">
          {data.user && <p>Redirecting</p>}
        </div> */}
        <div className="mt-3">
          <Loader />
        </div>
      </div>
    </div>
  );
}

export default GoogleRegister;
