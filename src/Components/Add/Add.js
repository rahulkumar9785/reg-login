import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Add.css";
import { Modal, ModalBody, ModalHeader, Row, Col } from "reactstrap";
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../Action";
import addReducer from "../../Reducers/addReducer";

function Add() {

  const Employeedata = useSelector((state) => state.addReducer);
  var [formData, setFormData] = useState({
    id: getNewId(),
    name: "",
    age: 0,
    gender: "",
    department: "",
  });

  const [modal, setmodal] = useState(false);
  const [name, setName] = useState(" ");
  const [age, setAge] = useState("");
  var gender;
  var department;

  var [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  function getNewId() {
    return Employeedata.length + 1;  
  }
  const checkErrors = () => {
    var validationErrors = {};
    validationErrors.isValid = false;
    if (!formData.name.trim()) {
      validationErrors.name = "username is required";
      validationErrors.isValid = true;
    }

    if (!formData.age) {
      validationErrors.age = "age is required";
      validationErrors.isValid = true;
    }

    if (!formData.gender.trim()) {
      validationErrors.gender = "please select an option";
      validationErrors.isValid = true;
    }

    if (!formData.department.trim()) {
      validationErrors.department = "please select an option";
      validationErrors.isValid = true;
    }

    console.log(validationErrors);
    errors = validationErrors;
    setErrors(validationErrors);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.keys(errors).length === 0) {
      alert("Form Submitted successfully");
    }

    setErrors({});
    dispatch(addUser(formData));
    setFormData({
      id: getNewId(),
      name: "",
      age: 0,
      gender: "",
      department: "",
    });
    setmodal(false);
  };

  const handleInput = (event) => {
    //setName(event.target.value);
    const { name, value } = event.target;
    formData.name = value;
  };

  const onChangeHandler = (event) => {
    // setAge(event.target.value);
    const { name, value } = event.target;
    formData.age = value;
  };

  const handleGenderChange = (event) => {
    //gender = e.value;
    const { name, value } = event.value;
    formData.gender = event.value;
    console.log(formData.gender, event.value);
  };

  const handleDepartmentChange = (e) => {
    //department = e.value;
    const { name, value } = e.value;
    formData.department = e.value;
  };
  let navigate = useNavigate();

  const options = [
    { value: "MALE", label: "male" },
    { value: "FEMALE", label: "female" },
    { value: "TRANS", label: "trans" },
  ];

  const options1 = [
    { value: "DE", label: "DE" },
    { value: "DX", label: "DX" },
    { value: "AWS", label: "AWS" },
  ];

  return (
    <div>
      <Modal size="lg" isOpen={modal} toggle={() => setmodal(!modal)}>
        <ModalHeader toggle={() => setmodal(!modal)}>
          Submit Details
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <Row>
              <Col lg={12}>
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    // value={name}
                    onChange={handleInput}
                    autoComplete="off"
                  />
                  {errors.name && (
                    <span style={{ color: "red" }}>{errors.name}</span>
                  )}
                </div>
              </Col>

              <Col lg={12}>
                <div>
                  <label htmlFor="Age">Age</label>
                  <input
                    type="number"
                    className="form-control"
                    onChange={onChangeHandler}
                    // value={age}
                    autoComplete="off"
                  />
                  {errors.age && (
                    <span style={{ color: "red" }}>{errors.age}</span>
                  )}
                </div>
              </Col>

              <Col lg={12}>
                <div>
                  <label htmlFor="Gender">Gender</label>

                  <Select
                    className="form-control"
                    options={options}
                    value={gender}
                    onChange={(e) => handleGenderChange(e)}
                    autoComplete="off"
                  >
                    {errors.gender && <span>{errors.gender}</span>}
                  </Select>
                </div>
              </Col>

              <Col lg={12}>
                <div>
                  <label htmlFor="Department">Department</label>

                  <Select
                    className="form-control"
                    value={department}
                    options={options1}
                    onChange={(e) => handleDepartmentChange(e)}
                  >
                    {errors.department && <span>{errors.department}</span>}
                  </Select>
                </div>
              </Col>
            </Row>
          </form>

          <button
            className="btn-mt-3"
            style={{ backgroundColor: "#0b3629", color: "white" }}
            onClick={(event) => {
              checkErrors();
              console.log(errors);
              if (errors.isValid) {
                alert("invalid");
              } else {
                handleSubmit(event);
                navigate("/add");
              }
            }}
          >
            Submit
          </button>

          <button
            className="btn-mt-3"
            style={{ backgroundColor: "red", color: "white" }}
            onClick={() => {
              navigate("/LoginSignup");
            }}
          >
            Cancel
          </button>
        </ModalBody>
      </Modal>
      <button
        className="btn-mt-3"
        style={{ backgroundColor: "#0b3629", color: "white" }}
        onClick={() => setmodal(true)}
      >
        Add
      </button>
      <button
        className="btn-mt-3"
        style={{ backgroundColor: "#0b3629", color: "white" }}
        onClick={() => navigate("/")}
      >
        Home
      </button>
      <div className="container">
        <h1>List of Employees</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {Employeedata.map((user, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.department}</td>
                <td>
                  <Link
                    to={"/edit/"+(index+1)}
                    className="btn btn-sm btn-primary"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Add;
