import "./App.css";
import ReactDom from "./ReactDom/ReactDom";
import ReactComponent from "./ReactComponent/ReactComponent";
import PureReactFunction from "./PureComponent/PureReactFunction";
import PropFunction from "./PropFunction/PropFunction";

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <td className="heading">React Without JSX</td>
          <td>
            <ReactDom />
          </td>
        </tr>
        <tr>
          <td className="heading">React Components Type: Functional | Class</td>
          <td>
            <ReactComponent />
          </td>
        </tr>
        <tr>
          <td className="heading">React Pure Component</td>
          <td>
            <PureReactFunction />
          </td>
        </tr>
        <tr>
          <td className="heading">Company</td>
          <td>
            <PropFunction />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
