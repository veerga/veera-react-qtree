import React from 'react'
import img1 from "../Assetsimage/c1.png";

function Productcard(props) {
  return (
    <div class="card col-3">
      <img src={props.item.img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.item.name}</h5>
        <h6>{props.item.price}</h6>
        <p class="card-text">
          {props.item.desc}
        </p>
        <p>{(props.item.isstock === true) ? "- in stock" : "- out of stock"}</p>
        <button class="btn btn-primary" disabled={!props.item.isstock}>Add to cart</button>
          
        
      </div>
    </div>
  )
}

export default Productcard