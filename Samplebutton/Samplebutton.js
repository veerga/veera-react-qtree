import React from 'react'

function Samplebutton(props) {
  return (
    <div><button className="samplebtn" style={{backgroundColor:props.color}}>
        {props.username}</button></div>
  )
}

export default Samplebutton