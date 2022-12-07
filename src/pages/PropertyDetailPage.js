import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import PaystackPop from "@paystack/inline-js";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { GoLocation } from "react-icons/go";

import { ImPriceTags } from "react-icons/im";
import { BsFillPeopleFill } from "react-icons/bs";

const PropertyDetailPage = (props) => {
  let { user, logoutUser } = useContext(AuthContext);
  const history = useHistory();

  const id = props.match.params.id;

  const [propertyDetail, setPropertyDetail] = useState("");

  const getPropertyDetail = async () => {
    const response = await fetch(
      `https://web-production-e7a3.up.railway.app/listings/${id}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    setPropertyDetail(data);
  };
  console.log(propertyDetail);
  //booking a property

  const bookProperty = async () => {
    const response = await fetch(
      "https://web-production-e7a3.up.railway.app/book-create/",
      {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: user.user.pk,
          listing: id,
        }),
      }
    );

    let data = await response.json();
  };

  // Processing payment.
  const paywithpaystack = () => {
    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: "pk_test_0019a4e3acb7a9886c8c65386a5be0619de6223e",
      amount: propertyDetail.price * 100,
      email: user.user.email,
      username: user.user.username,

      onSuccess(transaction) {
        let message = `Payment Complete! Reference ${transaction.reference}`;
        alert(message);
      },
      onSuccess: () => bookProperty(),

      onCancel() {
        alert("Transaction cancelled!");
      },
    });
  };

  const home = () => {
    history.push("/");
  };

  useEffect(() => {
    getPropertyDetail();
  }, []);

  return (
    <div class="wrapper">
      <Navbar bg="light" expand="lg" fixed="top">
        <Container fluid>
          <Navbar className="nav-brand h2 " onClick={home}>
            GAMKRIB
          </Navbar>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {user ? (
                <>
                  <Nav.Link>
                    <Link className="links" to={"/profile"}>
                      Profile
                    </Link>
                  </Nav.Link>
                  <br />

                  <Nav.Link>
                    <Link className="links" onClick={logoutUser}>
                      Logout
                    </Link>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link>
                    <Link className="links" to={"/login"}>
                      Sign in
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className="links" to={"/register"}>
                      Register
                    </Link>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
        <br />
      </Navbar>
      <div class="row hey">
        <div class="col-sm ">
          <div className="property-card">
            <img
              class="property-image"
              src={`${propertyDetail.image}`}
              width="305px"
              height="315px"
            />
            <span>
              <GoLocation /> {propertyDetail.location}
            </span>
            <p>
              <BsFillPeopleFill /> {propertyDetail.number_of_persons} in a room
            </p>
            <strong>
              <ImPriceTags /> GHS {propertyDetail.price}
            </strong>
          </div>
        </div>
        <div class="col-sm ">
          <div className="property-card">
            <img
              class="property-image"
              src={`${propertyDetail.image}`}
              width="305px"
              height="315px"
            />
            <span>
              <GoLocation /> {propertyDetail.location}
            </span>
            <p>
              <BsFillPeopleFill /> {propertyDetail.number_of_persons} in a room
            </p>
            <strong>
              <ImPriceTags /> GHS {propertyDetail.price}
            </strong>
          </div>
        </div>
        <div class="col-sm ">
          <div className="property-card">
            <img
              class="property-image"
              src={`${propertyDetail.image}`}
              width="305px"
              height="315px"
            />
            <span>
              <GoLocation /> {propertyDetail.location}
            </span>
            <p>
              <BsFillPeopleFill /> {propertyDetail.number_of_persons} in a room
            </p>
            <strong>
              <ImPriceTags /> GHS {propertyDetail.price}
            </strong>
          </div>
        </div>
      </div>{" "}
      <hr />
      <br />
      <div class="row">
        <div class="col-sm-6">
          <h2 class="align-items-center">Description and Reviews</h2>
        </div>
        <div class="col-sm-6">
          <section class="checkout-background">
            <div class=" py-5">
              <div class="row d-flex justify-content-center">
                <div class="">
                  <div class="card rounded-6">
                    <div class="card-body mx-1 my-2">
                      <div class="d-flex align-items-center">
                        <div></div>
                        <div></div>
                      </div>

                      <div class="pt-3">
                        <div class="d-flex flex-row pb-3">
                          <div class="rounded border border-primary border-2 d-flex w-100 p-3 align-items-center checkout">
                            <div class="d-flex align-items-center pe-3">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="radioNoLabelX"
                                id="radioNoLabel11"
                                value=""
                                aria-label="..."
                                checked
                              />
                            </div>
                            <div class="d-flex flex-column">
                              <p class="mb-1 small text-primary">
                                Amount to pay
                              </p>
                              <h6 class="mb-0 text-primary">
                                {propertyDetail.price}
                              </h6>
                            </div>
                          </div>
                        </div>

                        <div class="d-flex flex-row pb-3"></div>
                      </div>

                      <div class="d-flex justify-content-between align-items-center pb-1">
                        {!user ? (
                          <p>
                            You need to log in as a student to access this
                            property
                          </p>
                        ) : (
                          <button
                            onClick={paywithpaystack}
                            type="button"
                            class="btn btn-primary btn-lg"
                          >
                            Book Now
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default PropertyDetailPage;
