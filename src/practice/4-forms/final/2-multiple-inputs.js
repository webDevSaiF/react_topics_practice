import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const personInputType = {
    firstName: "",
    email: "",
    phone: "",
    age: ""
  };
  const [person, setPerson] = useState(personInputType);
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.phone && person.age) {
      const id = new Date().getTime().toString();
      const newPerson = { ...person, id };
      setPeople((oldPeople) => [...oldPeople, newPerson]);
      setPerson(personInputType);
    }
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name :</label>
            <input
              onChange={handleInputChange}
              id="firstName"
              type="text"
              name="firstName"
              value={person.firstName}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email :</label>

            <input
              id="email"
              type="email"
              name="email"
              onChange={handleInputChange}
              value={person.email}
            />
          </div>
          <div className="form-control">
            <label htmlFor="phoneNumber">Phone :</label>

            <input
              id="phoneNumber"
              type="tel"
              name="phone"
              onChange={handleInputChange}
              value={person.phone}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age :</label>

            <input
              id="age"
              type="text"
              name="age"
              onChange={handleInputChange}
              value={person.age}
            />
          </div>
          <button type="submit">Add Person</button>
        </form>
        {people.map((item) => {
          const { id, firstName, email, phone, age } = item;

          return (
            <div className="item" key={id}>
              <div>
                <h4>{firstName}</h4>
                <p>Age: {age}</p>
              </div>
              <div>
                <p>{email}</p>
                <p>{phone}</p>
              </div>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
