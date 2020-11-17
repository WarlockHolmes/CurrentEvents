import React from 'react';
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
      revisit: false,
    }
    this.toggleConverter = this.toggleConverter.bind(this);
    this.toggleRates = this.toggleRates.bind(this);
    this.notHome = this.notHome.bind(this);
    this.comeHome = this.comeHome.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.changeDefaultText = this.changeDefaultText.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);

  }

  changeDefaultText() {
    this.setState({ revisit: true });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  notHome() {
    this.setState({ home: false });
  }

  comeHome() {
    this.setState({ home: true });
    this.changeDefaultText();
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu })
  }

  toggleConverter() {
    this.setState({ showConverter: !this.state.showConverter });
    this.changeDefaultText();
  }

  toggleRates() {
    this.setState({ showRates: !this.state.showRates });
    this.changeDefaultText();
  }

  handleResize() {
    let history = createBrowserHistory();
    let path = window.location.pathname;
    let size = window.innerWidth;

    this.setState({width: size});

    if (this.state.showRates) {this.toggleRates()};
    if (this.state.showConverter) {this.toggleConverter()};
    if (this.state.menu) {this.toggleMenu()};

    if ((path === '/converter' || path === '/rates') && (size >= 768)) {
      history.push('/');
      window.location.reload(false);
    }
  }


  render() {
    const { showRates, showConverter, home, menu, width, revisit } = this.state;

    const random = (max) => {
      return Math.floor(Math.random() * Math.floor(max));
    };

    const randomText = (props) => {
      const num = random(3);
      if (!props.revisit) {
      switch (num) {
        case 1: return 'Hello! What can I help you with?';
        case 2: return 'Hi, what can I do for you?';
        case 3: return 'Hey, what brings you by?';
        default: return 'What\'s on your mind?';
      }
      } else {
        return 'Anything else?';
      };
    }

    const DefaultText = (props) => {
      return <p id="defaultText">{randomText(props)}</p>;
    }


    const Home = () => {
      return (
        <div className="h-100 w-100 mx-auto row justify-content-center align-content-center">
          { !showRates && !showConverter && <DefaultText revisit={revisit} /> }
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
