import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class NavigationBar extends Component {
  render() {
    return (
<div>
  <div className="navigation">
    <Link to='/'>
    <img src={require( '../images/logo_Asset_Blue_compressor.png')} alt="Neureal" className="logo" />
    </Link>
    <nav className="nav-menu">
      <Link to='/blog'>
      <span className="nav-menu__item">Blog</span>
      </Link>
      {/*
      <span className="nav-menu__item">Transparency</span> */}
      <Link to='/team'>
      <span className="nav-menu__item">Team</span>
      </Link>

      <Link to='/news'>
      <span className="nav-menu__item">News</span>
      </Link>
      {/*
      <span className="nav-menu__button">
        <span className="nav-menu__item-white">
          <div>Telegram</div>
        </span>
      </span> */}
    </nav>
  </div>
  <Link to='/'>
  <div className="mobile-logo-container">
    <img src={require( '../images/logo_Asset_Blue_compressor.png')} alt="logo" className="mobile-logo" />
  </div>
  </Link>
</div>
    )
  }
}
