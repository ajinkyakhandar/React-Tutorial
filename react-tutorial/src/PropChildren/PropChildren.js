import React from "react";

const PropChildrenUsed = (props) => {
  return <>{props.children}</>;
};

const PropChildren = () => {
  return (
    <div className="bg-blue-300">
      <PropChildrenUsed>
        <span>This message printed using PropChildrenUsed function...</span>
      </PropChildrenUsed>
    </div>
  );
};

export default PropChildren;
