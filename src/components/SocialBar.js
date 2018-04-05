import React, { Component } from 'react';

const SocialBar = () => {
    return (
<div>
  <nav>
    <div className="main-nav">
      <div className='social-background-nav'>
        <div className="squeeze">
          <span className='social-icons-container'>
            <a className='email-nav ion-email' href="mailto:info@neureal.net"></a>
            <p>info@neureal.net</p>
            <a className='git-nav ion-social-github' href="https://github.com/neureal" target="_blank"></a>
            <a className='fb-nav ion-social-facebook' href="https://www.facebook.com/NeurealAI" target="_blank"></a>
            <a className='rdt-nav ion-social-reddit' href="https://www.reddit.com/r/Neureal/" target="_blank"></a>
            <a className='twi-nav ion-social-twitter' href="https://twitter.com/neurealai" target="_blank"></a>
            <a className='lnk-nav ion-social-linkedin' href="https://www.linkedin.com/company/neureal/" target="_blank"></a>
            <a className='you-nav ion-social-youtube' href="https://www.youtube.com/channel/UCkebLOaWk9vplZ6ZWLcbvtA" target="_blank"></a>
            <a href="https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A" target="_blank">
            <img className='telegram-logo' src={require( '../images/icons8-telegram-app-512.png')} alt="" />
          </a>
          </span>
        </div>
      </div>
    </div>
  </nav>
</div>
    )
}

export default SocialBar;