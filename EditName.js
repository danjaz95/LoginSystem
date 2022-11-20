import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "./editName.css";

function EditName() {
  const nav = useNavigate();

  useEffect(() => {
    const checkerMail = localStorage.getItem("Email");

    if (checkerMail === null) {
      nav("/after");
    }
  });

  const [newName, setNewName] = useState({
    firstName: "",
    lastName: "",
  });
  const [Status, setStatus] = useState("");

 
  var editName = () => {
    const userEmail = localStorage.getItem("Email");

    axios
      .post("http://localhost:3001/EditName", {
        email: userEmail,
        firstName: newName.firstName,
        lastName: newName.lastName,
      })
      .then((response) => {
        setStatus(response.data.message);
        if (response.data.message === "Name change successful!") {
          setTimeout(() => {
            nav("/after");
          }, 2000);
        }
      });
  };

  function submitHandler() {
    console.log(newName);

    if (newName.firstName !== "" || newName.lastName !== "") {
      editName();
    } else {
      setStatus("Please enter a valid name");
    }
  }

  function colorPicker() {
    if (Status === "Name change successful!") return "success";

    if (Status === "Error" || Status === "Please enter a valid name")
      return "danger";
    else return "";
  }

  return (
    <div>
      <Alert key={colorPicker()} variant={colorPicker()}>
        {Status}
      </Alert>

      <div className="position">
      <h3>Please enter the new name:</h3>
        <InputGroup className="mb-3">
          
          <InputGroup.Text>Enter New first and last name</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Enter your First Name"
            onChange={(e) =>
              setNewName({ ...newName, firstName: e.target.value })
            }
            value={newName.firstName}
            aria-label="First name"
          />
          <Form.Control
            type="text"
            placeholder="Enter your Last Name"
            onChange={(e) =>
              setNewName({ ...newName, lastName: e.target.value })
            }
            value={newName.lastName}
            aria-label="Last name"
          />

          <Button className="" variant="secondary" onClick={submitHandler}>
            Confirm
          </Button>
        </InputGroup>
      </div>
    </div>
  );
}

export default EditName;
