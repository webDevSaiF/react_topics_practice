import React, { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount((c) => c + 1);
  const handleDecrease = () => (count > 0 ? setCount((c) => c - 1) : count);
  const handleReset = () => setCount(0);

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular Counter</h2>
        <h1>{count}</h1>

        <button onClick={handleDecrease} className="btn">
          Decrease
        </button>
        <button onClick={handleReset} className="btn">
          Reset
        </button>
        <button onClick={handleIncrease} className="btn">
          Increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
