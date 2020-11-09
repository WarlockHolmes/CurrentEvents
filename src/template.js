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

const MoreInfo = () => {
  return (
    <React.Fragment>
      <ul className="d-inline-block list-inline mx-auto my-2 font-weight-bold">
        <li className="list-inline-item"><Link to="/about">About</Link></li>
        <li className="list-inline-item ml-2"><Link to="/contact">Contact</Link></li>
      </ul>
    </React.Fragment>
  );
}

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg border-bottom">

      <div className="d-none d-md-flex w-100" id="desktopNav">
        <h2><Link to="/">CurrentEvents</Link></h2>
        <div className="ml-auto">
          <button className="btn btn-outline-secondary mr-3" onClick={props.toggleRates}>Exchange Rates</button>
          <button className="btn btn-outline-secondary" onClick={props.toggleConverter}>Currency Converter</button>
        </div>
      </div>

      <div className="d-flex d-md-none" id="mobileNav">
        <h1>Mobile Nav</h1>
      </div>

    </nav>
  );
}

const Template = (props) => {

  return (
    <React.Fragment>
      <Navbar toggleConverter={props.toggleConverter} toggleRates={props.toggleRates}/>
      <div className="container-fluid px-0 w-100 d-none d-md-block" id="desktop">
        <div className="row h-100 w-100">
          {props.children}
        </div>
        <footer className="row px-2 mx-0 border-top w-100 align-content-center">
            <p className="d-inline-block my-auto ml-1 text-white font-weight-light">CurrentEvents © 2020</p>
            <MoreInfo />
          <div className="ml-5 mr-2 my-auto d-inline-block"><SocialMedia /></div>
        </footer>
      </div>
      <div className="container py-4 d-flex d-md-none" id="mobile">
        <div className="row">
          <div className="col-12">
            {props.children}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Template;
