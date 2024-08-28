import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Userlist from './Userlist'
import Createuser from './Createuser'
import Edituser from './Edituser'

function Userapp() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Userlist/>}/>
      <Route path="/create" element={<Createuser/>}/>
      <Route path="/edit/:id" element={<Edituser/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Userapp
