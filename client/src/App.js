import React from 'react';
import NavBar from './components/navBar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Parks from './containers/Parks'
import ParkShow from './containers/ParkShow'
import ParkNew from './containers/ParkNew'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/parks" component={Parks} />
          <Route path="/parks/:parkId" component={ParkShow} />
          <Route exact path="/new" component={ParkNew} />
        </Switch>
        </div>
      </Router>
  );
}

export default App;
