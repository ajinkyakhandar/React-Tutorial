import React from "react";

const PureReactFunctionMemo = () => {
 console.log("PureReactFunctionMemo called!");

  return (
    <div className="p-4">PureReactFunctionMemo</div>
  )
}

const UserMemo = React.memo(PureReactFunctionMemo)
export default UserMemo