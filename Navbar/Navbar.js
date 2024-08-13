import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
 

function Navbar() {
    // const stylemodule={disply:"",gap:"10px"};
  return (
    <div >
      <div className="stylemodule">
        <div><Link to={"/"}>Home</Link></div>
        
        <div><Link to={"/about"}>About</Link></div>
        <div><Link to={"/blog"}>Blog</Link></div>
        <div><Link to={"/contacts"}>Contacts</Link></div> 
      </div>
    </div>
  );
}

export default Navbar;
