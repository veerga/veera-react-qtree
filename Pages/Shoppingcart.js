import React, { useReducer, useState } from "react";
import Productcard from "../Components/Productcard";
import img1 from "../Assetsimage/c1.png";
import img2 from "../Assetsimage/c21.jpg";
import img3 from "../Assetsimage/c31.jpg";
import img4 from "../Assetsimage/c4.jpg";
import img5 from "../Assetsimage/c51.avif";
import img6 from "../Assetsimage/c6.jpg";
import Carditem from "../Components/Carditem";
import { type } from "@testing-library/user-event/dist/type";

function Shoppingcart() {
  const reducer=(state,action)=>{
    switch(action.type){
      case "Addtocart":
        return{
          ...state,
          carditem:[...state.carditem, action.item],
          total:state.total + action.item.price,
        };

        case "Removefromcart":
          return{
            ...state,
            carditem:state.carditem.filter(
              (item)=>item.id != action.item.id
            
            ),
            total:state.total - action.item.price,
          };
          default:
            return state;
    }
  };

  const [state,dispatch]=useReducer(reducer,{
     datas : [
      {
        id: 1,
        name: "surai potru",
        price: 300,
        img: img1,
        desc: "It is believed to have originated in the early 1900s, around the time when motion pictures were first becoming popular",
        isstock: true,
      },
      {
        id: 2,
        name: "veera",
        price: 200,
        img: img2,
        desc: "It is believed to have originated in the early 1900s, around the time when motion pictures were first becoming popular",
        isstock: true,
      },
      {
        id: 3,
        name: "kadhal",
        price: 300,
        img: img3,
        desc: "It is believed to have originated in the early 1900s, around the time when motion pictures were first becoming popular",
        isstock: true,
      },
      {
        id: 4,
        name: "vali",
        price: 250,
        img: img4,
        desc: "It is believed to have originated in the early 1900s, around the time when motion pictures were first becoming popular",
        isstock: false,
      },
      {
        id: 5,
        name: "vazhai",
        price: 400,
        img: img5,
        desc: "It is believed to have originated in the early 1900s, around the time when motion pictures were first becoming popular",
        isstock: false,
      },
      {
        id: 6,
        name: "thangalan",
        price: 200,
        img: img6,
        desc: "It is believed to have originated in the early 1900s, around the time when motion pictures were first becoming popular",
        isstock: true,
      },
    ],
  
    carditem:[],
    total:0,
  });
  
    const handleaddtocart = (item) => {
      dispatch({type:"Addtocart",item});
    };
  
    const handleremovefromcart=(item)=>{
      dispatch({type:"Removefromcart",item})
    };
  
  // const datas = [
  //   {
  //     id: 1,
  //     name: "surai potru",
  //     price: 300,
  //     img: img1,
  //     desc: "It is believed to have originated in the early 1900s, around the time when motion pictures were first becoming popular",
  //     isstock: true,
  //   },
  //   {
  //     id: 2,
  //     name: "veera",
  //     price: 200,
  //     img: img2,
  //     desc: "It is believed to have originated in the early 1900s, around the time when motion pictures were first becoming popular",
  //     isstock: true,
  //   },
  //   {
  //     id: 3,
  //     name: "kadhal",
  //     price: 300,
  //     img: img3,
  //     desc: "It is believed to have originated in the early 1900s, around the time when motion pictures were first becoming popular",
  //     isstock: true,
  //   },
  //   {
  //     id: 4,
  //     name: "vali",
  //     price: 250,
  //     img: img4,
  //     desc: "It is believed to have originated in the early 1900s, around the time when motion pictures were first becoming popular",
  //     isstock: false,
  //   },
  //   {
  //     id: 5,
  //     name: "vazhai",
  //     price: 400,
  //     img: img5,
  //     desc: "It is believed to have originated in the early 1900s, around the time when motion pictures were first becoming popular",
  //     isstock: false,
  //   },
  //   {
  //     id: 6,
  //     name: "thangalan",
  //     price: 200,
  //     img: img6,
  //     desc: "It is believed to have originated in the early 1900s, around the time when motion pictures were first becoming popular",
  //     isstock: true,
  //   },
  // ];

  // const [carditem, setcarditem] = useState([]);
  // const [total,settotal]= useState(0)

  // const handleaddtocart = (item) => {
  //   setcarditem([...carditem, item]);
  //   settotal(total + item.price)
  // };

  // const handleremovefromcart=(item)=>{
  //   let temp=carditem.filter((citem)=> citem.id != item.id)
  //   setcarditem(temp)
  //   settotal(total - item.price)
  // }




  return (
    <div className="container-fluid overalldiv">
      <div className="row">
        <div className="col-10">
          left
          <div className="row d-flex">
            {state.datas.map((item) => {
              return (
                <Productcard item={item} handleaddtocart={handleaddtocart} />
              );
            })}
          </div>
        </div>  
        <div className="col-2">
          <ol class="list-group list-group-numbered">
            <h2>count:{state.carditem.length}</h2>
            {state.carditem.map((item)=>{
              return <Carditem item={item} handleremovefromcart={handleremovefromcart}/>
            })}
            <h2>total:{state.total}</h2>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Shoppingcart;
