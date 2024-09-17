import React, { useContext } from 'react'
import { usercontext } from './Globalstate'
import Gcomponents2 from './Gcomponents2';

function Gcomponents1() {

    const value=useContext(usercontext)
    console.log(value);
  return (
    <div>Gcomponents1{value.name}{value.age}
    <h1>
        <Gcomponents2/>
    </h1>

    </div>
  )
}


export default Gcomponents1