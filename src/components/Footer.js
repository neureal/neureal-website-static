import React, { Component } from 'react';
import EmailForm from './EmailForm';
import { Link } from "react-router-dom";

export default class Footer extends Component { render() { return (
<div className="main-nav">
  <div className='footer-background'>
    <div className="squeeze">
      <div className='footer-container'>
        <div className='logo-footer-container'>
        {/* <Link to='/'>
        <img src={require( '../images/logoAsset2.png')} alt="logo" className="logo-footer" />
        </Link> */}
        </div>
        <div className='community'>
          <EmailForm />
        </div>
      </div>
    </div>
  </div>
</div>
) } }
