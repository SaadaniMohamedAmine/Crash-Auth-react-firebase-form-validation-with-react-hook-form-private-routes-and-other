import React from "react";
import { Navigate } from "react-router-dom";
import Dashbord from "../components/Dashbord";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoute = () => {
  const { currentUser } = useAuth();
  return currentUser ? <Dashbord /> : <Navigate to="/login" />;
};

export default PrivateRoute;
