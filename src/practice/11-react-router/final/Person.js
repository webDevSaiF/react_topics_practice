import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  const [name, setName] = useState("Default Name");
  const { id } = useParams();
  useEffect(() => {
    const newName = data.find((name) => name.id === parseInt(id));
    setName(newName.name);
  }, [name]);
  return (
    <div>
      <h2>{name}</h2>
      <Link className="btn" to="/people">
        Go Back to People
      </Link>
    </div>
  );
};

export default Person;
