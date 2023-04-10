import "./App.css";
import ReactDom from "./ReactDom/ReactDom";
import ReactComponent from "./ReactComponent/ReactComponent";
import PureReactFunction from "./PureComponent/PureReactFunction";
import PropFunction from "./PropFunction/PropFunction";
import PropChildren from "./PropChildren/PropChildren";
import UncontrolledComponent from "./ControlUncontrolComponent/UncontrolledComponent";
import ControlledComponent from "./ControlUncontrolComponent/ControlledComponent";
import ParentLSU from "./LiftingStateUp/ParentLSU";

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <td className="heading bg-blue-50">React Without JSX</td>
          <td>
            <ReactDom />
          </td>
        </tr>
        <tr>
          <td className="heading bg-blue-50">React Components Type: Functional | Class</td>
          <td>
            <ReactComponent />
          </td>
        </tr>
        <tr>
          <td className="heading bg-blue-50">React Pure Component</td>
          <td>
            <PureReactFunction />
          </td>
        </tr>
        <tr>
          <td className="heading bg-blue-50">pass a Function as a Prop in React</td>
          <td>
            <PropFunction />
          </td>
        </tr>
        <tr>
          <td className="heading bg-blue-50">props children</td>
          <td>
            <PropChildren />
          </td>
        </tr>
        <tr>
          <td className="heading bg-blue-50">Controlled - Uncontrolled Component</td>
          <td className="bg-blue-200">
            <UncontrolledComponent />
            <ControlledComponent />
          </td>
        </tr>
        <tr>
          <td className="heading bg-blue-50">Lifting state up </td>
          <td className="bg-blue-300">
            <ParentLSU />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
