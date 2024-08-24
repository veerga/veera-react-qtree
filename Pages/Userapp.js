import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Userlist from './Userlist'
import Createuser from './Createuser'

function Userapp() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Userlist/>}/>
      <Route path="/create" element={<Createuser/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Userapp
