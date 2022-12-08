import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

import signInImage from "../asserts/images/casual-life-3d-girl-and-boy-sitting-with-laptop-1.png";
import logo from "../asserts/images/GAMKRIB.png";
import { NavbarComponent } from "../components/Navbar/NavbarComponet";
import { FooterComponent } from "../components/footer/FooterComponent";
const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);

  return (
    <>
      <NavbarComponent />
      <div class="text-center   container-xxl mx-3">
        <div className="row  d-flex justify-content-center align-items-center mainContainer">
          <div className="col-md-6 col-sm-11  px-5">
            <div class="   shadow-lg h-75  align-items-center border border-2 border-success rounded-3 main">
              <div class="card-body py-5 px-md-5">
                <div class="row d-flex justify-content-center">
                  <div class="col-lg-8">
                    <img src={logo} width="100rem" className="py-4" />

                    <h2 class="fw-bold mb-5">Log in</h2>
                    <form onSubmit={loginUser}>
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
                          type="password"
                          id="form3Example4"
                          class="form-control"
                          name="password"
                        />
                        <label class="form-label" for="form3Example4">
                          Password
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
          <div className="col-md-6 col-sm-11 ">
            <div className="main  ">
              <img src={signInImage} height="auto" width="50%" />
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    </>
  );
};
export default LoginPage;
