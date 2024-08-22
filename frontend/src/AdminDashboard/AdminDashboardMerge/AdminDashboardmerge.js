import React, { useEffect } from "react";
import AdminDashboardNavbar from "../AdminDashboardNavbar/AdminDashboardNavbar";
import Footer from "../../Homepage/FooterPodiocrmsystems/Footer";
import EndFooter from "../../Homepage/End_Footer/EndFooter";
import AddBlogs from "../AddBlogs/AddBlogs";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminDashboardmerge() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  }, [token, navigate]);

  return (
    <div>
      <AdminDashboardNavbar />
      <AddBlogs />
      <Footer />
      <EndFooter />
    </div>
  );
}

export default AdminDashboardmerge;
