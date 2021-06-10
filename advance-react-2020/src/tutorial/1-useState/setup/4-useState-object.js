import React, { useState } from 'react';

const UseStateObject = () => {
const [person, setPerson] = useState({name: "farhan", age: 21, message: "random message"});
console.log(person)

  return <h2>useState object example</h2>;
};

export default UseStateObject;
