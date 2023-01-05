import React from "react";
import logo from "../../asserts/images/GAMKRIB.png";
import "../../styles/footer.css";

import footerImage from "../../asserts/gamkribAsserts/footer-ghana.webp";
import { Link } from "react-router-dom";

export const FooterComponent = () => {
  let year = new Date();
  return (
    <>
      <div className="container-fluid d-flex justify-center">
        <img src={footerImage} className="container" opacity="0.2" />
      </div>
      <div className="container-fluid footer ">
        <div className="row p-2">
          <div className=" col-4"></div>
          <div className=" col-4 d-flex justify-content-center ">
            <img className="logo" src={logo} width="40px" height="50px" />
          </div>
          <div className=" col-4 d-flex justify-center row align-items-center ">
            <div>
              <div>
                <b>HOT LINKS</b>
              </div>
              <div>
                <Link to={"/about-us"}>
                  <b className=" text-success">About Us</b>
                </Link>
              </div>
              <div>
                <Link to={"/help-section"}>
                  <b className=" text-success">How To Advertise On GAMKRIB</b>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-3">
          <b className="text-center"> @ {year.getFullYear()} GAMKRIB</b>
        </div>
      </div>
    </>
  );
};