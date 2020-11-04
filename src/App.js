import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Template from './template';
import Home from './Home';
import CurrencyConverter from './CurrencyConverter';
import ExchangeRates from './ExchangeRates';
import About from './About';
import Contact from './Contact';

import './App.css';

const NotFound = () => {
  return <h2>404 Not Found</h2>;
}

const App = () => {
  return (
    <Router>
      <Template>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/converter" component={CurrencyConverter} />
          <Route path="/rates" component={ExchangeRates} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Template>
    </Router>
  );
}

export default App;
