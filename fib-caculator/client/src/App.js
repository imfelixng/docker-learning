import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import OtherPage from './OtherPage.js';
import Fib from './Fib.js';


const App = () => {
  return (
    <Router>
      <div className = "App">
        <header>
          <Link to = "/" >Home</Link>
          <Link to = "/other-page" >Other page</Link>        
        </header>
        <div>
          <Route exact path = '/' component = { Fib } />
          <Route path = '/other-page' component = { OtherPage } />
        </div>
      </div>
    </Router>
  );
}

export default App;
