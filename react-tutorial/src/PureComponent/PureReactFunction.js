import { useState } from "react";
import PureReactClass from "./PureReactClass";
import UserMemo from "./PureReactFunctionMemo";

const PureReactFunction = () => {
  const [flag, setflag] = useState(true);
    console.log("PureReactFunction called!");
  return (
    <div className="bg-blue-300">
      <span>Hello {flag ? "Good Morning" : "Good Evening"}</span><br/>
      <button onClick={() => setflag(!flag)}>Click Me!</button>
      <UserMemo/>
      <PureReactClass/>
    </div>
  );
};


export default PureReactFunction