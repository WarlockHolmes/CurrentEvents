import React from 'react';
import { Link } from "react-router-dom";
import "./template.css"

const SocialMedia = () => {
  return (
    <React.Fragment>
      <a href="facebook.com"><i class="fab fa-facebook-square"></i></a>
      <a href="github.com"><i class="fab fa-github-square"></i></a>
      <a href="linkedin.com"><i class="fab fa-linkedin"></i></a>
    </React.Fragment>
  );
}

const MoreInfo = () => {
  return (
    <React.Fragment>
      <ul className="d-inline-block list-inline">
        <li className="list-inline-item"><Link to="/about">About</Link></li>
        <li className="list-inline-item"><Link to="/contact">Contact</Link></li>
      </ul>
    </React.Fragment>
  );
}

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg border-bottom">
      <div className="d-none d-md-flex w-100" id="desktopNav">
        <h2><Link to="/">CurrentEvents</Link></h2>
        <div className="ml-auto">
          <button className="btn btn-outline-secondary">Exchange Rates</button>
          <button className="btn btn-outline-secondary">Currency Converter</button>
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
      <Navbar />
      <div className="container-fluid px-0 w-100 d-none d-md-block" id="desktop">
        <div className="row h-100 w-100">
          <div className="col-12">
            {props.children}
          </div>
        </div>
        <footer className="row px-2 mx-0 border-top w-100 align-content-center">
          <div>
            <p className="d-inline-block">CurrentEvents © 2020</p>
            <MoreInfo />
          </div>
          <div className="ml-auto d-inline-block"><SocialMedia /></div>
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
