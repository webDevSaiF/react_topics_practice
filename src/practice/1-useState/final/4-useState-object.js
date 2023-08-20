import React, { useState } from "react";

const data = {
  name: "John Doe",
  age: "30",
  message: "Are You Learning React?"
};

const UseStateObject = () => {
  const [person, setPerson] = useState(data);
  const messageHandler = (item) => {
    const message =
      person.message === "Are You Learning React?"
        ? "Yes I am!"
        : "Are You Learning React?";
    const newPerson = { ...item, message };
    setPerson(newPerson);
  };
  return (
    <div className="container">
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button onClick={() => messageHandler(person)} className="btn">
        Change Message
      </button>
    </div>
  );
};

export default UseStateObject;
