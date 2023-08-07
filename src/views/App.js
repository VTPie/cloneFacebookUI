import './App.scss';
import Home from './Home/Home';
import Subscriptions from './Subscriptions/Subscriptions';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/subscriptions">
              <Subscriptions />
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
