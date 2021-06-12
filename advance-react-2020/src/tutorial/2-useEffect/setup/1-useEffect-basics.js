import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
      console.log("call USeEffect");
      if(value >= 1) {
        document.title = `New messages(${value})`;
      }
  }, [value]);
 console.log("render component" )
  return <>
  useEffect Basics
  <h1>{value}</h1>
  <button className="btn" onClick={()=> setValue(value + 1)}>Counter</button>
  </>;
};

export default UseEffectBasics;
