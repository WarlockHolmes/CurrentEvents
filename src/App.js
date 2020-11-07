import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Template from './template';
import CurrencyConverter from './CurrencyConverter';
import ExchangeRates from './ExchangeRates';
import About from './About';
import Contact from './Contact';

import './App.css';

const NotFound = () => {
  return <h2>404 Not Found</h2>;
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showConverter: false,
      showRates: false,
    }
    this.toggleConverter = this.toggleConverter.bind(this);
    this.toggleRates = this.toggleRates.bind(this);
  }

  toggleConverter() {
    this.setState({ showConverter: !this.state.showConverter });
  }

  toggleRates() {
    this.setState({ showRates: !this.state.showRates });
  }

  render() {
    const { showRates, showConverter } = this.state;
    const Home = () => {
      return (
        <React.Fragment>
          <h2>Home</h2>
          { showRates && <ExchangeRates/> }
          { showConverter && <CurrencyConverter/> }
        </React.Fragment>
      );
    }
    return (
      <Router>
        <Template toggleConverter={this.toggleConverter} toggleRates={this.toggleRates}>
          <Switch>
            <Route path="/" exact render={Home}/>
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
}

export default App;
