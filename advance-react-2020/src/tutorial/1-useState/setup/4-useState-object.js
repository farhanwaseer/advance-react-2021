import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "farhan",
    age: 21,
    message: "random message",
  });
  console.log(person);
  const changeMessage = () => {
    setPerson({ ...person, message: "Helloworld"});
  }

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>change message</button>
    </>
  );
};

export default UseStateObject;
