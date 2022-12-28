import React from "react";
import { FooterComponent } from "../footer/FooterComponent";
import { NavbarComponent } from "../Navbar/NavbarComponet";

import explainer1 from "../../asserts/gamkribAsserts/first.svg";
import explainer2 from "../../asserts/gamkribAsserts/third.svg";
import explainer3 from "../../asserts/gamkribAsserts/fourth.svg";
import explainer4 from "../../asserts/gamkribAsserts/fifth.svg";

import photo1 from "../../asserts/aboutUsImages/WhatsApp Image 2022-12-27 at 11.00.50 PM(1).jpeg";
import photo2 from "../../asserts/aboutUsImages/WhatsApp Image 2022-12-27 at 11.00.50 PM.jpeg";
import photo3 from "../../asserts/aboutUsImages/WhatsApp Image 2022-12-27 at 11.00.51 PM(1).jpeg";
import photo4 from "../../asserts/aboutUsImages/WhatsApp Image 2022-12-27 at 11.00.51 PM.jpeg";
import photo5 from "../../asserts/aboutUsImages/eben.jpeg";

import { Player } from "@lottiefiles/react-lottie-player";

export const AboutUsComponent = () => {
  return (
    <div className="bg-white">
      <NavbarComponent />
      <div className="container  ">
        <div className="row  container flex-wrap-reverse  d-flex ">
          <div className="col-md-6 col-sm-11 mt-5 pt-5">
            <h3>
              <b> Why We Create this website</b>
            </h3>
            <p>
              Welcome to Gamkrib! We are a team of 5 passionate individuals who
              are dedicated to making the transition from high school to
              university as seamless as possible when it comes to finding
              off-campus accommodation. At Gamkrib, we believe that finding a
              place to live should be easy and stress-free. That’s why we
              created a platform that allows students to quickly and easily find
              off-campus accommodation. With our platform, students can search
              for their ideal living space, compare prices and amenities, and
              even book their new home in just a few clicks. We understand that
              finding off-campus accommodation can be a daunting task, and we
              want to make it as easy as possible. That’s why we’re committed to
              providing our users with the best possible experience. We are
              constantly working to improve our platform and provide our users
              with the best possible service. We’re excited to be a part of your
              journey and we look forward to helping you find your perfect
              off-campus accommodation.
            </p>
          </div>
          <div className="col-md-5  mt-5 pt-5 col-sm-11">
            <Player
              src="https://assets7.lottiefiles.com/packages/lf20_c4udnllp.json"
              loop
              autoplay
            />
          </div>
        </div>

        <div className="row container">
          <div className="col-md-6 mt-5 pr-5 pt-5 col-sm-11">
            <img src={explainer3} width="100%" />
          </div>
          <div className="col-md-6 col-sm-11 mt-5 pt-5 px-3">
            <h3>
              <b> What Makes GamKrib unique</b>
            </h3>
            <p>
              This site offers comprehensive free listings for all apartments
              nationwide including:
            </p>
            <ul className="pl-4">
              <li>Quick and easy searching</li>
              <li>Direct contact information</li>
              <li>Genuine unbiased reviews</li>
              <li>Verified apartments by our team</li>
              <li>
                Original apartment photographs Insider knowledge & tips from
                other backpackers
              </li>
            </ul>
            Our system searches for the best prices and availability of
            apartments(hostels) around campus . Save money, time and sanity.{" "}
          </div>
        </div>

        <div className="row container flex-wrap-reverse  d-flex">
          <div className="col-md-6 col-sm-11 mt-5 pt-5">
            <h3>
              <b> How much can you save by using GamKrib</b>
            </h3>
            <p>
              On average 20%, as much as 30%-50% of your money when compared to
              other hostel sites
            </p>
          </div>
          <div className="col-md-5 mt-5 pt-5 col-sm-11">
            <img src={explainer4} />
          </div>
        </div>

        <div className="row container">
          <div className="col-md-6 mt-5 pr-5 pt-5 col-sm-11">
            <img src={explainer2} width="100%" />
          </div>
          <div className="col-md-6 col-sm-11 mt-5 pt-5 px-3">
            <h3>
              <b> Help Us spread the good news about GamKrib</b>
            </h3>
            <p>
              When searching for excellent hostels, we desire to be the students
              go-to information source. It's no secret that we rely on
              word-of-mouth marketing to get the word out about GamKrib since
              it's a natural and sincere method to expand our audience. Dear
              reader, you have the power of the internet community in your
              hands. Include a brief link to GamKrib if you like us and have a
              website or blog. We value any assistance you may provide us in
              spreading the word about our website.
            </p>
          </div>
        </div>
        <div className="row container  d-flex justify-content-center">
          <div>
            <h3 className="display-5 text-center ">Our Awesome Team</h3>
            <div className="row d-flex flex-wrap-wrap justify-content-around container">
              <div class="card col-sm-10 col-md-4 m-2 col-lg-3">
                <img class="card-img-top" src={photo4} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Gabriel Agbobli</h5>
                  <p class="card-text">A team Member</p>
                </div>
              </div>
              <div class="card col-sm-10 col-md-4 m-2 col-lg-3">
                <img class="card-img-top" src={photo1} alt="Card image cap" />
                <div class="card-body">
                  <h5 className="card-title text-black">
                    Michael Awuah-Koranteng
                  </h5>
                  <p class="card-text">A team Member </p>
                </div>
              </div>
              <div class="card col-sm-10 m-2 col-md-4 col-lg-3">
                <img class="card-img-top" src={photo2} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Jehoshaphat Tatiglo</h5>
                  <p class="card-text">A team Member</p>
                </div>
              </div>
              <div class="card col-sm-10 m-2 col-md-4 col-lg-3">
                <img class="card-img-top" src={photo3} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Charles Kwame Aboagye</h5>
                  <p class="card-text">A team Member</p>
                </div>
              </div>
              <div class="card col-sm-10 m-2 col-md-4 col-lg-3">
                <img class="card-img-top" src={photo5} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Ebenezer Agyekum</h5>
                  <p class="card-text">Front-end Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};
