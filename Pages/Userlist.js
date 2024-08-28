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

        const handledelete =async (id)=>{
         await axios.delete(
            `https://66c777fd732bf1b79fa6a44a.mockapi.io/uselist/${id}`
          );
          getdata();
          alert("user deleted")
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
          <th scope="col">firstname</th>
          <th scope="col">Age</th>
          <th scope="col">mobilenumber</th>
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
              
              <td>{item1.firstname}</td>
              <td>{item1.Age}</td>
              <td>{item1.mobilenumber}</td>
              <td>{item1.address}</td>
              <td>{item1.Emailid}</td>
              <td>{item1.password}</td>
              <td>
              <Link to={`/edit/${item1.id}`} className="btn btn-success btn-sm">Edit</Link>
              <button className="btn btn-danger btn-sm" onClick={()=>{
                handledelete(item1.id);
              }}>delete</button>
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