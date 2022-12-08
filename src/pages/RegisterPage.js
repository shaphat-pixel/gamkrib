import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import backgroundImage from "../asserts/images/webImage-1.jpg";
import CartoonImage from "../asserts/images//casual-life-3d-young-man-working-at-desk(4).png";
import "../styles/footer.css";
import { NavbarComponent } from "../components/Navbar/NavbarComponet";
import { FooterComponent } from "../components/footer/FooterComponent";
const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);

  return (
    <>
      <NavbarComponent />
      <div class="text-center container-fluid  text-white registerContainer ">
        <div className="row d-flex m-5  justify-content-center ">
          <div className="col-md-12 col-lg-8">
            {" "}
            <img
              className="registerImage"
              src={backgroundImage}
              width="100.6%"
              height="100%"
              alt="this is a backgroundImage"
            />
          </div>
          <div className="col-md-12 signUpContainer shadow-lg col-lg-3 d-flex  justify-content-center align-items-center ">
            <div className=" ">
              <img
                className=" my-5"
                src={CartoonImage}
                width="300rem"
                height="300rem"
                alt="this is a backgroundImage"
              />
              <h1 className="fw-bold text-success display-3">
                <strong>SIGN UP</strong>{" "}
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
