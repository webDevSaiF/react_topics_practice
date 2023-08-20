import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [counter, setCounter] = useState(0);
  const handleIncreaseCounter = () => setCounter((prevValue) => prevValue + 1);

  useEffect(() => {
    if (counter < 4) return;
    document.title = "New Messages: " + counter;
    console.log("hello");
  }, [counter]);
  console.log("World");

  useEffect(() => {
    console.log("2nd Use Effect");
  }, [counter]);

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleIncreaseCounter} className="btn">
        Click Me
      </button>
    </>
  );
};

export default UseEffectBasics;
