import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Toast from "react-bootstrap/Toast";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

import { GoLocation } from "react-icons/go";

import { ImPriceTags } from "react-icons/im";
import { BsFillPeopleFill } from "react-icons/bs";

import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

import "../styles/HomePage.css";

const HomePage = () => {
  let { user, logoutUser } = useContext(AuthContext);

  const history = useHistory();

  const [listings, setListings] = useState("");
  const [isListing, setIsListing] = useState(false);
  const [loadLocation, setloadLocation] = useState(false);
  const [location, setLocation] = useState("");

  const [open, setOpen] = useState(true);
  console.log(location);

  const getListings = async () => {
    setIsListing(true);
    const response = await fetch(
      "https://web-production-e7a3.up.railway.app/listings/",

      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    setListings(data);
    setIsListing(false);

    //console.log(data)
  };

  const getListingsFilter = async () => {
    setloadLocation(true);

    const logo = "../asserts/images/GAMKRIB.png";

    //this code fetches the changed location
    const response = await fetch(
      `https://web-production-e7a3.up.railway.app/listings/?location=${location}`,

      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);

    setListings(data);
    setloadLocation(false);

    console.log(listings);
  };

  //this useEffect fetches the intail location and the current location
  useEffect(() => {
    getListings();
    getListingsFilter();
  }, [location]);

  const home = () => {
    history.push("/");
  };

  const close = () => {
    setOpen(false);
  };

  return (
    <div class="wrapper container-fluid">
      <Navbar
        className="navbar navbar-light"
        // style="background-color: #e3f2fd;"
        bg="light"
        expand="lg"
        fixed="top"
      >
        <Container fluid>
          <Nav className="h1 nav-brand " onClick={home}>
            GAMKRIB
          </Nav>

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

          <div class="scrollmenu .sticky disable-text-selection">
            {user ? (
              open ? (
                <Alert onClose={close} severity="success">
                  <AlertTitle>
                    <strong>You're logged in</strong>, {user.user.username} --
                    To access your dashboard, click on <strong>Profile</strong>{" "}
                    from the menu
                  </AlertTitle>
                </Alert>
              ) : null
            ) : null}

            {location === "KNUST" ? (
              <input
                onClick={getListingsFilter}
                value="apply KNUST"
                class="filter-input"
                type="submit"
              />
            ) : (
              <a id="KNUST" onClick={(e) => setLocation(e.target.id)}>
                KNUST
              </a>
            )}

            {location === "UG" ? (
              <input
                onClick={getListingsFilter}
                value="apply UG"
                class="filter-input"
                type="submit"
              />
            ) : (
              <a id="UG" onClick={(e) => setLocation(e.target.id)}>
                UG
              </a>
            )}

            {location === "ASHESI" ? (
              <input
                onClick={getListingsFilter}
                value="apply ASHESI"
                class="filter-input"
                type="submit"
              />
            ) : (
              <a id="ASHESI" onClick={(e) => setLocation(e.target.id)}>
                ASHESI
              </a>
            )}

            {location === "UCC" ? (
              <input
                onClick={getListingsFilter}
                value="apply UCC"
                class="filter-input"
                type="submit"
              />
            ) : (
              <a id="UCC" onClick={(e) => setLocation(e.target.id)}>
                UCC
              </a>
            )}

            {location === "UDS" ? (
              <input
                onClick={getListingsFilter}
                value="apply UDS"
                class="filter-input"
                type="submit"
              />
            ) : (
              <a id="UDS" onClick={(e) => setLocation(e.target.id)}>
                UDS
              </a>
            )}

            {location === "UEW" ? (
              <input
                onClick={getListingsFilter}
                value="apply UEW"
                class="filter-input"
                type="submit"
              />
            ) : (
              <a id="UEW" onClick={(e) => setLocation(e.target.id)}>
                UEW
              </a>
            )}

            {location === "UPSA" ? (
              <input
                onClick={getListingsFilter}
                value="apply UPSA"
                class="filter-input"
                type="submit"
              />
            ) : (
              <a id="UPSA" onClick={(e) => setLocation(e.target.id)}>
                UPSA
              </a>
            )}

            {location === "GIMPA" ? (
              <input
                onClick={getListingsFilter}
                value="apply GIMPA"
                class="filter-input"
                type="submit"
              />
            ) : (
              <a id="GIMPA" onClick={(e) => setLocation(e.target.id)}>
                GIMPA
              </a>
            )}

            {location === "WISCONSIN" ? (
              <input
                onClick={getListingsFilter}
                value="apply WIS."
                class="filter-input"
                type="submit"
              />
            ) : (
              <a id="WISCONSIN" onClick={(e) => setLocation(e.target.id)}>
                WISCONSIN
              </a>
            )}

            {location === "ATU" ? (
              <input
                onClick={getListingsFilter}
                value="apply ATU"
                class="filter-input"
                type="submit"
              />
            ) : (
              <a id="ATU" onClick={(e) => setLocation(e.target.id)}>
                ATU
              </a>
            )}

            {location === "KTU" ? (
              <input
                onClick={getListingsFilter}
                value="apply KTU"
                class="filter-input"
                type="submit"
              />
            ) : (
              <a id="KTU" onClick={(e) => setLocation(e.target.id)}>
                KTU
              </a>
            )}
          </div>
        </Container>
        <br />
      </Navbar>

      {loadLocation ? (
        <Alert onClose={close} severity="success">
          <AlertTitle>
            Please wait... We're fetching the requested location.
          </AlertTitle>
        </Alert>
      ) : null}
      {isListing ? (
        <div class="center-loader">
          <ClimbingBoxLoader color="#36d7b7" /> loading properties...
        </div>
      ) : (
        <div class="hey">
          {listings &&
            listings.map((listing, index) => (
              <React.Fragment key={index}>
                <div className="card  p-3 mb-5 bg-body m-4 rounded relative property-card ">
                  <Link to={`/property-detail/${listing.id}`}>
                    <img
                      className="property-image card"
                      src={`${listing.image}`}
                      width="290px"
                      height="290px"
                    />
                    <div>
                      {" "}
                      <span>
                        <GoLocation /> {listing.location}
                      </span>
                      <br />
                      <span>
                        <BsFillPeopleFill /> {listing.number_of_persons} in a
                        room
                      </span>
                      <strong>
                        <ImPriceTags /> GHS {listing.price}
                      </strong>
                    </div>
                  </Link>
                </div>
              </React.Fragment>
            ))}
        </div>
      )}
    </div>
  );
};
export default HomePage;
