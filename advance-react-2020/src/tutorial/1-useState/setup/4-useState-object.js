import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "farhan",
    age: 21,
    message: "random message",
  });
  console.log(person);

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
    </>
  );
};

export default UseStateObject;
