import React, { Component } from 'react';
import EmailForm from './EmailForm';
import { Link } from "react-router-dom";

export default class Footer extends Component { 
  render() { 
    return (
<div className="main-nav">
  <div className='footer-background'>
    <div className="squeeze">
      <div className='footer-container'>

        {/* <Link to='/'>
        <img src={require( '../images/logoAsset2.png')} alt="logo" className="logo-footer" />
        </Link> */}

          <img className='footer-asset'  src={require( '../images/footer_asset.png')}  alt=""/>
        <div className='community'>
          <EmailForm />
        </div>
      </div>
    </div>
    <div className="social-icon-footer">
      <a className='git-footer ion-social-github' href="https://github.com/neureal" target="_blank"></a>
      <a className='fb-footer ion-social-facebook' href="https://www.facebook.com/NeurealAI" target="_blank"></a>
      <a className='rdt-footer ion-social-reddit' href="https://www.reddit.com/r/Neureal/" target="_blank"></a>
      <a className='twi-footer ion-social-twitter' href="https://twitter.com/neurealai" target="_blank"></a>
      <a className='lnk-footer ion-social-linkedin' href="https://www.linkedin.com/company/neureal/" target="_blank"></a>
      <a className='you-footer ion-social-youtube' href="https://www.youtube.com/channel/UCkebLOaWk9vplZ6ZWLcbvtA" target="_blank"></a>
      <a href="https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A"  target="_blank">
            <img className='telegram-logo-footer' src={require( '../images/icons8-telegram-app-512.png')} alt="" />
          </a>
    </div>
  </div>
</div>
) } }
