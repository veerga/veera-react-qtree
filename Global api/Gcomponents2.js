import React, { useContext } from 'react'
import { usercontext } from './Globalstate'
import Gcomponents3 from './Gcomponents3'

function Gcomponents2() {
    const value=useContext(usercontext)

  return (
      <div>Gcomponents2{value.age}{value.class}
      
      <h1><Gcomponents3/></h1>
      </div>
  )
}

export default Gcomponents2