import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import header from 'Header';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/rockets">
          <Rockets />
        </Route>
        <Route path="/missions">
          <Missions />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App