import './App.css';
import Navigation from './Navigation/Navigation'
import Header from './Header/Header';
import Content from './Content/Content';
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
          <Header />
          <Navigation />
          <Content />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
