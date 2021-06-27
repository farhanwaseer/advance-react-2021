import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const Index = () => {
  const [name, setName] = useState('');
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);

const handleSubmit = (e) => {
e.preventDefault();
}

  return <>
  <h2>useReducer</h2>
  {showModal && <Modal />}
  <form onSubmit={handleSubmit}>
    <div>
      <input type="text"  value={name} onChange={()=> setName(e.target.value)}/>
    </div>
  </form>
  </>;
};

export default Index;
