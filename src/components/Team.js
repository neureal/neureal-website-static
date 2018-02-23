import React, { Component } from 'react';
import Profile from './TeamProfile';

export default class Team extends Component {

  state={ 
    openJen: false,
    openWil: false,
    openKyler: false,
    openJames: false,
    openBrianNel: false,
    openNick: false,
    openBrianBag: false,
    openJordan: false,
   }

  clickOpenJen = () => {
    this.setState({
      openJen: !this.state.openJen
    })
  }

  clickOpenWil = () => {
    this.setState({
      openWil: !this.state.openWil
    })
  }

  clickOpenKyler = () => {
    this.setState({
      openKyler: !this.state.openKyler
    })
  }

  clickOpenJames = () => {
    this.setState({
      openJames: !this.state.openJames
    })
  }

  clickOpenBrianNel = () => {
    this.setState({
      openBrianNel: !this.state.openBrianNel
    })
  }

  clickOpenNick = () => {
    this.setState({
      openNick: !this.state.openNick
    })
  }

  clickOpenBrianBag = () => {
    this.setState({
      openBrianBag: !this.state.openBrianBag
    })
  }

  clickOpenJordan = () => {
    this.setState({
      openJordan: !this.state.openJordan
    })
  }



  render() {
    return (
      <div>
        <div className="content-team">
    <div className="column column__title">
  <h2 className='team-title'>
    The Neureal Team
  </h2>
  </div>
      <div className="column column__full">
        <div className='flex-team'>

        <div className='profile'>
        <img src={require('../images/team/jen.jpg')} alt='jen' onClick={ this.clickOpenJen.bind(this)} />
        <a className='view'>Jen Greyson</a>
       <div className={ this.state.openJen ? 'details' : 'details-more' }>
       <h2>Jen Greyson<br/><span>CEO</span></h2>
       <p>20+ years executive-level. Multi-million dollar leadership. IP Specialist.</p>
       <div className='social-flex'>
       {/* <h3>Follow</h3> */}
       <ul>
         <li><a href='#'><img src={require('../images/In-Black-128px-R.png')} alt='jen' className='team-social-icon' /></a></li>
       </ul>
       </div>
       <div class='close'>
       <img 
       onClick={ this.clickOpenJen.bind(this)}
       src={require('../images/close-asset.png')} 
       alt='close' 
       className='close-button'
        />
        </div>
        </div>
      </div>
 
      <div className='profile'>
        <img src={require('../images/team/wil.jpg')} alt='Wil' onClick={ this.clickOpenWil.bind(this)} />
        <a className='view'>Wil Bown</a>
       <div className={ this.state.openWil ? 'details' : 'details-more' }>
       <h2>Wil Bown<br/><span>Founder - Architect</span></h2>
       <p>25+ years software engineer. Million Dollar Texas Bitcoin Conference hackathon winner. Coding contributor to main fork Bitcoin. Bitcoin miner since 2011. Experience developing multi-million dollar software.</p>
       <div className='social-flex'>
       {/* <h3>Follow</h3> */}
       <ul>
         <li><a href='#'><img src={require('../images/In-Black-128px-R.png')} alt='jen' className='team-social-icon' /></a></li>
       </ul>
       </div>
       <div class='close'>
       <img 
       onClick={ this.clickOpenWil.bind(this)}
       src={require('../images/close-asset.png')} 
       alt='close' 
       className='close-button'
        />
        </div>
        </div>
      </div> 

       
      <div className='profile'>
        <img src={require('../images/team/kyler.jpg')} alt='Wil' onClick={ this.clickOpenKyler.bind(this)} />
        <a className='view'>Kyler Anderson</a>
       <div className={ this.state.openKyler ? 'details' : 'details-more' }>
       <h2>Kyler Anderson<br/><span>Community Manager</span></h2>
       <p>For Kyler, understanding human behavior and the dynamics of communities has been a lifelong fascination and obsession. He has studied and maintained a working knowledge of the field of applied behavior analysis psychology. Kyler was recruited by the USMC and trained in advanced electrical engineering.</p>
       <div className='social-flex'>
       {/* <h3>Follow</h3> */}
       <ul>
         <li><a href='#'><img src={require('../images/In-Black-128px-R.png')} alt='jen' className='team-social-icon' /></a></li>
       </ul>
       </div>
       <div class='close'>
       <img 
       onClick={ this.clickOpenKyler.bind(this)}
       src={require('../images/close-asset.png')} 
       alt='close' 
       className='close-button'
        />
        </div>
        </div>
      </div> 


      <div className='profile'>
        <img src={require('../images/team/james.jpg')} alt='Wil' onClick={ this.clickOpenJames.bind(this)} />
        <a className='view'>James Alton</a>
       <div className={ this.state.openJames ? 'details' : 'details-more' }>
       <h2>James Alton<br/><span>Developer | Dev Ops, Ethereum</span></h2>
       <p>17+ years software development. Wrote the first completed Etherem contract. Bitcoin miner since 2011. Federal Government and Banking software solutions.
</p>
       <div className='social-flex'>
       {/* <h3>Follow</h3> */}
       <ul>
         <li><a href='#'><img src={require('../images/In-Black-128px-R.png')} alt='jen' className='team-social-icon' /></a></li>
       </ul>
       </div>
       <div class='close'>
       <img 
       onClick={ this.clickOpenJames.bind(this)}
       src={require('../images/close-asset.png')} 
       alt='close' 
       className='close-button'
        />
        </div>
        </div>
      </div> 

      <div className='profile'>
        <img src={require('../images/team/brian.jpg')} alt='Wil' onClick={ this.clickOpenBrianNel.bind(this)} />
        <a className='view'>Brian Nelson</a>
       <div className={ this.state.openBrianNel ? 'details' : 'details-more' }>
       <h2>Brian Nelson<br/><span>Relationships, Regulation</span></h2>
       <p>Token sale consultant. Bitcoin and Blockchain Expert. International speaker.</p>
       <div className='social-flex'>
       {/* <h3>Follow</h3> */}
       <ul>
         <li><a href='#'><img src={require('../images/In-Black-128px-R.png')} alt='jen' className='team-social-icon' /></a></li>
       </ul>
       </div>
       <div class='close'>
       <img 
       onClick={ this.clickOpenBrianNel.bind(this) }
       src={require('../images/close-asset.png')} 
       alt='close' 
       className='close-button'
        />
        </div>
        </div>
      </div> 

      <div className='profile'>
        <img src={require('../images/team/nick.jpg')} alt='Wil' onClick={ this.clickOpenNick.bind(this)} />
        <a className='view'>Nick Baguley</a>
       <div className={ this.state.openNick ? 'details' : 'details-more' }>
       <h2>Nick Baguley<br/><span>Data Science, Contacts, Strategy</span></h2>
       <p>Creator of a near-real time serverless architecture for the finance industry.</p>
       <div className='social-flex'>
       {/* <h3>Follow</h3> */}
       <ul>
         <li><a href='#'><img src={require('../images/In-Black-128px-R.png')} alt='jen' className='team-social-icon' /></a></li>
       </ul>
       </div>
       <div class='close'>
       <img 
       onClick={ this.clickOpenNick.bind(this) }
       src={require('../images/close-asset.png')} 
       alt='close' 
       className='close-button'
        />
        </div>
        </div>
      </div> 

      <div className='profile'>
        <img src={require('../images/team/brian_sewell.jpg')} alt='Wil' onClick={ this.clickOpenBrianBag.bind(this)} />
        <a className='view'>Brian Sewell</a>
       <div className={ this.state.openBrianBag ? 'details' : 'details-more' }>
       <h2>Brian Sewell<br/><span>Education</span></h2>
       <p>Brian Sewell is Founder and CEO of The American Bitcoin Academy, the thought leader in cryptocurrency education. Mr. Sewell is a serial entrepreneur who has owned several companies in the technology, energy and manufacturing industries. </p>
       <div className='social-flex'>
       {/* <h3>Follow</h3> */}
       <ul>
         <li><a href='#'><img src={require('../images/In-Black-128px-R.png')} alt='jen' className='team-social-icon' /></a></li>
       </ul>
       </div>
       <div class='close'>
       <img 
       onClick={ this.clickOpenBrianBag.bind(this) }
       src={require('../images/close-asset.png')} 
       alt='close' 
       className='close-button'
        />
        </div>
        </div>
      </div> 

      <div className='profile'>
        <img src={require('../images/team/jordan.jpg')} alt='Wil' onClick={ this.clickOpenJordan.bind(this)} />
        <a className='view'>Jordan Miller</a>
       <div className={ this.state.openJordan ? 'details' : 'details-more' }>
       <h2>Jordan Miller<br/><span>Education</span></h2>
       <p>Creator of the maestro ai project (maestroai.com), Jordan has a background in distributed systems, machine learning, economics, phi- losophy and information theory.</p>
       <div className='social-flex'>
       {/* <h3>Follow</h3> */}
       <ul>
         <li><a href='#'><img src={require('../images/In-Black-128px-R.png')} alt='jen' className='team-social-icon' /></a></li>
       </ul>
       </div>
       <div class='close'>
       <img 
       onClick={ this.clickOpenJordan.bind(this) }
       src={require('../images/close-asset.png')} 
       alt='close' 
       className='close-button'
        />
        </div>
        </div>
      </div> 
      
        </div>
      </div>
    </div>
  </div>
    )
  }
}
