import ImageGallery from "react-image-gallery";
import "./description.css";
import React, { useContext, useEffect, useState } from "react";
import { PropertiesCardComponents } from "../../pages/HomePage";
import lottie from "lottie-web";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import gamkrib from "../../asserts/createdLoaders/Gamkrib.json";

export const DescriptionComponent = ({
  propertyDetail,
  paywithpaystack,
  user,
}) => {
  const [listings, setListings] = useState("");
  const [isListing, setIsListing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const getListings = async () => {
    setIsListing(true);
    const response = await fetch(
      "https://api.gamkrib.com/listings/",

      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    setListings(data);
    setIsListing(false);
    //this has been break for debugging purposes

    //console.log(data)
  };

  useEffect(() => {
    getListings();
  }, []);

  const [sliders, setSliders] = useState(null);
  const imageArray = propertyDetail.images;

  //this useEffect transforms the image array into sliders and their thumbnail
  useEffect(() => {
    const result =
      imageArray &&
      imageArray.map((item) => ({
        original: item,
        originalHeight: 340,
        originalWidth: 800,
        thumbnail: item,
        thumbnailHeight: 40,
      }));

    // console.log(result);
    setSliders(result);
  }, [imageArray]);

  //this loads if the images fails to loads
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#Gamkrib"),
      animationData: gamkrib,
    });
  }, []);

  return (
    <div className="d-flex row justify-content-center">
      <div className="sliderParent container row mx-5  ">
        <div className="col-md-8 mr-3 bg-white p-2 rounded d-none d-lg-block  col-sm-11">
          {sliders ? (
            <ImageGallery
              items={sliders}
              infinite={true}
              thumbnailPosition="left"
              autoPlay={true}
            />
          ) : (
            <div id="Gamkrib" />
          )}
        </div>
        <div className="col-md-8 mr-3  p-2 d-lg-none  d-sm-block bg-white mb-3 col-sm-10">
          {sliders ? (
            <ImageGallery
              items={sliders}
              infinite={true}
              showNav={false}
              autoPlay={true}
            />
          ) : (
            <div id="Gamkrib" />
          )}
        </div>
        <div className="col-md-3  col-sm-11 mt-sm-3">
          <div className="bg-white mb-3 shadow-sm rounded p-2">
            <p className="h2 text-green">Description</p>
            <div className="h5">{propertyDetail.description}</div>
          </div>
          <div className="bg-white mb-3 shadow-sm rounded p-2">
            <p className="h2 text-green"> Price</p>
            <div className="h5">GHc {propertyDetail.price}</div>
          </div>
          <div className="bg-white mb-3 shadow-sm rounded p-2">
            <p className="h2 text-green"> Location</p>
            <div className="h5"> {propertyDetail.location}</div>
          </div>
          <div className="bg-white mb-3 shadow-sm rounded p-2">
            <span className="">
              <b className="text-green">Gender:</b> {propertyDetail.gender}
            </span>
            <div className="">
              <b className="text-green">Slot(s) Available: </b>
              {propertyDetail.slot}
            </div>
            <div className="">
              <b className="text-green">Accommodation Type: </b>
              {propertyDetail.property_type}
            </div>
            <div className="">
              <b className="text-green">Location: </b>
              {propertyDetail.location}
            </div>
          </div>
          
{user? 
          <><div className="bg-white mb-3 shadow-sm rounded p-2">
              <h5 className="">
                <b className="text-green">Commuting time</b>
              </h5>
              {user.user.school === "UPSA" ?
                <div className="">
                  <b className=""><b className="text-green">{propertyDetail.time_to_upsa_walk} <i>walk</i></b> from {user.user.school}</b><br />
                  <b className=""><b className="text-green">{propertyDetail.time_to_upsa_bike} <i>ride</i></b> from {user.user.school}</b><br />
                  <b className=""><b className="text-green">{propertyDetail.time_to_upsa_car} <i>drive</i></b> from {user.user.school}</b><br />

                </div>
                : null}

              {user.user.school === "UG" ?
                <div className="">
                  <b className=""><b className="text-green">{propertyDetail.time_to_ug_walk} <i>walk</i></b> from {user.user.school}</b><br />
                  <b className=""><b className="text-green">{propertyDetail.time_to_ug_bike} <i>ride</i></b> from {user.user.school}</b><br />
                  <b className=""><b className="text-green">{propertyDetail.time_to_ug_car} <i>drive</i></b> from {user.user.school}</b><br />

                </div>
                : null}

              {user.user.school === "RADFORD" ?
                <div className="">
                  <b className=""><b className="text-green">{propertyDetail.time_to_radford_walk} <i>walk</i></b> from {user.user.school}</b><br />
                  <b className=""><b className="text-green">{propertyDetail.time_to_radford_bike} <i>ride</i></b> from {user.user.school}</b><br />
                  <b className=""><b className="text-green">{propertyDetail.time_to_radford_car} <i>drive</i></b> from {user.user.school}</b><br />

                </div>
                : null}

              {user.user.school === "KNUSTFORD" ?
                <div className="">
                  <b className=""><b className="text-green">{propertyDetail.time_to_knustford_walk} <i>walk</i></b> from {user.user.school}</b><br />
                  <b className=""><b className="text-green">{propertyDetail.time_to_knustford_bike} <i>ride</i></b> from {user.user.school}</b><br />
                  <b className=""><b className="text-green">{propertyDetail.time_to_knustford_car} <i>drive</i></b> from {user.user.school}</b><br />

                </div>
                : null}

              {user.user.school === "GSL" ?
                <div className="">
                  <b className=""><b className="text-green">{propertyDetail.time_to_gsl_walk} <i>walk</i></b> from {user.user.school}</b><br />
                  <b className=""><b className="text-green">{propertyDetail.time_to_gsl_bike} <i>ride</i></b> from {user.user.school}</b><br />
                  <b className=""><b className="text-green">{propertyDetail.time_to_gsl_car} <i>drive</i></b> from {user.user.school}</b><br />

                </div>
                : null}

              {user.user.school === "LANCASTER" ?
                <div className="">
                  <b className=""><b className="text-green">{propertyDetail.time_to_lancaster_walk} <i>walk</i></b> from {user.user.school}</b><br />
                  <b className=""><b className="text-green">{propertyDetail.time_to_lancaster_bike} <i>ride</i></b> from {user.user.school}</b><br />
                  <b className=""><b className="text-green">{propertyDetail.time_to_lancaster_car} <i>drive</i></b> from {user.user.school}</b><br />

                </div>
                : null}

              {user.user.school === "WISCONSIN" ?
                <div className="">
                  <b className=""><b className="text-green">{propertyDetail.time_to_wisconsin_walk} <i>walk</i></b> from {user.user.school}</b><br />
                  <b className=""><b className="text-green">{propertyDetail.time_to_wisconsin_bike} <i>ride</i></b> from {user.user.school}</b><br />
                  <b className=""><b className="text-green">{propertyDetail.time_to_wisconsin_car} <i>drive</i></b> from {user.user.school}</b><br />

                </div>
                : null}

            </div><div className="bg-white mb-3 shadow-sm rounded p-2">
                {!user ? (
                  <p className="text-danger">
                    {" "}
                    <b> You need to log in as a student to book this property</b>
                  </p>
                ) : (
                  <button
                    onClick={paywithpaystack}
                    type="button"
                    class="btn btn-success btn"
                  >
                    Book Now
                  </button>
                )}
              </div></>
          
          : null}
        </div>
        
      </div>
      {/* 
      <div className=" container">
        <div className="h3 text-center mt-5 text-green">
          Check out some other Properties
        </div>
        <PropertiesCardComponents listings={listings} />
      </div>
      */}
    </div>
  );
};
