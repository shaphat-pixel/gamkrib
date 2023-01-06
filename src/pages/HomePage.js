// import React, { useContext, useState, useEffect } from "react";
// import AuthContext from "../context/AuthContext";
// import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Toast from "react-bootstrap/Toast";
// import Alert from "@mui/material/Alert";
// import AlertTitle from "@mui/material/AlertTitle";
// import { GoLocation } from "react-icons/go";
// import { ImPriceTags } from "react-icons/im";
// import { BsFillPeopleFill } from "react-icons/bs";
import { FaFemale, FaMale } from "react-icons/fa";
// import {MdEventAvailable} from "react-icons/md"
// import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
// import "../styles/HomePage.css";
// import { FooterComponent } from "../components/footer/FooterComponent";
// import { Player } from "@lottiefiles/react-lottie-player";
// import LandingComponent from "../components/landingPage/LandingComponent";
// //aserts
// import logo from "../asserts/gamkribAsserts/WEBLOGO1.webp";

// /////////////////////////////////////////////////////////////////////////

// // a componnts of the properties

// export const PropertiesCardComponents = ({ listings }) => {
//   return (
//     <div className="hey container">
//       {listings &&
//         listings.map((listing, index) => (
//           <React.Fragment key={index}>
//             {listing.slot > 0?
//             <div className="card   mb-5 bg-body m-4 rounded relative property-card ">
//               <Link to={`/property-detail/${listing.id}`}>
//                 <img
//                   className="property-image card"
//                   src={listing.image}
//                   width="290px"
//                   height="290px"
//                   alt="Images"
//                 />
//                 <div className="d-flex  justify-content-around ">
//                   <span className="text-green">
//                     <GoLocation color="green" /> {listing.location}
//                   </span>

//                   <span className="text-green">
//                     {listing.gender==="Male"?
//                     <FaMale color="green" />:<FaFemale color="green" />} {listing.gender}
//                   </span>

//                   <span className="text-green">
//                     <BsFillPeopleFill /> {listing.number_of_persons} in a room
//                   </span>

//                 </div><div className="d-flex  justify-content-around"><span className="text-green"><MdEventAvailable color="green"/> {listing.slot} slot(s) available</span></div>
//                 <div className="price text-center text-green ">
//                   <b className="h4 ">
//                     <ImPriceTags /> GHS {listing.price}
//                   </b>
//                 </div>
//               </Link>
//             </div>
//            : null}
//           </React.Fragment>
//         ))}
//     </div>
//   );
// };

// ////////////////////////////////////////////////////////////////////////

// const HomePage = () => {
//   let { user, logoutUser } = useContext(AuthContext);

//   const history = useHistory();

//   const [listings, setListings] = useState("");
//   const [isListing, setIsListing] = useState(false);
//   const [loadLocation, setloadLocation] = useState(false);
//   const [location, setLocation] = useState("");

//   const [open, setOpen] = useState(true);
//   console.log(location);

//   const getListings = async () => {
//     setIsListing(true);
//     const response = await fetch(
//       "https://api.gamkrib.com/listings/",

//       {
//         method: "GET",
//         credentials: "include",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     const data = await response.json();

//     setListings(data);
//     setIsListing(false);

//     //console.log(data)
//   };

//   const getListingsFilter = async () => {
//     setloadLocation(true);

//     //this code fetches the changed location
//     if (user){
//     const response = await fetch(
//       `https://api.gamkrib.com/listings/?location=${location}&gender=${user.user.gender}`,

//       {
//         method: "GET",
//         credentials: "include",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     const data = await response.json();
//     console.log(data);

//     setListings(data);

//     setloadLocation(false);

//     console.log(listings);
//   } else {

//     const response = await fetch(
//       `https://api.gamkrib.com/listings/`,

//       {
//         method: "GET",
//         credentials: "include",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     const data = await response.json();
//     console.log(data);

//     setListings(data);

//     setloadLocation(false);

//     console.log(listings);

//   }
//   };

