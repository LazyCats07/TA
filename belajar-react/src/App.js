import logo from './logo.svg';
import './App.css';
import Halo from './components/Halo';
import DataComponent from "./components/DataComponent";
import LinkComponent from './components/LinkComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LinkComponent/>
        <Halo />
        <DataComponent />
      </header>
    </div>
  );
}

export default App;
