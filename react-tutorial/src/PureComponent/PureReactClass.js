import React from "react";

class PureReactClass extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  calledMe() {
    console.log("called me!");
  }

  render() {
    console.log("PureReactClass called!");

    return (
      <>
        <span>This is PureReactClass component {this.state.counter}</span>
        <br />
        {/* callback function as an argument of setState() */}
        <div className="border-blue-200 border-2 mx-56">
          <button
            onClick={() =>
              this.setState({ counter: this.state.counter + 1 }, () =>
                console.log("PureReactClass counter updated!")
              )
            }
          >
            Click Me!
          </button>
          <br />
          <button onClick={this.calledMe}>Call me direct !</button>
          <br />
          <button onClick={() => this.calledMe()}>
            Call me with arrow function!
          </button>
        </div>

        <br />
        <br />
      </>
    );
  }
}

export default PureReactClass;