//   //this useEffect fetches the initail location and the current location
//   useEffect(() => {

//     getListingsFilter();
//   }, []);

//   const home = () => {
//     history.push("/");
//   };

//   const close = () => {
//     setOpen(false);
//   };

//   return (

// <div class="wrapper padding-left margin-right margin-left padding-right container-fluid">
//       <Navbar
//         className="navbar navbar-light"
//         // style="background-color: #e3f2fd;"
//         bg="light"
//         expand="lg"
//         fixed="top"
//       >
//         <Container fluid>
//           <Nav className="h1 nav-brand " onClick={home}>
//             <img src={logo} height="60" className="hover:" />
//           </Nav>

//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll">
//             <Nav
//               className="me-auto my-2 my-lg-0"
//               style={{ maxHeight: "100px" }}
//               navbarScroll
//             >
//               {user ? (
//                 <>
//                   <Nav.Link>
//                     <Link className="links" to={"/profile"}>
//                       Profile
//                     </Link>
//                   </Nav.Link>
//                   <br />

//                   <Nav.Link>
//                     <Link className="links" onClick={logoutUser}>
//                       Logout
//                     </Link>
//                   </Nav.Link>
//                 </>
//               ) : (
//                 <>
//                   <Nav.Link>
//                     <Link className="links" to={"/login"}>
//                       Sign in
//                     </Link>
//                   </Nav.Link>
//                   <Nav.Link>
//                     <Link className="links" to={"/register"}>
//                       Register
//                     </Link>
//                   </Nav.Link>
//                 </>
//               )}
//             </Nav>
//           </Navbar.Collapse>

//           <div class="scrollmenu .sticky disable-text-selection">
//             {user ? (
//               open ? (
//                 <Alert onClose={close} severity="success">
//                   <AlertTitle>
//                     <strong>You're logged in</strong>, {user.user.username} --
//                     To access your dashboard, click on <strong>Profile</strong>{" "}
//                     from the menu
//                   </AlertTitle>
//                 </Alert>
//               ) : null
//             ) : null}

//             {location === "KNUST" ? (
//               <input
//                 onClick={getListingsFilter}
//                 value="apply KNUST"
//                 class="filter-input"
//                 type="submit"
//               />
//             ) : (
//               <a id="KNUST" onClick={(e) => setLocation(e.target.id)}>
//                 KNUST
//               </a>
//             )}

//             {location === "UG" ? (
//               <input
//                 onClick={getListingsFilter}
//                 value="apply UG"
//                 class="filter-input"
//                 type="submit"
//               />
//             ) : (
//               <a id="UG" onClick={(e) => setLocation(e.target.id)}>
//                 UG
//               </a>
//             )}

//             {location === "ASHESI" ? (
//               <input
//                 onClick={getListingsFilter}
//                 value="apply ASHESI"
//                 class="filter-input"
//                 type="submit"
//               />
//             ) : (
//               <a id="ASHESI" onClick={(e) => setLocation(e.target.id)}>
//                 ASHESI
//               </a>
//             )}

//             {location === "UCC" ? (
//               <input
//                 onClick={getListingsFilter}
//                 value="apply UCC"
//                 class="filter-input"
//                 type="submit"
//               />
//             ) : (
//               <a id="UCC" onClick={(e) => setLocation(e.target.id)}>
//                 UCC
//               </a>
//             )}

//             {location === "UDS" ? (
//               <input
//                 onClick={getListingsFilter}
//                 value="apply UDS"
//                 class="filter-input"
//                 type="submit"
//               />
//             ) : (
//               <a id="UDS" onClick={(e) => setLocation(e.target.id)}>
//                 UDS
//               </a>
//             )}

//             {location === "UEW" ? (
//               <input
//                 onClick={getListingsFilter}
//                 value="apply UEW"
//                 class="filter-input"
//                 type="submit"
//               />
//             ) : (
//               <a id="UEW" onClick={(e) => setLocation(e.target.id)}>
//                 UEW
//               </a>
//             )}

