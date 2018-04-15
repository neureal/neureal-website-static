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
          <img className='footer-asset'  src={require( '../images/footer_asset.png')}  alt=""/>
        <div className='community'>
          <EmailForm />
        </div>
      </div>
    </div>
    <div className="social-icon-footer">
    <a href="https://github.com/neureal" target="_blank">
            <img 
              className='social-icons-footer'
              src={require( '../images/icons/social-github.svg')}
              fill="white"
              alt="github"
             />
             </a>
             <a href="https://www.facebook.com/NeurealAI" target="_blank">
              <img 
              className='social-icons-footer'
              src={require( '../images/icons/social-facebook.svg')}
              fill="white"
              alt="facebook"
             />
              </a>
              <a href="https://www.reddit.com/r/Neureal/" target="_blank">
              <img 
              className='social-icons-footer'
              src={require( '../images/icons/social-reddit.svg')}
              fill="white"
              alt="reddit"
             />
               </a>
              <a href="https://twitter.com/neurealai" target="_blank">
              <img 
              className='social-icons-footer'
              src={require( '../images/icons/social-twitter.svg')}
              fill="white"
              alt="twitter"
             />
               </a>
              <a href="https://www.linkedin.com/company/neureal/" target="_blank">
              <img 
              className='social-icons-footer'
              src={require( '../images/icons/social-linkedin.svg')}
              fill="white"
              alt="linkedin"
             />
               </a>
              <a href="https://www.youtube.com/channel/UCkebLOaWk9vplZ6ZWLcbvtA" target="_blank">
              <img 
              className='social-icons-footer'
              src={require( '../images/icons/social-youtube.svg')}
              fill="white"
              alt="youtube"
             />
              </a>
             <a href="https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A" target="_blank">
             <img 
             className='telegram-logo-footer' 
             src={require( '../images/icons8-telegram-app-512.png')}
             alt="telegram" />
             </a>
    </div>
  </div>
</div>
) } }
