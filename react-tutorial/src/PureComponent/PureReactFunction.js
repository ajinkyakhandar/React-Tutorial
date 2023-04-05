import { useState } from "react";
import PureReactClass from "./PureReactClass";
import UserMemo from "./PureReactFunctionMemo";

const PureReactFunction = () => {
  const [flag, setflag] = useState(true);
    console.log("PureReactFunction called!");
  return (
    <>
      <span>Hello {flag ? "Good Morning" : "Good Evening"}</span><br/>
      <button onClick={() => setflag(!flag)}>Click Me!</button>
      <UserMemo/>
      <PureReactClass/>
    </>
  );
};


export default PureReactFunction