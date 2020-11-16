import React from 'react';
import { Link } from "react-router-dom";
import './template.css'


const SocialMedia = () => {
  return (
    <React.Fragment>
      <a href="https://www.facebook.com" className="mx-1"><i className="fab fa-facebook-square fa-lg"></i></a>
      <a href="https://www.github.com" className="mx-1"><i className="fab fa-github-square fa-lg"></i></a>
      <a href="https://www.linkedin.com" className="mx-1"><i className="fab fa-linkedin fa-lg"></i></a>
    </React.Fragment>
  );
}

const MoreInfo = (props) => {
  if (!props.menu) {
    return (
      <React.Fragment>
        <ul className='d-inline-block list-inline mx-auto my-2'>
          <li className="list-inline-item"><Link to="/about" onClick={props.notHome}>About</Link></li>
          <li className="list-inline-item ml-5"><Link to="/contact" onClick={props.notHome}>Contact</Link></li>
        </ul>
      </React.Fragment>
    );} else {
    return(
      <React.Fragment>
        <li className="nav-item mx-auto my-2"><Link to="/about" onClick={props.notHome}>About</Link></li>
        <li className="nav-item mx-auto my-2"><Link to="/contact" onClick={props.notHome}>Contact</Link></li>
      </React.Fragment>
  );}
}

const Navbar = (props) => {
  function navStyle() {
    return (props.menu && props.width < 768) ? 'menuOpen' : 'menuClosed';
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${navStyle()}`}>

      <div className="d-none d-md-flex w-100" id="desktopNav">
        <h2><Link to="/" onClick={props.comeHome}>CurrentEvents</Link></h2>
        {props.home && <div className="ml-auto">
          <button className="btn btn-outline-secondary mr-3" onClick={props.toggleRates}>Exchange Rates</button>
          <button className="btn btn-outline-secondary" onClick={props.toggleConverter}>Currency Converter</button>
        </div>}
      </div>

      <div className="d-flex d-md-none w-100" id="mobileNav">
        <h2><Link to="/">CurrentEvents</Link></h2>
        <div className="ml-auto">
          <button className="navbar-toggler" onClick={props.toggleMenu}><span className="navbar-toggler-icon"></span></button>
        </div>
      </div>

      { props.menu &&
      <ul className="d-md-none navbar-nav mx-auto my-2">
        <li className="nav-item mx-auto my-2">
          <Link to="/converter" onClick={props.notHome}>Currency Converter</Link>
        </li>
        <li className="nav-item mx-auto my-2">
          <Link to="/rates" onClick={props.notHome}>Exchange Rates</Link>
        </li>
        <MoreInfo menu={props.menu} notHome={props.notHome}/>
        <li className="nav-item mx-auto my-2" onClick={props.notHome}>
          <SocialMedia/>
        </li>
      </ul>}
    </nav>
  );
}

const Template = (props) => {

  return (
    <React.Fragment>
      <Navbar home={props.home} menu={props.menu} comeHome={props.comeHome} toggleConverter={props.toggleConverter} toggleRates={props.toggleRates} toggleMenu={props.toggleMenu} width={props.width}/>
      {/*Desktop Content*/}
      <div className="container-fluid px-0 w-100 d-none d-md-block" id="desktop">
        <div className="row h-100 w-100" id="content">
          {props.children}
        </div>
        <footer className="row px-2 mx-0 border-top w-100 align-content-center">
          <p className="d-inline-block my-auto ml-1 text-white font-weight-light">CurrentEvents © 2020</p>
          <MoreInfo menu={props.menu} notHome={props.notHome} comeHome={props.comeHome}/>
          <div className="ml-5 mr-2 my-auto d-inline-block"><SocialMedia /></div>
        </footer>
      {/*Mobile Content*/}
      </div>
      <div className="container py-4 d-flex d-md-none" id="mobile">
        <div className="row">
          <div className="col-12" id="content">
            {props.children}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Template;
