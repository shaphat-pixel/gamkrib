import React from "react";
import logo from "../../asserts/images/GAMKRIB.png";
import "../../styles/footer.css";

export const FooterComponent = () => {
  return (
    <div className="container-fluid footer ">
      <div className="row p-2">
        <div className=" col-4"></div>
        <div className=" col-4 d-flex justify-content-center ">
          <img className="logo" src={logo} width="40px" height="50px" />
        </div>
        <div className=" col-4"></div>
      </div>
      <div className=""></div>
    </div>
  );
};
