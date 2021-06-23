import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <>
      <h1>{text || "Farhan"}</h1>
      <button className="btn">toggle error</button>
      {isError && <h1>Error....</h1>}
    </>
  );
};

export default ShortCircuit;
