import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [person, setPerson] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !email) return;
    const id = new Date().getTime().toString();
    const newPeople = { id, firstName, email };
    setPerson((oldPerson) => [...oldPerson, newPeople]);
    setFirstName("");
    setEmail("");
  };
  console.log(person);

  const setFirstNameValue = (e) => setFirstName(e.target.value);
  const setEmailValue = (e) => setEmail(e.target.value);

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName" value=" Name :">
              Name :
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstNameValue(e)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email" value=" Email :">
              Email :
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmailValue(e)}
            />
          </div>
          <button type="submit">Add Person</button>
        </form>
        {person.map((item) => {
          const { id, firstName, email } = item;

          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