//             {location === "UPSA" ? (
//               <input
//                 onClick={getListingsFilter}
//                 value="apply UPSA"
//                 class="filter-input"
//                 type="submit"
//               />
//             ) : (
//               <a id="UPSA" onClick={(e) => setLocation(e.target.id)}>
//                 UPSA
//               </a>
//             )}

//             {location === "GIMPA" ? (
//               <input
//                 onClick={getListingsFilter}
//                 value="apply GIMPA"
//                 class="filter-input"
//                 type="submit"
//               />
//             ) : (
//               <a id="GIMPA" onClick={(e) => setLocation(e.target.id)}>
//                 GIMPA
//               </a>
//             )}

//             {location === "WISCONSIN" ? (
//               <input
//                 onClick={getListingsFilter}
//                 value="apply WIS."
//                 class="filter-input"
//                 type="submit"
//               />
//             ) : (
//               <a id="WISCONSIN" onClick={(e) => setLocation(e.target.id)}>
//                 WISCONSIN
//               </a>
//             )}

//             {location === "ATU" ? (
//               <input
//                 onClick={getListingsFilter}
//                 value="apply ATU"
//                 class="filter-input"
//                 type="submit"
//               />
//             ) : (
//               <a id="ATU" onClick={(e) => setLocation(e.target.id)}>
//                 ATU
//               </a>
//             )}

//             {location === "KTU" ? (
//               <input
//                 onClick={getListingsFilter}
//                 value="apply KTU"
//                 class="filter-input"
//                 type="submit"
//               />
//             ) : (
//               <a id="KTU" onClick={(e) => setLocation(e.target.id)}>
//                 KTU
//               </a>
//             )}
//           </div>
//         </Container>
//         <br />
//       </Navbar>

//       {/* This div displays the loading alert when location is not yet in  */}
//       <div>
//         {loadLocation ? (
//           <Alert onClose={close} severity="success">
//             <AlertTitle>
//               Please wait... We're fetching the requested location.
//             </AlertTitle>
//           </Alert>
//         ) : null}
//       </div>

//       {isListing ? (
//         <div class="center-loader container d-flex  flex-column justify-content-center align-items-center">
//           <div>
//             {" "}
//             <Player
//               src="https://assets5.lottiefiles.com/packages/lf20_lCTb6r.json"
//               className="player"
//               loop
//               autoplay
//               // speed={30}
//               style={{ height: "500px", width: "500px" }}
//             />
//           </div>

//           <div className="">
//             <strong>loading properties...</strong>{" "}
//           </div>
//         </div>
//       ) : (
//         <div class=" container-fluid pt-5 ">
//           <LandingComponent />
//           <PropertiesCardComponents listings={listings} />
//         </div>
//       )}
//       <FooterComponent />
//     </div>
//   );

// };
// export default HomePage;

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
import { FooterComponent } from "../components/footer/FooterComponent";
import { Player } from "@lottiefiles/react-lottie-player";
import LandingComponent from "../components/landingPage/LandingComponent";
//aserts
import logo from "../asserts/gamkribAsserts/WEBLOGO1.webp";

/////////////////////////////////////////////////////////////////////////

// const api = "https://api.gamkrib.com";

// a componnts of the properties

console.log("jo");

export const PropertiesCardComponents = ({ listings }) => {
  // console.log(listings);

  return (
    <div className="hey container justify-content-center">
      {listings &&
        listings.map((listing, index) => (
          <React.Fragment key={index}>
            <div className="card   mb-5 bg-body m-4 rounded relative  property-card ">
              <Link to={`/property-detail/${listing.id}`}>
                <img
                  className="property-image card"
                  src={listing.images[0]}
                  width="290px"
                  height="290px"
                  alt="Images"
                />
                <div className="d-flex  justify-content-around ">
                  <span className="text-green">
                    <GoLocation color="green" /> {listing.location}
                  </span>
                  <span className="text-green">
                    {listing.gender === "Male" ? (
                      <FaMale color="green" />
                    ) : (
                      <FaFemale color="green" />
                    )}{" "}
                    {listing.gender}
                  </span>

                  <span className="text-green">
                    <BsFillPeopleFill /> {listing.number_of_persons} in a room
                  </span>
                  {/* <span>
                    <BsFillPeopleFill /> {listing.number_of_persons} in a room
                  </span> */}
                </div>{" "}
                <div className="price text-center text-green ">
                  <b className="h4 ">
                    <ImPriceTags /> GHS {listing.price}
                  </b>
                </div>
              </Link>
            </div>
          </React.Fragment>
        ))}
    </div>
  );
};

