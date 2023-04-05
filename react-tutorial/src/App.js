import './App.css';
import ReactDom from './ReactDom/ReactDom';
import ReactComponent from './ReactComponent/ReactComponent';
import PureReactFunction from './PureComponent/PureReactFunction';

function App() {
  return (
    <div className="App">
     <ReactDom/>
     <ReactComponent/>
     <PureReactFunction />
    </div>
  );
}

export default App;
