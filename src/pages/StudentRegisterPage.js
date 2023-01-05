import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";


import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";



const StudentRegisterPage = () => {
  let { registerUser } = useContext(AuthContext);

  return (

    <div class="bg-image justify-content-center d-flex flex-wrap-reverse row">
      <div className="col-11 shadow col-md-8  ">
        <div class=" mx-4 mx-md-5 shadow-5-strong main">
          <div class="card-body py-5 px-md-5">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <h2 class="fw-bold mb-5">Sign up as Student</h2>
                <form onSubmit={registerUser}>
                  <div class="row">
                    <div class="col-md-6 mb-4">
                    <label class="form-label" for="form3Example1">
                          First name
                        </label>
                      <div class="form-outline">
                     
                        <input
                          type="text"
                          placeholder=""
                          className="input"
                          id="form3Example1"
                          class="form-control"
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
                          class="form-control"
                          name="lastName"
                          required
                        />
                        
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6 mb-4">
                  <label class="form-label" for="form3Example2">Select your Gender</label>
  <select name="gender" id="gender" class="form-control">
    <option value="Male">Male</option>
    <option value="Female">Female</option>
  
  </select>
  </div>

                  
<br/>
                  <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example3">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="form3Example3"
                      class="form-control"
                      name="email"
                      required
                    />
                    
                  </div>
<br/>
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example3">
                      Phone Number
                    </label>
                    <input
                      type="phone number"
                      id="form3Example3"
                      class="form-control"
                      name="phone_number"
                      required
                    />
                    
                  </div>
<br/>
<div class="col-md-6 mb-4">
                  <label class="form-label" for="form3Example3">
                    Select  School
                    </label>

                    <select name="school" id="school" class="form-control">
    <option value="UG">University of GHana, Legon</option>
    <option value="UPSA">University of Professional Studies, Accra</option>
    <option value="WISCONSIN">Wisconsin university</option>
    <option value="LANCASTER">Lancaster university</option>
    <option value="KNUSTFORD">Knustford University College</option>
    <option value="RADFORD">Radford University College</option>
    <option value="GSL">Ghana School of Langiages</option>
  
  </select>
                   
                   
                  </div>
<br/>

<div class="col-md-6 mb-4">
                  <label class="form-label" for="form3Example3">
                     Select Level
                    </label>
                    <select name="level" id="level" class="form-control">
    <option value="100">100</option>
    <option value="200">200</option>
    <option value="300">300</option>
    <option value="400">400</option>
    <option value="500">500</option>
    <option value="600">600</option>
    <option value="700">700</option>
  
  </select>
                  
                    
                  </div>
<br/>
                  <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example4">
                      Password
                    </label>
                    <input
                      type="password"
                      id="form3Example4"
                      class="form-control"
                      name="password1"
                      required
                    />
                    
                  </div>
<br/>
                  <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example4">
                      Re-enter Password
                    </label>
                    <input
                      type="password"
                      id="form3Example4"
                      class="form-control"
                      name="password2"
                      required
                    />
                    
                  </div>

                  <div class=" text-center form-outline mb-4">
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
          A few Clicks will Save You from Accommodation Hustle
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
export default StudentRegisterPage;