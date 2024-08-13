import React, { useState } from "react";


function Feedpack() {
    const [like, setlike] = useState(0);
    const [dislike, setdislike] = useState(0);
    const [comment, setcomment] = useState();
    const comments={
        id:1,
        item:[]

    };
    const likebtn = () => {
      console.log(likebtn);
      setlike(like + 1);
    };
    const dislikebtn = () => {
      setdislike(dislike - 1);
    };
    const commentbtn = () => {
        setcomment (comment)

    };

  return (
    <div>
        
      <div><h1>{like}</h1>
      <button onClick={likebtn}>Like👍</button></div>
      <div><h1>{dislike}</h1>
      <button onClick={dislikebtn}>Dislike🤞</button></div>

     <div> <h1></h1>
        <button onClick={commentbtn}>Comments🙌</button></div>
      

     
    </div>
  );
}

export default Feedpack;
