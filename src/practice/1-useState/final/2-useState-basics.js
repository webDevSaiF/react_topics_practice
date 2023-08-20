import React, { useState } from "react";

const ErrorExample = () => {
  let randomTitle = "Random Title";
  const [title, setTitle] = useState(randomTitle);

  const handleChangeTitle = () => {
    const titleValue = title === randomTitle ? "Hello World" : randomTitle;
    setTitle(titleValue);
  };
  return (
    <>
      <h2>{title}</h2>
      <button onClick={handleChangeTitle} className="btn">
        Change Title
      </button>
    </>
  );
};

export default ErrorExample;
