import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function
import { reducer } from "./reducer";
const Index = () => {
  const [name, setName] = useState("");

  const defaultState = {
    people: data,
    modalOpen: false,
    modalContent: ""
  };
  const handleUpdateName = (e) => setName(e.target.value);
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const id = new Date().getTime().toString();
      const newPeople = { id, name };
      dispatch({ type: "ADD_ITEM", payload: newPeople });
      setName("");
    } else {
      dispatch({ type: "NO_ITEM" });
    }
  };
  const removeModal = () => dispatch({ type: "REMOVE_MODAL" });
  const handleRemoveItem = (id) =>
    dispatch({ type: "REMOVE_ITEM", payload: id });
  return (
    <>
      {state.modalOpen && (
        <Modal removeModal={removeModal} modalContent={state.modalContent} />
      )}
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName" value=" Name :">
            Name :
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={name}
            onChange={handleUpdateName}
          />
        </div>
        <button className="btn" type="submit">
          Add
        </button>
      </form>
      {state.people.map((item) => {
        const { id, name } = item;

        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <button onClick={() => handleRemoveItem(id)}>remove</button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
