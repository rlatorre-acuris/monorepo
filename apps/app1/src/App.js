import logo from "./logo.svg";
import "./App.css";
import UIExample from "@rlatorre/ui";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Monorepo Demo App</p>
        <div>
          <UIExample text="from app1" />
        </div>
      </header>
    </div>
  );
}

export default App;
