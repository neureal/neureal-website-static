import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './app.css';
import { Router, Route, Switch, Link } from 'react-static';
import SocialBar from './components/SocialBar';
import NavigationBar from './components/NavigationBar';
import MobileNav from './components/MobileNav';
import HomePage from './components/HomePage.js';
import Footer from './components/Footer.js';
import RoadMap from './components/RoadMap.js';
import Team from './components/Team.js';
import Blog from './components/Blog.js';
import BlogPosts from './components/posts/BlogPosts';
import News from './components/News';
import BlogPost1 from './components/posts/BlogPost1';
import BlogPost2 from './components/posts/BlogPost2';
import BlogPost3 from './components/posts/BlogPost3';
import BlogPost4 from './components/posts/BlogPost4';
import BlogPost5 from './components/posts/BlogPost5';
import BlogPost6 from './components/posts/BlogPost6';
import BlogPost7 from './components/posts/BlogPost7';
import BlogPost8 from './components/posts/BlogPost8';
import BlogPost9 from './components/posts/BlogPost9';
import BlogPost10 from './components/posts/BlogPost10';
class App extends Component {
  render () {
    return (
<Router>
  <div className='overlay-body'>
    <SocialBar />
    <div className="main">
      <div className="squeeze">
        <NavigationBar />
        <MobileNav />
        <Switch>
          {/* <link rel="shortcut icon" href="https://image.ibb.co/huAEdS/favicon.png" /> */}
          <Route component={ HomePage } exact path="/" />
          <Route component={ RoadMap } path="/roadmap" />
          <Route component={ Blog } path="/blog" />
          <Route component={ Team } path="/team" />
          <Route component={ News } path="/news" />
          <Route component={ BlogPosts } path="/what-is-neureal" />
          <Route component={ BlogPost1 } path="/blockchain-vs-bitcoin" />
          <Route component={ BlogPost2 } path="/crypto-wallet" />
          <Route component={ BlogPost3 } path="/crypto-community-moves-forward" />
          <Route component={ BlogPost4 } path="/when-does-decentralization-make-sense" />
          <Route component={ BlogPost5 } path="/how-to-choose-a-crypto-wallet" />
          <Route component={ BlogPost6 } path="/how-to-tell" />
          <Route component={ BlogPost7 } path="/machine-mind" />
          <Route component={ BlogPost8 } path="/expanding-the-mind" />
          <Route component={ BlogPost9 } path="/neureal-vitalik" />
          <Route component={ BlogPost10 } path="/how-crypto-is-changing" />
        </Switch>
      </div>
    </div>
    <Footer />
  </div>
</Router>
    )
  }
}

export default hot(module)(App)
