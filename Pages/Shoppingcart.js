import React from "react";
import Productcard from "../Components/Productcard";
import img1 from "../Assetsimage/c1.png";
import img2 from "../Assetsimage/c2.jpg";
import img3 from "../Assetsimage/c3.jpg";
import img4 from "../Assetsimage/c4.jpg";
import img5 from "../Assetsimage/c5.jpg";
import img6 from "../Assetsimage/c6.jpg";




function Shoppingcart() {

  const datas=[
    {
      id:1,
      name:"surai potru",
      price:"Rs300",
      img:img1,
      desc:"It is believed to have originated in the early 1900s, around the time when motion pictures were first becoming popular",
      isstock:true

  },
  {
    id:2,
      name:"veera",
      price:"Rs200",
      img:img2,
      desc:"It is believed to have originated in the early 1900s, around the time when motion pictures were first becoming popular",
      isstock:true
  },
  {
    id:3,
      name:"kadhal",
      price:"Rs300",
      img:img3,
      desc:"It is believed to have originated in the early 1900s, around the time when motion pictures were first becoming popular",
      isstock:true
  },
  {
    id:4,
      name:"vali",
      price:"Rs250",
      img:img4,
      desc:"It is believed to have originated in the early 1900s, around the time when motion pictures were first becoming popular",
      isstock:false
  },
  {
    id:5,
      name:"vazhai",
      price:"Rs400",
      img:img5,
      desc:"It is believed to have originated in the early 1900s, around the time when motion pictures were first becoming popular",
      isstock:false
  },
  {
    id:6,
      name:"thangalan",
      price:"Rs200",
      img:img6,
      desc:"It is believed to have originated in the early 1900s, around the time when motion pictures were first becoming popular",
      isstock:false
  }
]

  return (
    <div className="container-fluid overalldiv">
      <div className="row">
        <div className="col-10">left
          <div className="row d-flex">
            {datas.map((item)=>{
              return <Productcard item={item}/>
            })}
          

          </div>
        </div>
        <div className="col-2">right</div>
      </div>
    </div>
  );
}

export default Shoppingcart;
