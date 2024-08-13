import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Contacts from "../Contacts/Constacts";

function Routers() {
  return (
    <BrowserRouter>
    <Navbar/>
    <hr/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>

    </BrowserRouter>

  )
}

export default Routers