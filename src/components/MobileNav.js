import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class MobileNav extends Component {
  state={ 
    sideMenuOpen: false,
    hamburgerAnimate: false
   }

  slideOpenSideMenu = () => {

    this.setState({
      sideMenuOpen: !this.state.sideMenuOpen
    })
  
  }

  animateHamburger = () => {
    this.setState({
      hamburgerAnimate: !this.state.hamburgerAnimate
    })
  }
  
  closeMenu = () => {
    this.setState({
      sideMenuOpen: false
    })
  
  }

  render() {
    return (
<div>
  <div className='menu-icon' onClick={ this.slideOpenSideMenu.bind(this) }>
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div className={ this.state.sideMenuOpen ? 'sidebar-active' : 'sidebar' }>
    <Link to='/' onClick={ this.closeMenu.bind(this) }>
    <a>
      <img src={require( '../images/logo_Asset_White_compressor.png')} alt="logo" className="logo" />
    </a>
    </Link>
    <ul className='menu'>
      <Link to='/blog' onClick={ this.closeMenu.bind(this) }>
      <li>
        <a>Blog</a>
      </li>
      </Link>
      <Link to='/team' onClick={ this.closeMenu.bind(this) }>
      <li>
        <a>Team</a>
      </li>
      </Link>
      <Link to='/News' onClick={ this.closeMenu.bind(this) }>
      <li>
        <a>News</a>
      </li>
      </Link>
      <li>
        <img className='sidebar-image' src={require( '../images/prediction_side_bar_asset_copy_compressor.png')} alt="logo" />
      </li>
    </ul>
    <div className="social-icon">
            <a href="https://github.com/neureal" target="_blank">
            <img 
              className='social-icons-mobile'
              src={require( '../images/icons/social-github.svg')}
              fill="white"
              alt="github"
             />
             </a>
             <a href="https://www.facebook.com/NeurealAI" target="_blank">
              <img 
              className='social-icons-mobile'
              src={require( '../images/icons/social-facebook.svg')}
              fill="white"
              alt="facebook"
             />
              </a>
              <a href="https://www.reddit.com/r/Neureal/" target="_blank">
              <img 
              className='social-icons-mobile'
              src={require( '../images/icons/social-reddit.svg')}
              fill="white"
              alt="reddit"
             />
               </a>
              <a href="https://twitter.com/neurealai" target="_blank">
              <img 
              className='social-icons-mobile'
              src={require( '../images/icons/social-twitter.svg')}
              fill="white"
              alt="twitter"
             />
               </a>
              <a href="https://www.linkedin.com/company/neureal/" target="_blank">
              <img 
              className='social-icons-mobile'
              src={require( '../images/icons/social-linkedin.svg')}
              fill="white"
              alt="linkedin"
             />
               </a>
              <a href="https://www.youtube.com/channel/UCkebLOaWk9vplZ6ZWLcbvtA" target="_blank">
              <img 
              className='social-icons-mobile'
              src={require( '../images/icons/social-youtube.svg')}
              fill="white"
              alt="youtube"
             />
              </a>
             <a href="https://t.me/joinchat/C8JtFkMMkD3nbZY_MMPAaA" target="_blank">
             <img 
             className='telegram-icon-mobile' 
             src={require( '../images/icons8-telegram-app-512.png')}
             alt="telegram" />
             </a>
    </div>
  </div>
  <div className={ this.state.sideMenuOpen ? 'background-mobile' : 'none' } onClick={ this.closeMenu.bind(this) }>
  </div>
</div>
    )
  }
}
