import React, { Component } from 'react'

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

  render() {
    return (
      <div>
          <div className='menu-icon' onClick={ this.slideOpenSideMenu.bind(this) }>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={ this.state.sideMenuOpen ? 'sidebar-active' : 'sidebar' }>
                <a href='./index.html'><img src="https://s18.postimg.org/ui0z7yhqx/logo_Asset2.png" alt="logo" className="logo" /></a>
                <ul className='menu'>
                    <li><a>Blog</a></li>
                    <li><a>Transparency</a></li>
                    <li><a href='./team.html'>Team</a></li>
                    <li><a>Telegram</a></li>
                    <li><a>Whitepaper</a></li>
                    <li><img className='sidebar-image' src='https://s18.postimg.org/5js9ba92h/prediction-side-bar-asset.png' alt="logo" /></li>
                </ul>
                <ul className="social-icon">
                    <li><a><i className="fab fa-facebook-f"></i></a></li>
                    <li><a><i className="fab fa-twitter"></i></a></li>
                    <li><a><i className="fab fa-google-plus-g"></i></a></li>
                    <li><a><i className="fas fa-rss"></i></a></li>
                </ul>
            </div>
      </div>
    )
  }
}
