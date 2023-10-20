import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader, Row, Col } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import { useSelector } from "react-redux";
import addReducer from "./Reducers/addReducer";

const Update = () => {
    
  const { index } = useParams();
  const Employeedata = useSelector((state) => state.addReducer);
  const existingUser = Employeedata.filter((f) => f.index == index);
  const existingUser1 = existingUser[0];
  const { name, age, gender, department } = existingUser1;
  console.log(existingUser);
  console.log(name, age, gender, department);

  var [formData, setFormData] = useState({
    id: '',
    name: "",
    age: 0,
    gender: "",
    department: "",
  });

  const [uname, setName] = useState(name);
  const [uage, setAge] = useState(age);
  var ugender;
  var udepartment;
 
  const [modal, setmodal] = useState(true);

  let navigate = useNavigate();

//   const handleGenderChange = (event) => {
//     //gender = e.value;
//     const { name, value } = event.value;
//     setGender(event.value);
//     console.log(ugender, event.value);
//   };

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
          Update Details
        </ModalHeader>
        <ModalBody>
          <form>
            <Row>
              <Col lg={12}>
                <div>
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" value={uname} 
                  onChange={e => setName(e.target.value)}
                  />
                </div>
              </Col>

              <Col lg={12}>
                <div>
                  <label htmlFor="Age">Age</label>
                  <input type="number" className="form-control" value={uage} 
                  onChange={e => setAge(e.target.value)}
                  />
                </div>
              </Col>

              <Col lg={12}>
                <div>
                  <label htmlFor="Gender">Gender</label>

                  <Select
                    className="form-control"
                    options={options}
                    value={ugender}
                    onChange={(e) => handleGenderChange(e)}
                    // onChange={e =>{console.log(e.target)}}
                   // defaultValue={ugender}
                  ></Select>
                </div>
              </Col>

              <Col lg={12}>
                <div>
                  <label htmlFor="Department">Department</label>

                  <Select
                    className="form-control"
                    value={udepartment}
                    options={options1}
                    onChange={e => handleDepartmentChange(e.target.value)}
                   // defaultValue={udepartment}
                  ></Select>
                </div>
              </Col>
            </Row>
          </form>

          <button
            className="btn-mt-3"
            style={{ backgroundColor: "#0b3629", color: "white" }}
            onClick={() => {
              navigate("/Add");
            }}
          >
            Update
          </button>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Update;
