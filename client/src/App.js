import React from 'react';
import NavBar from './components/navBar'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Parks from './containers/Parks'
//import ParkNew from './containers/ParkNew'<Route exact path="/new" component={ParkNew} />

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path='/parks' render={routerProps => <Parks {...routerProps} />} />
      
      </div>
    </Router>
  );
}

export default App;
