import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const formElement = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };
  useEffect(() => {
    console.log(formElement.current);
    refContainer.current.focus();
  });
  return (
    <>
      <form ref={formElement} className="form" onSubmit={handleSubmit}>
        <div>
          <input ref={refContainer} type="text" />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default UseRefBasics;
