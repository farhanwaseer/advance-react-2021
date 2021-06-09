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
      <h1> {text}</h1>
      <button className="btn" onClick={handler}>
        change Text
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
