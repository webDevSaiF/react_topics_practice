import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [peoples, setPeople] = useState(data);
  const handleDelete = () => setPeople([]);
  const handleRemoveItem = (id) => {
    const newPeoples = peoples.filter((people) => people.id !== id);
    setPeople(newPeoples);
  };

  return (
    <div className="container">
      {peoples.map((people) => {
        const { id, name } = people;

        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => handleRemoveItem(id)}>Remove Item</button>
          </div>
        );
      })}
      <button onClick={handleDelete} className="btn">
        Clear List
      </button>
    </div>
  );
};

export default UseStateArray;
