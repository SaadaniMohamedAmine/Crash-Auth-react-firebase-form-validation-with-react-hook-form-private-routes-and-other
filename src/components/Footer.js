import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Footer = () => {
  const { currentUser } = useAuth();
  return (
    <footer
      id="sticky-footer"
      className="flex-shrink-0 py-3 bg-dark text-white-50 mt-2"
    >
      <div className="container text-center">
        <small>Copyright &copy; &nbsp; &nbsp; The New Brand</small>
        <p className="text-center w-100">
          <Link to="/">Home</Link>
          {currentUser ? (
            <Link to="/dashbord" className="mx-5">Dashbord</Link>
          ) : (
            <React.Fragment>
              <Link to="/signup" className="mx-5">
                Sign Up
              </Link>
              <Link to="login">Login</Link>
            </React.Fragment>
          )}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
