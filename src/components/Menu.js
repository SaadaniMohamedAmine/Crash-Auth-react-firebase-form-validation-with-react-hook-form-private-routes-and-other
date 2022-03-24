import React from "react";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Menu = () => {
  const { currentUser } = useAuth();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Link className="navbar-brand" to="/">
          The new Brand
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            {currentUser ? (
              <Link className="nav-link" to="/dashbord">
                Dashbord
              </Link>
            ) : (
              <React.Fragment>
                <Link className="nav-link" to="/signup">
                  Sign Up
                </Link>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </React.Fragment>
            )}
            {/* <Link className="nav-link" to="/signup">Sign Up</Link>
            <Link className="nav-link" to="/login">Login</Link> */}
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
