import React, { useState } from 'react';

const UseStateBasics = () => {

   const [text, setText] = useState("Random text");
   const handler = () => {
     setText("Hello world")
   }
  return (
<div>
<h2> {text}</h2>
 <button className="btn" onClick={handler}>change Text</button>
 
  </div>
  )
};

export default UseStateBasics;
