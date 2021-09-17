import logo from "./logo.svg";
import "./App.css";
import DynamicChart from "./Components/Chart/Chart";
import Effectp from "./Components/Effectp/Effectp";
function App() {
  return (
    <div className="App">
      {/* <Effectp /> */}
      <div className="chart">
        <DynamicChart />
        <form>
          <input type="text"></input>
        </form>
      </div>
    </div>
  );
}

export default App;
