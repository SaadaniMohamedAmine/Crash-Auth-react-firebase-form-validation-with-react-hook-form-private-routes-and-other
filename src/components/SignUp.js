import React, { useEffect } from "react";
import { Card, Form, Button, Container, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../schemas/registerSchemas";
import clsx from "clsx";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const SignUp = () => {
  const { signUp, error } = useAuth();
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
    signUp(email, password);
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
        <title>Sign Up</title>
      </Helmet>
      <Card className="p-3 mt-5 signup-form">
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && (
            <Alert variant="danger" className="text-center">
              {error}
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
              Sign Up
            </Button>
          </Form>
        </Card.Body>
        <div className="w-100 text-center mt-2">
          Already have an account ?{" "}
          <Link to="/login" className="text-danger">
            Log In
          </Link>
        </div>
      </Card>
    </Container>
  );
};

export default SignUp;
