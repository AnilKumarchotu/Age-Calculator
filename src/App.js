import './App.css';
import Routes from './Routes';
import AgeCalculater from './AgeCalculater'
import LineChartWithReferenceLines from './Graph'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        {/* <Routes /> */}
   <LineChartWithReferenceLines/>
   {/* <AgeCalculater/> */}
      </header>
    </div>
  );
}

export default App;
