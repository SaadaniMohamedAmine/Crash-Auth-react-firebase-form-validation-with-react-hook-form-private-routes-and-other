import React, { useEffect } from "react";
import { Card, Form, Button, Container, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../schemas/loginSchema";
import clsx from "clsx";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const { login, currentUser, error } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submit = (data) => {
    const { email, password } = data;
    login(email, password);
    if (currentUser) {
      navigate("/dashbord");
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashbord");
      }
    });
  }, []);
  return (
    <Container className="min-vh-100 pt-5 d-flex justify-content-center align-items-center">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Card className="p-3 mt-5 signup-form">
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          {error && (
            <Alert variant="danger" className="text-center">
              {error.split(/[()]/)[1]}
            </Alert>
          )}
          <Form onSubmit={handleSubmit(submit)}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                {...register("email")}
                className={clsx(errors.email ? "is-invalid" : "")}
              />
              <div className="invalid-Dashbordback">
                {errors.email?.message}
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                {...register("password")}
                className={clsx(errors.password ? "is-invalid" : "")}
              />
              <div className="invalid-Dashbordback">
                {errors.password?.message}
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password Confirm</Form.Label>
              <Form.Control
                type="password"
                {...register("confirmPassword")}
                className={clsx(errors.confirmPassword ? "is-invalid" : "")}
              />
              <div className="invalid-Dashbordback">
                {errors.confirmPassword?.message}
              </div>
            </Form.Group>
            <Button
              type="submit"
              className="w-100 text-center mt-2"
              variant="danger"
            >
              Log In
            </Button>
          </Form>
        </Card.Body>
        <div className="w-100 text-center mt-2">
          You don't have an account ?{" "}
          <Link to="/signup" className="text-danger">
            Sign Up
          </Link>
        </div>
        <div className="w-100 text-center mt-2">
          <Link to="/forgot-password" className="text-danger ml-3">
            Forgot Password
          </Link>
        </div>
      </Card>
    </Container>
  );
};

export default Login;

///forgot-password
