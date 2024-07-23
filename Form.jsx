import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

const FormData = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    username: yup.string().required("Username is required"),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    terms: yup
      .bool()
      .oneOf([true], "Terms must be accepted")
      .required("Terms must be accepted"),
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        terms: false,
      }}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form
          className="p-5 border rounded"
          style={{ backgroundColor: "#C0C0C0", width: "150%" }}
        >
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <Field
              type="text"
              id="firstName"
              name="firstName"
              className={`form-control ${
                touched.firstName && errors.firstName ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">{errors.firstName}</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <Field
              type="text"
              id="lastName"
              name="lastName"
              className={`form-control ${
                touched.lastName && errors.lastName ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">{errors.lastName}</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <Field
              type="text"
              id="username"
              name="username"
              className={`form-control ${
                touched.username && errors.username ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">{errors.username}</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <Field
              type="email"
              id="email"
              name="email"
              className={`form-control ${
                touched.email && errors.email ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">{errors.email}</div>
            <div className="form-text text-muted">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              className={`form-control ${
                touched.password && errors.password ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">{errors.password}</div>
          </div>
          <div className="mb-3 form-check">
            <Field
              type="checkbox"
              id="terms"
              name="terms"
              className={`form-check-input ${
                touched.terms && errors.terms ? "is-invalid" : ""
              }`}
            />
            <label className="form-check-label">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">{errors.terms}</div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormData;
