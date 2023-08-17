import './App.scss';
import Home from './Home/Home';
import Subscriptions from './Subscriptions/Subscriptions';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Detail from './Detail/Detail';

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
            <Route path='/play/video1'>
              <Detail />
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
