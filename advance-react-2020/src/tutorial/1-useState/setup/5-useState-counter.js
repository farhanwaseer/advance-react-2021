import React, { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  const reset = () => {
    setCount(0);
  };

const complexIncrease = () => {
  setTimeout(()=> {
    // setCount(count +1);
  setCount((prevState)=> {
     return prevState + 1;
  })
  
  },2000)
}
   
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>useState counter example</h2>
        <h1>{count}</h1>
        <button className="btn" onClick={() => setCount(count + 1)}>
          Increase
        </button>
        <button className="btn" onClick={reset}>
          reset
        </button>
        <button className="btn" onClick={() => setCount(count - 1)}>
          Decrease
        </button>
      </section>

     
     
     
      <section style={{ margin: "4rem 0" }}>
        <h2>complex counter example</h2>
        <h1>{count}</h1>
        <button className="btn" onClick={complexIncrease}>
          Increase later
        </button>
        
      </section>
    </>
  );
};

export default UseStateCounter;
