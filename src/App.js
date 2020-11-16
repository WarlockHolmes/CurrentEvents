import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Template from './template';
import CurrencyConverter from './CurrencyConverter';
import ExchangeRates from './ExchangeRates';
import About from './About';
import Contact from './Contact';

import './App.css';

import { createBrowserHistory } from 'history';


const NotFound = () => {
  return <h2>404 Not Found</h2>;
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showConverter: false,
      showRates: false,
      home: true,
      menu: false,
      width: window.innerWidth,
    }
    this.toggleConverter = this.toggleConverter.bind(this);
    this.toggleRates = this.toggleRates.bind(this);
    this.notHome = this.notHome.bind(this);
    this.comeHome = this.comeHome.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  notHome() {
    this.setState({ home: false });
  }

  comeHome() {
    this.setState({ home: true });
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu })
  }

  toggleConverter() {
    if(window.location.pathname === '/') {
      this.setState({ showConverter: !this.state.showConverter });
    }
  }

  toggleRates() {
    if(window.location.pathname === '/') {
      this.setState({ showRates: !this.state.showRates });
    }
  }

  handleResize() {
    let history = createBrowserHistory();
    let path = window.location.pathname;
    let size = window.innerWidth;
    this.setState({width: size});
    if (this.state.menu) {this.toggleMenu()};
    if ((path === '/converter' || path === '/rates') && (size >= 768)) {
      history.push('/');
      window.location.reload(false);
    }
  }


  render() {
    const { showRates, showConverter, home, menu, width } = this.state;

    const Home = () => {
      return (
        <div className="mx-auto row my-3 justify-content-center align-content-center">
          {  showRates && <ExchangeRates/> }
          { showConverter && <CurrencyConverter/> }
        </div>
      );
    }
    return (
      <Router>
        <Template home={home} menu={menu} notHome={this.notHome} comeHome={this.comeHome} toggleConverter={this.toggleConverter} toggleRates={this.toggleRates} toggleMenu={this.toggleMenu} width={width}>
          <Switch>
            <Route path="/" exact render={Home}/>
            <Route path="/converter" component={CurrencyConverter}/>
            <Route path="/rates" component={ExchangeRates}/>
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
