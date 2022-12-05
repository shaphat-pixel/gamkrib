import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);

  return (
    <div class="text-center">
      <div class="p-5 bg-image image-auth"></div>

      <div class="card mx-4 mx-md-5 shadow-5-strong main">
        <div class="card-body py-5 px-md-5">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-8">
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
  );
};
export default LoginPage;
