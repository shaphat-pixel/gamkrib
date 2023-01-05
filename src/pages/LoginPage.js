import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import "../styles/SignInpage.css";
import signInImage from "../asserts/images/casual-life-3d-girl-and-boy-sitting-with-laptop-1.png";
import logo from "../asserts/gamkribAsserts/GAMKRIB-logo-white.png";
import { NavbarComponent } from "../components/Navbar/NavbarComponet";
import { FooterComponent } from "../components/RegistrationFooter/FooterComponent";
const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);

  return (
    <>
      <NavbarComponent />
      <div className="backImage ">
        <div class="text-center   container-xxl  mx-3">
          <div className="row  d-flex justify-content-center align-items-center mainContainer">
            <div className="col-md-6 col-sm-11 ">
              <div className="main  "></div>
            </div>
            <div className="col-md-6 col-sm-11  px-5">
              <div class="    h-75  align-items-center  ">
                <div class="card-body py-5 px-md-5">
                  <div class="row d-flex justify-content-center">
                    <div class="col-lg-8">
                      <img src={logo} width="120rem" className="py-4" />

                      <h2 class="fw-bold mb-5 text-white boldText">Log in</h2>
                      <form onSubmit={loginUser}>
                        <div class="form-outline mb-4">
                          <input
                            type="email"
                            id="form3Example3"
                            className="form-control  inputStyle"
                            placeholder="Email address"
                            name="email"
                          />
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            id="form3Example4"
                            class="form-control inputStyle"
                            placeholder="password"
                            name="password"
                          />
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="submit"
                            id="form3Example4"
                            className="btn btn-success btn-outline-white "
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    </>
  );
};
export default LoginPage;
