import React from "react";
import { Card, Container, Button, Form } from "react-bootstrap";
import schema from "../schemas/forgotPasswordSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { reset } = useAuth();
  const notify = () => toast("Your password is reset.Check your email inbox.");

  const submit = (data) => {
    const { email } = data;
    reset(email);
    notify();
  };
  return (
    <Container className="min-vh-100 d-flex justify-content-center align-items-center">
      <Card className="p-3 signup-form">
        <Card.Body>
          <h2 className="text-center mb-4">Forgot password</h2>
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

            <Button
              type="submit"
              className="w-100 text-center mt-2"
              variant="danger"
            >
              Reset
            </Button>
          </Form>
        </Card.Body>

        <div className="w-100 text-center mt-2">
          <Link to="/login" className="text-danger ml-3">
            Login
          </Link>
        </div>
      </Card>
      <ToastContainer />
    </Container>
  );
};

export default ForgotPassword;
