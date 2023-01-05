import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import backgroundImage from "../asserts/images/webImage-1.jpg";
import CartoonImage from "../asserts/images//casual-life-3d-young-man-working-at-desk(4).png";
import "../styles/footer.css";
import { NavbarComponent } from "../components/Navbar/NavbarComponet";
import { FooterComponent } from "../components/RegistrationFooter/FooterComponent";
import "../styles/SignInpage.css";
import logo from "../asserts/gamkribAsserts/GAMKRIB-logo-white.png";
const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);

  return (
    <>
      <NavbarComponent />
      <div className="backImage">
        <div class="text-center row   d-flex justify-content-center align-items-center mainContainer ">
          <div className="col-md-6 col-sm-11 "></div>
          <div className="col-md-6 col-sm-11  px-5 ">
            <div className=" ">
              <div>
                <img src={logo} width="150rem" className="py-3" />
              </div>
              <h1 className="fw-bold text-success display-3">
                <strong className="text-white">SIGN UP</strong>{" "}
              </h1>
              <div className="mt-4">
                <button class="fw-bolder  btn btn-success mb-5">
                  <Link className="text-reset" to={"/student-register"}>
                    <h4>
                      <strong>Student</strong>
                    </h4>
                  </Link>
                </button>
              </div>
              <div className="">
                <button class="fw-bolder mb-4 btn btn-success ">
                  <Link className="text-reset" to={"/landlord-register"}>
                    <h4>
                      <strong>Landlord</strong>
                    </h4>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    </>
  );
};
export default RegisterPage;
