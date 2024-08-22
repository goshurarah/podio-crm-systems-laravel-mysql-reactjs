import React from "react";
import EditReferalProfileNavbar from "../EditReferalProfileNavbar/EditReferalProfileNavbar";
import EditReferalProfileForm from "../EditReferalProfileForm/EditReferalProfileForm";
import Footer from "../../Homepage/FooterPodiocrmsystems/Footer";
import EndFooter from "../../Homepage/End_Footer/EndFooter";

function EditReferalProfileMerge() {
  return (
    <div>
      <EditReferalProfileNavbar />
      <EditReferalProfileForm />
      <Footer/>
      <EndFooter/>
    </div>
  );
}

export default EditReferalProfileMerge;
