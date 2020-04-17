import React from 'react';
import NavBar from './components/navBar'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path='/parks' component={Parks} />
      <Route exact path="/new" component={ParksNew} />
      </div>
    </Router>
  );
}

export default App;
