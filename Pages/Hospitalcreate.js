import React, { useRef, useState } from 'react'

function Hospitalcreate() {

    const input1=useRef("")
    const input2=useRef("")
    const input3=useRef("")
    const input4=useRef("")

    const[state,setstate]=useState("")

 const onsubmit=()=>{
         setstate(input1.current.value)
         setstate(input2.current.value)
         setstate(input3.current.value)
         setstate(input4.current.value)
         
    }

  return (
    <div>
        <h1>Hospital Details</h1>
        <ul>
            <li>Hospital Name <input type="text" placeholder="Enter hospital name" ref={input1} /></li>
            <li>Docter Name <input type="text" placeholder="Enter Docter name" ref={input2}/></li>
            <li>Speclist <input type="text" placeholder="Enter Speclist" ref={input3}/></li>
            <li>Mobile Number<input type="number" placeholder="Enter Mobile Number" ref={input4}/></li>
            
            </ul>

            <button onClick={onsubmit}>Add</button>

          <h1>{input1.current.value}</h1>
          <h1>{input2.current.value}</h1>
          <h1>{input3.current.value}</h1>
          <h1>{input4.current.value}</h1>
          
    </div>
  )
}

export default Hospitalcreate