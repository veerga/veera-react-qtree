import React, { createContext } from 'react'
import Gcomponents1 from './Gcomponents1';



export const usercontext= createContext();

const Globalstate=()=> {
     
    const student={
        name:"madhanasshri",
        age:6,
        class:"ukga"
    }
 return (
  <usercontext.Provider value={student}>

    <h1>
<Gcomponents1/>
    </h1>
  </usercontext.Provider>
  )
}

export default Globalstate;