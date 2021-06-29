import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const reducer = (state, action) => {};

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContant: "hello world",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
    } else {
    }
  };

  return (
    <>
      <h2>useReducer</h2>
      {state.isModalOpen && <Modal modalContant={state.modalContant} />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>
              {person.name} <p>{person.id}</p>
            </h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
