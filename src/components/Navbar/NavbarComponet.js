import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AuthContext from "../../context/AuthContext";

//asserts
import logo from "../../asserts/gamkribAsserts/WEBLOGO1.webp";

export const NavbarComponent = () => {
  const home = () => {
    history.push("/");
  };

  let { user, logoutUser } = useContext(AuthContext);
  const history = useHistory();
  return (
    <div>
      {/*  */}

      <Navbar bg="light" expand="lg" fixed="top">
        <Container fluid>
          <Navbar className="nav-brand h2 " onClick={home}>
            <img src={logo} height="60" />
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
      {/*  */}
    </div>
  );
};
