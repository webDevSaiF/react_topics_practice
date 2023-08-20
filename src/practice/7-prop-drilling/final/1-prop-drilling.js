import React, { useState } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [peoples, setPeoples] = useState(data);
  const removePerson = (id) => {
    const newPeoples = peoples.filter((people) => people.id !== id);
    setPeoples(newPeoples);
  };

  return <List peoples={peoples} removePerson={removePerson} />;
};

const List = ({ peoples, removePerson }) => {
  return (
    <>
      {peoples.map((people) => (
        <Person key={people.id} removePerson={removePerson} people={people} />
      ))}
    </>
  );
};

const Person = ({ people, removePerson }) => {
  const { id, name } = people;
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default PropDrilling;
