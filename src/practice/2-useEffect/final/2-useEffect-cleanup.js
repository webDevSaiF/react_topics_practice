import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowSize = () => setSize(window.innerWidth);
    window.addEventListener("resize", handleWindowSize);
    return () => window.removeEventListener("resize", handleWindowSize);
  }, [size]);
  return (
    <>
      <h2>Window</h2>
      <h1>{size}</h1>
    </>
  );
};
export default UseEffectCleanup;
