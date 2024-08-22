import React from "react";
import "./../End_Footer/EndFooterStyle.css";
import podioicon from "./../../Assets/1.png";
import { Link } from "react-router-dom";

function EndFooter() {
  return (
    <div className="main_div_end_footer">
      <div className="container">
        <div className="d-flex justify-content-between">
          <Link to="/">
            <img src={podioicon} className="icon_end_footer" alt="podiologo" />
          </Link>
          <div className="d-flex flex-row">
            <p className="para_in_end_footer">© 2023</p>{" "}
            <p className="para_orange_in_end_footer">PodioCRM System</p>{" "}
            <p className="para_in_end_footer">all rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EndFooter;
