import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Createuser.css";

const Createuser = () => {
  const Navigate = useNavigate();

  const [userinput, setuserinput] = useState({
    firstname: "",
    Age: "",
    Emailid: "",
    mobilenumber: "",
    password: "",
  });

  const handlechange = ({ target: { value, name } }) => {
    setuserinput({ ...userinput, [name]: value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    // const { firstname, Age, Emailid, mobilenumber, password } = userinput;

    const postdata = await axios.post(
      "https://66c777fd732bf1b79fa6a44a.mockapi.io/uselist",
      // {
      //   firstname,
      //   Age,
      //   Emailid,
      //   mobilenumber,
      //   password,
      // }
      setuserinput
    );

    alert("User Registered Successfully");

    Navigate("/");
  };
  return (
    <div className="userRegisterForm">
      <form onSubmit={handlesubmit}>
        <h1 style={{ textAlign: "center" }} className="mb-5">
          User Register
        </h1>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            First Name
          </label>
          <input
            type="text"
            class="form-control"
            name="firstname"
            value={userinput.firstname}
            onChange={handlechange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Age
          </label>
          <input
            type="number"
            class="form-control"
            name="Age"
            value={userinput.Age}
            onChange={handlechange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Emailid
          </label>
          <input
            type="email"
            class="form-control"
            name="Emailid"
            value={userinput.Emailid}
            onChange={handlechange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            mobilenumber
          </label>
          <input
            type="number"
            class="form-control"
            name="mobilenumber"
            value={userinput.mobilenumber}
            onChange={handlechange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            name="password"
            value={userinput.password}
            onChange={handlechange}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Createuser;
