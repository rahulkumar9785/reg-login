import React, { useState } from "react";
import "./LoginSignup.css";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "reactstrap";

const LoginSignup = () => {
  let navigate = useNavigate();

  var [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  var [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    formData.name = value
  };
  const handleChange1 = (e) => {
    const { name, value } = e.target;
    formData.password = value
  };
  const handleChange2 = (e) => {
    const { name, value } = e.target;
    formData.email = value
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    validationErrors.isValid = false;
    if (!formData.name.trim()) {
      validationErrors.name = "username is required";
      validationErrors.isValid = true;
    }

    if (!formData.email.trim()) {
      validationErrors.email = "email is required";
      validationErrors.isValid = true;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "invalid email";
      validationErrors.isValid = true;
    }

    if (!formData.password.trim()) {
      validationErrors.password = "password is required";
      validationErrors.isValid = true;
    } else if (formData.password.length < 6) {
      validationErrors.password = "password should be at least 5 char";
      validationErrors.isValid = true;
    }
    console.log(validationErrors);
    errors = validationErrors
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted successfully");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Employee Form</div>
        <div className="underline">.</div>
      </div>
      <form>
        <Row>
          <Col lg={8}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                onChange={handleChange}
              />
                {errors.name && <span>{errors.name }</span>}
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <div>
              <label htmlFor="name">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="example@gmail.com"
                autoComplete="off"
                onChange={handleChange2}
              />
                {errors.email && <span>{errors.email}</span>}
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <div>
              <label htmlFor="name">password</label>
              <input
                type="text"
                className="form-control"
                placeholder="*******"
                onChange={handleChange1}
              />
                {errors.password && <span>{errors.password}</span>}
            </div>
          </Col>
        </Row>
      </form>

      
      
        <button
          onClick={(e) => {
            handleSubmit(e);
            console.log(errors);
            if (errors.isValid) {
              alert('invalid');
            } else {
              navigate("/add");
            }
          }}
        >
          Log In
        </button>
      </div>
  );
};

export default LoginSignup;
