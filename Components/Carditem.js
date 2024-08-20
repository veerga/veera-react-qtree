import React from "react";

function Carditem(props) {
  return (
    
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">{props.item.name}</div>
          <span>{props.item.price}</span>
        </div>
        <button class="badge text-bg-primary rounded-pill" onClick={()=>{props.handleremovefromcart(props.item)}}>✕</button>
      </li>
    
  );
}

export default Carditem;
