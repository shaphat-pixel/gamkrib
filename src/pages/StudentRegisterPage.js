import React, { useContext, useState, useEffect, useCallback } from "react";
import AuthContext from "../context/AuthContext";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import "../styles/signUp.css";
const StudentRegisterPage = () => {
  let { registerUser } = useContext(AuthContext);

  const [tempPasswordValue, setTempValue] = useState("");
  const [tempRePasswordValue, setReTempValue] = useState("");
  const [message, setmessage] = useState("");

  const [passwordValidity, setPasswordValidity] = useState(false);

  const handleChange = useCallback((e) => {
    setTempValue(e.target.value);
  });
  const handleReChange = useCallback((e) => {
    setReTempValue(e.target.value);
  });

  useEffect(() => {
    if (
      tempPasswordValue.length === 0 ||
      tempPasswordValue !== tempRePasswordValue
    ) {
      setPasswordValidity(true);
    } else {
      setPasswordValidity(false);
      setmessage("");
    }

    if (
      tempRePasswordValue.length >= tempPasswordValue.length &&
      tempPasswordValue !== tempRePasswordValue
    ) {
      setmessage("Password mismatched");
    } else {
      setmessage("");
    }
  }, [handleReChange, handleReChange]);

  return (
    <div className="parentContainer backgroundImage row ">
      <div className="col-12 col-md-4  pt-5  d-flex  flex-column d-flex mix-height d-sm-none d-md-block  signUpImage ">
        <div className="h2 text-center d-flex  text-white">
          {" "}
          A few Clicks will Save You from Accommodation Hustle
        </div>
      </div>
      <div className="col-12 shadow col-md-8  ">
        <div class="shadow-5-strong ">
          <div class="card-body py-5 ">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8 ">
                <h1 class=" mb-5 text-center headerText">Sign up as Student</h1>
                <form onSubmit={registerUser}>
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <label class="form-label" for="form3Example1">
                        First name
                      </label>
                      <div class="form-outline">
                        <input
                          type="text"
                          className="form-control inputStyle"
                          id="form3Example1"
                          name="firstName"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <label class="form-label" for="form3Example2">
                        Last name
                      </label>
                      <div class="form-outline">
                        <input
                          type="text"
                          id="form3Example2"
                          class="form-control inputStyle"
                          name="lastName"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <br />
                  <div class="col-md-6 mb-4 forSelect">
                    <label class="form-label" for="form3Example2">
                      Select your Gender
                    </label>
                    <select
                      name="gender"
                      id="gender"
                      class="form-control inputStyle"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <br />
                  <br />
                  <div class="form-outline mb-4">
                    <label class="form-label " for="form3Example3">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="form3Example3"
                      class="form-control inputStyle"
                      name="email"
                      required
                    />
                  </div>
                  <br />
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example3">
                      Phone Number
                    </label>
                    <input
                      type="phone number"
                      id="form3Example3"
                      class="form-control inputStyle"
                      name="phone_number"
                      required
                    />
                  </div>
                  <br />
                  <div class="col-md-6 mb-4 forSelect">
                    <label class="form-label" for="form3Example3">
                      Select School
                    </label>

                    <select
                      name="school"
                      id="school"
                      class="form-control inputStyle"
                    >
                      <option value="UG">University of GHana, Legon</option>
                      <option value="UPSA">
                        University of Professional Studies, Accra
                      </option>
                      <option value="WISCONSIN">Wisconsin university</option>
                      <option value="LANCASTER">Lancaster university</option>
                      <option value="KNUSTFORD">
                        Knustford University College
                      </option>
                      <option value="RADFORD">
                        Radford University College
                      </option>
                      <option value="GSL">Ghana School of Langiages</option>
                    </select>
                  </div>
                  <br />
                  <br />
                  <div class="col-md-6 mb-4 forSelect">
                    <label class="form-label" for="form3Example3">
                      Select Level
                    </label>
                    <select
                      name="level"
                      id="level"
                      class="form-control  inputStyle"
                    >
                      <option value="100">100</option>
                      <option value="200">200</option>
                      <option value="300">300</option>
                      <option value="400">400</option>
                      <option value="500">500</option>
                      <option value="600">600</option>
                      <option value="700">700</option>
                    </select>
                  </div>
                  <br /> <br />
                  <div class="form-outline mb-4">
                    <label class="form-label " for="form3Example4">
                      Password
                    </label>
                    <input
                      type="password"
                      id="form3Example4"
                      class="form-control inputStyle"
                      name="password1"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example4">
                      Re-enter Password
                    </label>
                    <input
                      type="password"
                      id="form3Example4"
                      class="form-control  inputStyle"
                      onChange={handleReChange}
                      name="password2"
                      required
                    />
                  </div>
                  {tempRePasswordValue.length >= 1 && (
                    <div className="errorMessage">{message}</div>
                  )}
                  <div class=" text-center form-outline mb-4">
                    <input
                      type="submit"
                      disabled={passwordValidity}
                      id="form3Example4"
                      className="btn btn-success"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StudentRegisterPage;
