import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

const LandlordRegisterPage = () => {
  let { registerLandlord } = useContext(AuthContext);

  return (
    <div class="row d-flex  justify-content-center ">
      <div className="col-sm-11 col-md-8">
        {" "}
        <div class="mx-4 mx-md-5 shadow-5-strong main">
          <div class="card-body py-5 px-md-5">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <h2 class="fw-bold mb-5">Sign up as Landlord</h2>
                <form onSubmit={registerLandlord}>
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="form3Example1"
                          class="form-control"
                          name="first_name"
                        />
                        <label class="form-label" for="form3Example1">
                          First name
                        </label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="form3Example2"
                          class="form-control"
                          name="last_name"
                        />
                        <label class="form-label" for="form3Example2">
                          Last name
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="form-outline">
                    <input
                      type="text"
                      id="form3Example1"
                      class="form-control"
                      name="username"
                    />
                    <label class="form-label" for="form3Example1">
                      Username
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      class="form-control"
                      name="email"
                    />
                    <label class="form-label" for="form3Example3">
                      Email address
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="phone number"
                      id="form3Example3"
                      class="form-control"
                      name="phone_number"
                    />
                    <label class="form-label" for="form3Example3">
                      Phone Number
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="number"
                      id="form3Example3"
                      class="form-control"
                      name="ID_card"
                    />
                    <label class="form-label" for="form3Example3">
                      ID number
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example3"
                      class="form-control"
                      name="location"
                    />
                    <label class="form-label" for="form3Example3">
                      Location
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4"
                      class="form-control"
                      name="password1"
                    />
                    <label class="form-label" for="form3Example4">
                      Password
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4"
                      class="form-control"
                      name="password2"
                    />
                    <label class="form-label" for="form3Example4">
                      Re-enter Password
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="submit"
                      id="form3Example4"
                      className="btn btn-outline-primary"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-11 col-md-3 signUpContainer pt-5  d-flex  flex-column d-flex display-sm-6 text-white ">
        <div className="h2">
          {" "}
          A few Clicks will Fetch you potential buyers for your Apartment
        </div>
        <div className="mt-5">
          <Player
            src="https://assets10.lottiefiles.com/packages/lf20_kdCeeh2u4M.json"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
};
export default LandlordRegisterPage;
