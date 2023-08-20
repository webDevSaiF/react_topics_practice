import React, { useContext, useState } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)
const PersonContext = React.createContext();

const ContextAPI = () => {
  const [peoples, setPeoples] = useState(data);
  const removePerson = (id) => {
    const newPeoples = peoples.filter((people) => people.id !== id);
    setPeoples(newPeoples);
  };

  return (
    <>
      <PersonContext.Provider value={{ peoples, removePerson }}>
        <List />
      </PersonContext.Provider>
    </>
  );
};

const List = () => {
  const data = useContext(PersonContext);

  return (
    <>
      {data.peoples.map((people) => (
        <Person
          key={people.id}
          removePerson={data.removePerson}
          people={people}
        />
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

export default ContextAPI;
