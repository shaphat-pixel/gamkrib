import ImageGallery from "react-image-gallery";
import "./description.css";
import React, { useContext, useState } from "react";
import { PropertiesCardComponents } from "../../pages/HomePage";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    height: "600rem",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

export const DescriptionComponent = ({
  propertyDetail,
  paywithpaystack,
  user,
}) => {
  const imageFunc = () => {
    propertyDetail.map((item) => {
      return [{ original: item.image, thumbnail: item.image }];
    });
  };

  return (
    <div className="d-flex row justify-content-center">
      <div className="sliderParent container row mx-5  ">
        <div className="col-md-8 mr-3 bg-white p-2 rounded col-sm-10">
          <ImageGallery
            items={images}
            infinite={true}
            thumbnailPosition="left"
            autoPlay={true}
          />
        </div>
        <div className="col-md-3  col-sm-10">
          <div className="bg-white mb-3 shadow-sm rounded p-2">
            <p className="h2 text-green">Description</p>
            <div className="h5">{propertyDetail.description}</div>
          </div>
          <div className="bg-white mb-3 shadow-sm rounded p-2">
            <p className="h2 text-green">GHc {propertyDetail.price}</p>
            <div className="h5"> Price</div>
          </div>
          <div className="bg-white mb-3 shadow-sm rounded p-2">
            <span className="b  pr-3">Location: {propertyDetail.location}</span>
            <span className="">
              {""} Users: {propertyDetail.user}
            </span>
            <div className="">
              {" "}
              Slot(s) Available: {4 - propertyDetail.number_of_persons}
            </div>
          </div>
          <div className="bg-white mb-3 shadow-sm rounded p-2">
            {!user ? (
              <p className="text-danger">
                {" "}
                You need to log in as a student to access this property
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
          </div>
        </div>
      </div>
      <div className="display-4 ">
        Will load similar properties from same location here
      </div>
    </div>
  );
};
