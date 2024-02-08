import logo from "./logo.svg";
import "./App.css";

function App() {
  const title = "Welcome";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{title}</p>
      </header>
    </div>
  );
}

export default App;
