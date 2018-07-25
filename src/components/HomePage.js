import React, { Component } from 'react';
import { Link } from "react-router-dom";
import EmailForm from './EmailForm';
import LearnMore from './LearnMore';
// import CountdownTimer from './CountdownTimer';

export default class HomePage extends Component {
  render() {
    return (
<div>
    <div className="content">
        <div className="flex">
            <div className="column column__one-third">
                <h1 className="content__title">What is Neureal?</h1>
                <p className="content__paragraph">
                    A limitless ability to forecast the future.
                    <br/>
                    <br/> That may seem a wild boast, but the nascent technologies of blockchain and end-to-end learning truly
                    gives rise to endless possibilities that can be applied across nearly every industry, from NOAA to Lyft.
                    Our architecture is capable of predicting a heart attack accurately enough to save a life; predict a
                    hurricane accurately enough to move vulnerable people out of harm’s way, predict traffic and human patterns
                    accurately enough for companies like Lyft to adjust actions and add to their bottom line. From complicated
                    to simple, Neureal’s impact is far-reaching.</p>
                <div className='home-button-flex'>
                    <a href='https://docs.google.com/document/d/1kOJx7clG2V4TevhgwndRDievXpVaAciPzjmqGxI0CtA/view' target="_blank">
                        <div className="learn-more-button">
                            <div className='learn-more'>WHITEPAPER</div>
                        </div>
                    </a>
                    <a href='https://drive.google.com/file/d/1GGL177_u3zs4nfQYbLpjhVGLSy9G0lLM/view' target="_blank">
                        <div className="roadmap-button">
                            <div className='road-map'>ROADMAP</div>
                        </div>
                    </a>
                </div>
            </div>

            <div className="column column__two-thirds">
                <img  src={require('../images/Comp_1.gif')} alt="" className="content__image" />
            </div>
        </div>

        <h1 className="content__quote">"Top 20 Most Promising Artificial Intelligence Solution Providers
            <br/> 2017–CIOReview"</h1>


        <div className="flex-columns">

            <div className='info-box'>
                <div className='info-box-container'>
                    <div className='.column-half'>
                        <div className='info-subtitle-flex'>
                            <img 
                            className='info-icon'
                            src={require( '../images/icons/android-locate.svg')}
                            fill="white"
                            alt="github"
                            />
                            <h1 className="content__title">Accuracy</h1>
                        </div>
                        <p className="content__paragraph">Prediction is worthless without accuracy. Our ability to harness compute via blockchain technology,
                            coupled with the ability to create predictors out of novice users creates unsurpassed accuracy.
                        </p>
                    </div>
                </div>
            </div>

            <div className='info-box'>
                <div className='info-box-container'>
                    <div className='.column-half'>
                        <div className='info-subtitle-flex'>
                        <img 
                            className='info-icon'
                            src={require( '../images/icons/android-checkbox-outline.svg')}
                            fill="white"
                            alt="github"
                            />
                            <h1 className="content__title">Proven</h1>
                        </div>
                        <p className="content__paragraph">Folding@home + Bitcoin. Community is far more powerful than individual effort, whether measured inside
                            company structures or global neighborhoods.
                        </p>
                    </div>
                </div>
            </div>

            <div className='padding-header-section'>
                <div className='info-box'>
                    <div className='info-box-container'>
                        <div className='.column-half'>
                            <div className='info-subtitle-flex'>
                            <img 
                            className='info-icon-card'
                            src={require( '../images/icons/card.svg')}
                            fill="white"
                            alt="github"
                            />
                                <h1 className="content__title">Incentivized</h1>
                            </div>
                            <p className="content__paragraph">Adding the ability to pay and get paid within an open-source governance incentivizes and rewards
                                all participants, no matter what role they play inside the organism.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='column'>
            <h1 className="as-seen-caption">AS SEEN IN</h1>

            <div className='as-seen-container'>
                <img className='as-seen-image' src={require( '../images/medium_compressor.png')} alt="Medium" />
                <img className='as-seen-image' src={require( '../images/bitcoin_compressor.png')} alt="Bitcoin.com" />
                <img className='as-seen-image' src={require( '../images/usa_weekly_compressor.jpg')} alt="USA Weekly" />
                <img className='as-seen-image' src={require( '../images/steemit_compressor.png')} alt="Steemit" />
                <img className='as-seen-image' src={require( '../images/chippin_compressor.png')} alt="Chipin" />
                <img className='as-seen-image' src={require( '../images/cointele_compressor.png')} alt="Cointelegraph" />
                <img className='as-seen-image' src={require( '../images/value_compressor.png')} alt="ValueWalk" />
                <img className='as-seen-image' src={require( '../images/future_compressor.jpg')} alt="FutureTech" />
                <img className='as-seen-image' src={require( '../images/decentral_market_compressor.png')} alt="DecentralMarket" />
                <img className='as-seen-image' src={require( '../images/cryptoknight_compressor.jpg')} alt="CryptoKnights" />
            </div>
            <h1 className="as-seen-caption">PARTNERS</h1>

            <div className='as-seen-container'>
                <a href="https://scienceblockchains.com/"><img className='as-seen-image' src={require( '../images/medium_compressor.png')} alt="ScienceBlockchains" /></a>
                <a href="https://maddevs.io/"><img className='as-seen-image' src={require( '../images/maddevs_compressor.png')} alt="MadDevs" /></a>
            </div>
        </div>
        <div className="grid">
            <div className='video-container'>
                <video className='video-neureal' controls>
                    <source src={require( '../images/neureal-video.mp4')} type="video/mp4" /> Your browser does not support the video tag.
                </video>
            </div>
        </div>
        <LearnMore />
    </div>
</div>
    )
  }
}