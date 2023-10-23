import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader, Row, Col } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import addReducer from "./Reducers/addReducer";
import { updateUser } from "./Action";

const Update = () => {
  const { index } = useParams();
  const Employeedata = useSelector((state) => state.addReducer);
  const existingUser = Employeedata.filter((f) => f.index == index);
  const existingUser1 = existingUser[0];
  const { id, name, age, gender, department } = existingUser1;
  const dispatch = useDispatch();

  const [uname, setName] = useState(name);
  const [uage, setAge] = useState(age);
  var ugender;
  var udepartment;
  var [formData, setFormData] = useState({
    id: id,
    name: uname,
    age: uage,
    gender: gender,
    department: department,
  });

  const [modal, setmodal] = useState(true);

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

  const handleInput = (event) => {
    const { name, value } = event.target;
    setName(event.value);
    formData.name = value;
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setAge(event.value);
    formData.age = value;
  };

  const handleGenderChange = (event) => {
    const { name, value } = event.value;
    formData.gender = event.value;
  };

  const handleDepartmentChange = (e) => {
    const { name, value } = e.target;
    formData.department = e.value;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormData({
      id: id,
      name: uname,
      age: uage,
      gender: ugender,
      department: udepartment,
    });

    console.log(formData);
    dispatch(updateUser(formData));
    setmodal(false);
  };

  return (
    existingUser && (
      <div>
        <Modal size="lg" isOpen={modal} toggle={() => setmodal(!modal)}>
          <ModalHeader toggle={() => setmodal(!modal)}>
            Update Details
          </ModalHeader>
          <ModalBody>
            <form>
              <Row>
                <Col lg={12}>
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={uname}
                      onChange={handleInput}
                    />
                  </div>
                </Col>

                <Col lg={12}>
                  <div>
                    <label htmlFor="Age">Age</label>
                    <input
                      type="number"
                      className="form-control"
                      value={uage}
                      onChange={onChangeHandler}
                    />
                  </div>
                </Col>

                <Col lg={12}>
                  <div>
                    <label htmlFor="Gender">Gender</label>

                    <Select
                      className="form-control"
                      placeholder={gender}
                      options={options}
                      value={ugender}
                      onChange={(e) => handleGenderChange(e)}
                      autoComplete="off"
                    ></Select>
                  </div>
                </Col>

                <Col lg={12}>
                  <div>
                    <label htmlFor="Department">Department</label>

                    <Select
                      className="form-control"
                      placeholder={department}
                      value={udepartment}
                      options={options1}
                      onChange={(e) => handleDepartmentChange}
                    ></Select>
                  </div>
                </Col>
              </Row>
            </form>

            <button
              className="btn-mt-3"
              style={{ backgroundColor: "#0b3629", color: "white" }}
              onClick={(e) => {
                handleSubmit(e);
                navigate("/Add");
              }}
            >
              Update
            </button>
            <button
              className="btn-mt-3"
              style={{ backgroundColor: "#0b3629", color: "white" }}
              onClick={(e) => {
                handleSubmit(e);
                navigate("/Add");
              }}
            >
              Back
            </button>
          </ModalBody>
        </Modal>
      </div>
    )
  );
};

export default Update;
