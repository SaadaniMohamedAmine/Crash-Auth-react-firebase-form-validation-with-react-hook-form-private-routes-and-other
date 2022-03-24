import React from "react";
import schema from "../schemas/updateSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import { Card, Form, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const UpdateProfile = () => {
  const { currentUser, updatedEmail, updatedPassword } = useAuth();
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
    const promises = [];
    if (email !== currentUser.email) {
      promises.push(updatedEmail(email));
    }
    if (password) {
      promises.push(updatedPassword(password));
    }
    Promise.all(promises)
      .then(() => {
        navigate("/dashbord");
      })
      .catch((err) => {
        console.log("Failed to update profile !", err);
      })
      .finally(() => {
        console.log("Manipulating the operation !");
      });
  };
  return (
    <Container className="min-vh-100 d-flex justify-content-center align-items-center">
      <Helmet>
        <title>Update Profile</title>
      </Helmet>
      <Card className="p-3 signup-form">
        <Card.Body>
          <h2 className="text-center mb-4">Update profile</h2>
          <Form onSubmit={handleSubmit(submit)}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                {...register("email")}
                className={clsx(errors.email ? "is-invalid" : "")}
                defaultValue={currentUser.email}
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
                placeholder="Leave blank to keep the same"
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
                placeholder="Leave blank to keep the same"
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
              Update
            </Button>
          </Form>
        </Card.Body>
        <div className="w-100 text-center mt-2">
          <Link to="/dashbord" className="text-danger">
            Cancel
          </Link>
        </div>
      </Card>
      <ToastContainer />
    </Container>
  );
};

export default UpdateProfile;
