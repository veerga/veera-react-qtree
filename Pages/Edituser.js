import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edituser() {
  const Navigate = useNavigate();
  const params = useParams();

  const [userinput, setuserinput] = useState({
    firstname: "",
    Age: "",
    Emailid: "",
    mobilenumber: "",
    password: "",
  });

  useEffect(() => {
    getuserdata();
  }, []);

  const getuserdata = async () => {
    const userdata = await axios.get(
      `https://66c777fd732bf1b79fa6a44a.mockapi.io/uselist/${params.id}`
    );
    setuserinput(userdata.data);
  };

  const handlechange = ({ target: { value, name } }) => {
    setuserinput({ ...userinput, [name]: value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    const { firstname, Age, Emailid, mobilenumber, password } = userinput;
    await axios.put(
      `https://66c777fd732bf1b79fa6a44a.mockapi.io/uselist/${params.id}`,
      {
        firstname,
        Age,
        Emailid,
        mobilenumber,
        password,
      }
    );
    alert("User Registered Successfully");

    Navigate("/");
  };
  return (
    <div className="userRegisterForm">
      <form onSubmit={handlesubmit}>
        <h1 style={{ textAlign: "center" }} className="mb-5">
          Edit user
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
}

export default Edituser;
