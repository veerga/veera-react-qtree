import { useState } from "react";
import "./App.css";
import Feedpack from "./Feedpack/Feedpack";
import Samplebutton from "./Samplebutton/Samplebutton";
import Routers from "./Routers/Routers";
import Shoppingcart from "./Pages/Shoppingcart";
import Userapp from "./Pages/Userapp";

function App() {
 
  return (
    <div className="App">
      
      

{/*       
       <Samplebutton username={"dog"} color={"red"} />
      <Samplebutton username={"cat"} color={"brown"}/>
      <Samplebutton username={"rabit"} color={"blue"}/>
      <Samplebutton username={"duck"} color={"green"}/>
      <Samplebutton username={"pigen"} color={"yellow"}/>
      <Samplebutton username={"fish"} color={"purple"}/>
      <Samplebutton username={"birds"} color={"pista"}/>
      <Feedpack />
      <Routers/> */}
      {/* <Shoppingcart/> */}

      
      <Userapp/>

    </div>
  );
}

export default App;
