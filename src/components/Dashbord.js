import React from "react";
import { Container, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import dayjs from "dayjs";

const Dashbord = () => {
  const { logout, currentUser } = useAuth();

  return (
    <Container className="">
      <Helmet>
        <title>Dashbord</title>
      </Helmet>
      <div className="dashbord-page min-vh-100">
        <div className="card p-4">
          <div className=" image d-flex flex-column justify-content-center align-items-center">
            {" "}
            <button className="btn btn-secondary">
              {" "}
              <img src="/no-one.jpg" height="100" width="100" />
            </button>{" "}
            <span className="name mt-3">
              {currentUser && currentUser.email}
            </span>{" "}
            <div className="d-flex flex-row justify-content-center align-items-center gap-2 my-3">
              {" "}
              <span className="idd1">Oxc4c16a645_b21a</span>{" "}
              <span>
                <i className="fa fa-copy"></i>
              </span>{" "}
            </div>
            <div className=" d-flex mt-2">
              {" "}
              <Link className="btn1 btn-dark text-center" to="/update-profile">
                Edit Profile
              </Link>{" "}
              <button
                className="btn1 btn-dark text-center mx-3"
                onClick={logout}
              >
                Log Out
              </button>
            </div>
            <div className=" px-2 rounded mt-4 date ">
              {" "}
              <span className="join">
                Joined{" "}
                {dayjs(currentUser.metadata.creationTime).format("MMM D, YYYY")}
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Dashbord;
