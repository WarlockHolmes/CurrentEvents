import React from 'react';
import { Link } from "react-router-dom";

import './template.css'

const Template = (props) => {

  const SocialMedia = (props) => {
    const icon = (brand) => `fab fa-${brand} fa-${props.size}`;
    const email = `fas fa-at fa-${props.size}`;
    const github = icon('github-square');
    const linkedin = icon('linkedin');
    const iconSpacing = () => {
      switch(props.size) {
        case '2x': return 'mx-3';
        case 'lg': return 'mx-2';
        default: return 'mx-2';
      }
    }
    return (
      <React.Fragment>
        <a href="https://www.github.com/WarlockHolmes" rel="noopener noreferrer" target="_blank" className={iconSpacing()}><i className={github}></i></a>
        <a href="mailto:grau.morgan@gmail.com" rel="noopener noreferrer" target="_blank" className={iconSpacing()}><i className={email}></i></a>
        <a href="https://www.linkedin.com/in/morgan-grau-15069955" rel="noopener noreferrer" target="_blank" className={iconSpacing()}><i className={linkedin}></i></a>
      </React.Fragment>
    );
  }

  const MoreInfo = () => {
    if (!props.menu) {
      return (
        <React.Fragment>
          <ul className='d-inline-block list-inline mx-auto my-2'>
            <li className="list-inline-item"><Link to="/about" onClick={props.notHome}>About</Link></li>
            <li className="list-inline-item ml-5"><Link to="/contact" onClick={props.visitContact}>Contact</Link></li>
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

  const Navbar = () => {
    function navStyle() {
      return (props.menu && props.width < 768) ? 'menuOpen' : 'menuClosed';
    }

    return (
      <nav className={`navbar navbar-expand-lg navbar-light ${navStyle()}`}>

        <div className="d-none d-md-flex w-100" id="desktopNav">
          <h2 className="font-weight-bold"><Link to="/" onClick={props.comeHome}>CurrentEvents</Link></h2>
          {props.home && <div className="ml-auto">
            <button className="btn btn-outline-secondary mr-3" onClick={props.toggleRates}>Exchange Rates</button>
            <button className="btn btn-outline-secondary" onClick={props.toggleConverter}>Currency Converter</button>
          </div>}
        </div>

        <div className="d-flex d-md-none w-100" id="mobileNav">
          <h2 className="font-weight-bold">CurrentEvents</h2>
          <div className="ml-auto">
            <button className="navbar-toggler" onClick={props.toggleMenu}><span className="navbar-toggler-icon"></span></button>
          </div>
        </div>

        { props.menu &&
        <ul className="d-md-none navbar-nav mx-auto my-2">
          <li className="nav-item mx-auto my-2">
            <Link to="/converter" onClick={props.menuClick}>Currency Converter</Link>
          </li>
          <li className="nav-item mx-auto my-2">
            <Link to="/rates" onClick={props.menuClick}>Exchange Rates</Link>
          </li>
          <MoreInfo/>
          <li className="nav-item mx-auto my-2" onClick={props.menuClick}>
            <SocialMedia size="2x"/>
          </li>
        </ul>}
      </nav>
    );
  }

  return (
    <React.Fragment>
      <Navbar />
      {/*Desktop Content*/}
      <div className="container-fluid px-0 w-100 d-none d-md-block" id="desktop">
        <div className="row mx-0 h-100 w-100" id="content">
          {props.children}
        </div>
        <footer className="row px-2 mx-0 border-top w-100 align-content-center">
          <p className="d-inline-block my-auto ml-1 text-white font-weight-light">CurrentEvents © 2020</p>
          <MoreInfo menu={props.menu} notHome={props.notHome} comeHome={props.comeHome}/>
          <div className="ml-5 mr-2 my-auto d-inline-block"><SocialMedia size="lg"/></div>
        </footer>
      </div>
      {/*Mobile Content*/}
      <div className='container-fluid d-block d-md-none' id="mobile">
        <div className="row mx-auto w-100" id="content">
          {!props.menu && props.children}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Template;
