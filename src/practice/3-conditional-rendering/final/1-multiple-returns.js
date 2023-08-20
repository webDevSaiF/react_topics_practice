import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoad, setIsLoad] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isUser, setIsUser] = useState("Default User...");

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const data = await response.json();
      const { login } = data;

      // login && setIsLoad(false) && setIsUser(login);
      if (login) {
        setIsLoad(false);
        setIsUser(login);
      } else if (!login) {
        setIsLoad(false);
        setIsError(true);
        console.log(data.message);
      }
    })();
  }, []);

  if (isLoad) return <h1>Loading...</h1>;
  if (isError) return <h1>Error...</h1>;

  return <h1>{isUser}</h1>;
};

export default MultipleReturns;
