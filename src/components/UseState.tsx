import React, { useState } from "react";

const UseState = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    // setCounter(counter + 1);
    setCounter((prevState) => prevState + 1); // Usando prevState para evitar problemas de concorrência em operações assíncronas
  };

  return (
    <div>
      <h1>UseState</h1>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>Incrementar</button>
    </div>
  );
};

export default UseState;
