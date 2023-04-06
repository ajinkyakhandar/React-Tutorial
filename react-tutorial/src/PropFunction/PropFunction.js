import React, { useState } from "react";

const PropFunctionChild = ({ handleClick }) => {
  return <button onClick={handleClick}>PropFunctionChild click</button>;
};

const PropFunction = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <span>Counter {counter}</span><br/>
      <PropFunctionChild handleClick={handleClick} />
    </>
  );
};

export default PropFunction;
