import axios from "axios";
import React, {useEffect, useState } from 'react'
import { Link } from "react-router-dom";


const Userlist=()=> {
    
    const [users, setuser] = useState([]);


      
        useEffect(() => {
          getdata();
        }, []);
      
        const getdata = async () => {
          let userdata = await axios.get(
            "https://66c777fd732bf1b79fa6a44a.mockapi.io/uselist"
          );
      
        
      
          setuser(userdata.data);
        };
        // Create     read      update     delete
        // POST       GET        PUT       DELETE
  return (
    <div>
        <Link to={"/create"} class="btn btn-primary m-3">Create user</Link>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">mobile</th>
          <th scope="col">address</th>
          <th scope="col">Emailid</th>
          <th scope="col">Password</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item1, index) => {
          return (
            <tr>
              <th scope="row">{index + 1}</th>
              {/* <td>{item1.ID}</td> */}
              <td>{item1.name}</td>
              <td>{item1.age}</td>
              <td>{item1.mobilenumber}</td>
              <td>{item1.address}</td>
              <td>{item1.emailid}</td>
              <td>{item1.password}</td>
              <td>
              <button className="btn btn-success btn-sm">Edit</button>
              <button className="btn btn-danger btn-sm">delete</button>
              </td>
          
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
  )
}

export default Userlist