////////////////////////////////////////////////////////////////////////

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
      "https://api.gamkrib.com/listings/",

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
    //this has been break for debugging purposes

    //console.log(data)
  };

  const getListingsFilter = async () => {
    setloadLocation(true);

    //this code fetches the changed location
    const response = await fetch(
      `https://api.gamkrib.com/listings/?property_type=${location}`,

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

  //this useEffect fetches the initail location and the current location
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
    <div class="wrapper padding-left margin-right margin-left padding-right container-fluid">
      <Navbar
        className="navbar navbar-light d-flex  justify-content-between"
        // style="background-color: #e3f2fd;"
        bg="light"
        expand="lg"
        fixed="top"
      >
        <Container fluid className="d-flex brand  ">
          <Nav className=" h1 nav-brand " onClick={home}>
            <img src={logo} height="60" className="hover:" />
          </Nav>

        
          <div class="nav-auth scrollmenu .sticky disable-text-selection">
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

            {location === "Hostel" ? (
              <input
                onClick={getListingsFilter}
                value="apply Hostel"
                class="filter-input"
                type="submit"
              />
            ) : (
              <a id="Hostel" onClick={(e) => setLocation(e.target.id)}>
                Hostel
              </a>
            )}

            {location === "Homstel" ? (
              <input
                onClick={getListingsFilter}
                value="apply Homstel"
                class="filter-input"
                type="submit"
              />
            ) : (
              <a id="Homstel" onClick={(e) => setLocation(e.target.id)}>
                Homestel
              </a>
            )}



            {/* 

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
            */}
          </div>
          

          <Navbar.Toggle aria-controls="navbarScroll" />

    
         

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ml-auto me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >

              
             
              {user ? (
                <>
                  <Nav.Link>
                    <Link className="links text-green" to={"/profile"}>
                    <h4 color="green">Profile</h4>
                    </Link>
                  </Nav.Link>
                  <br />

                  <Nav.Link>
                    <Link className="links text-green" onClick={logoutUser}>
                    <h4 color="green">Log Out</h4>
                    </Link>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link>
                    <Link className="links text-green" to={"/login"}>
                      <h4 color="green">Sign in</h4>
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className="links text-green" to={"/register"}>
                    <h4 color="green">Register</h4>
                    </Link>
                  </Nav.Link>
                </>
              )}
             
            </Nav>
          </Navbar.Collapse>
        </Container>

        <br />
      </Navbar>

      {/* This div displays the loading alert when location is not yet in  */}
      <div>
        {loadLocation ? (
          <Alert onClose={close} severity="success">
            <AlertTitle>
              Please wait... We're fetching the requested location.
            </AlertTitle>
          </Alert>
        ) : null}
      </div>

      {isListing ? (
        <div class="center-loader container d-flex  flex-column justify-content-center align-items-center">
          <div>
            {" "}
            <Player
              src="https://assets5.lottiefiles.com/packages/lf20_lCTb6r.json"
              className="player"
              loop
              autoplay
              // speed={30}
              style={{ height: "500px", width: "500px" }}
            />
          </div>

          <div className="">
            <strong>loading properties...</strong>{" "}
          </div>
        </div>
      ) : (
        <div class=" container-fluid pt-5 ">
          <LandingComponent />
          <PropertiesCardComponents listings={listings} />
        </div>
      )}
      <FooterComponent />
    </div>
  );
};
export default HomePage;
