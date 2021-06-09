import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Random text");
  const handler = () => {
    if(text === "Random text"){
      setText("Hello world");
    }else{
      setText("Random text")
    }
   
  };
  return (
    <React.Fragment>
      <h2> {text}</h2>
      <button className="btn" onClick={handler}>
        change Text
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
