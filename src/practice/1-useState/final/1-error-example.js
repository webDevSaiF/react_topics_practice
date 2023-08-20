import React from "react";

const ErrorExample = () => {
  let randomTitle = "Random Title";

  const handleChangeTitle = () => {
    randomTitle = "Hello World";
    console.log(randomTitle);
  };
  return (
    <>
      <h2>{randomTitle}</h2>
      <button onClick={handleChangeTitle} className="btn">
        Change Title
      </button>
    </>
  );
};

export default ErrorExample;
