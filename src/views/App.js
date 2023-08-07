import './App.css';
import Navigation from './Navigation/Navigation'
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
