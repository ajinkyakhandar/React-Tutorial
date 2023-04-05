import React from "react";

class PureReactClass extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    console.log("PureReactClass called!");

    return (
      <>
        <span>This is PureReactClass component {this.state.counter}</span><br/>
        {/* callback function as an argument of setState() */}
        <button onClick={() => this.setState({counter:this.state.counter + 1},()=>console.log("PureReactClass counter updated!")) }>Click Me!</button>
        <br />
        <br />
      </>
    );
  }
}

export default PureReactClass;
