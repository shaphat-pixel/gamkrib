import React from "react";
import landing from "../../asserts/images/RHPLF19901 copy.webp";
import "./landingPage.css";
import { SwiperComponent } from "./SwiperComponent";

import logo1 from "../../asserts/icons/check.png";
import logo2 from "../../asserts/icons/emoji.png";
import logo3 from "../../asserts/icons/location(1).png";
import { DetailsSlider } from "../discription/DescriptionComponent";

const LandingComponent = () => {
  return (
    <div>
      <div className="d-flex  row mb-5">
        <div className="col-12  margin-right margin-left padding-right padding-left mt-2 ">
          <img src={landing} width="100%" className="" />
          <div className="textClass text-center row">
            <di>
              <h1 className="display-4  d-sm-none d-lg-block ">
                <strong className="d-sm-none d-md-block">
                  We help you to save Time and Money on hostels!{" "}
                </strong>
              </h1>
              <p className="h1 d-sm-none d-md-block">
                Find best hostel deals on GAMKRIB
              </p>
            </di>
          </div>
        </div>
        <div className="px-5 justify-content-center align-items-center  col-12">
          <div className="pt-5 text-center">
            <div className="h3">
              <strong className="text-green">Save money and time</strong>
            </div>
            <p className="h1">
              <strong>
                We find the best Accommodation across Ghana for you at
              </strong>
            </p>
            <div>
              <SwiperComponent />
            </div>
          </div>
        </div>
        <div className="the-best py-5  container-fluid text-center  mt-5">
          <p>
            <b>Expect the Best</b>
          </p>
          <div className="my-5 row d-flex container-fluid   align-items-space-around  justify-content-around gab-3">
            <div className="card col-sm-10 col-md-3 cardWidth">
              <div>
                <img className="icon" src={logo2} />
              </div>
              <h2>Compare prices with 1 click</h2>
              <p>
                Compare prices from all major hostel booking websites with 1
                simple click
              </p>
            </div>
            <div className="card col-sm-10 col-md-3 cardWidth ">
              <div>
                <img className="icon" src={logo1} />
              </div>
              <h2>Genuine uncensored reviews you can trust</h2>
              <p>Non-biased reviews from real guests, readers and experts</p>
            </div>
            <div className="card col-sm-10 col-md-3 cardWidth p-4">
              <div>
                <img className="icon" src={logo3} />
              </div>
              <h2>Find every single hostel in the country </h2>
              <p>
                We are the only database in the world listing every single
                hostel worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingComponent;
