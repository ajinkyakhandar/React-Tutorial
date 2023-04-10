import React, { useState } from "react";

const ChildLSU = ({getChildData}) => {
  return (
    <div>
        <button onClick={getChildData}>Lifting state up to parent...</button>
    </div>
  )
}

const SubChild = ({counter}) => {
    return <div>this is counter {counter}</div>
}

const ParentLSU = () => {
  const [counter, setCounter] = useState(0);
  const getChildData = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <ChildLSU getChildData={getChildData} />
      <SubChild counter={counter}/>
    </div>
  );
};

export default ParentLSU;
