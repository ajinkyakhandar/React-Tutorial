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
    <div className="bg-blue-200">
      <span>Counter {counter}</span><br/>
      <PropFunctionChild handleClick={handleClick} />
    </div>
  );
};

export default PropFunction;
