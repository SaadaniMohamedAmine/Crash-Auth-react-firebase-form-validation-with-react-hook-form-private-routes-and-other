import React from "react";
import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container>
      <div className=" mt-5 py-5">
        <h1>Sorry ,the page you look for is not available.</h1>
        <h3>Please check the url address.</h3>
      </div>
    </Container>
  );
};

export default NotFound;
