import React, { Component } from 'react';
import { Link } from "react-router-dom";
import EmailForm from './EmailForm';

export default class HomePage extends Component {
  render() {
    return (
<div>
    <div className="content">
        <div className="flex">
            <div className="column column__one-third">
                <h1 className="content__title">What is Neureal?</h1>
                <p className="content__paragraph">That may seem a wild boast, but the nascent technologies of blockchain and end-to-end learning truly gives rise to endless possibilities that can be applied across nearly every industry, from NOAA to Lyft. Our architecture is capable of predicting a heart attack accurately enough to save a life; predict a hurricane accurately enough to move vulnerable people out of harm’s way, predict traffic and human patterns accurately enough for companies like Lyft to adjust actions and add to their bottom line. From complicated to simple, Neureal’s impact is far-reaching.</p>
                <div className='home-button-flex'>
                    <Link to='/learn'>
                    <a href='./learnMore.html'>
                        <div className="learn-more-button">
                            <div className='learn-more'>LEARN MORE</div>
                        </div>
                    </a>
                    </Link>
                    <Link to='/roadmap'>
                    <a href='./roadmap.html'>
                        <div className="roadmap-button">
                            <div className='road-map'>ROADMAP</div>
                        </div>
                    </a>
                    </Link>
                </div>
            </div>
            <div className="column column__two-thirds">
                <img src={require( '../images/Comp_1.gif')} alt="" className="content__image" />
            </div>
        </div>

        <div className="grid">
            <p> Need a more detailed explanation?</p>
            <div className='video-container'>
                <video className='video-neureal' controls>
                    <source src="http://jennygreyson.com/wp-content/uploads/2017/12/limitless-copy.mp4" type="video/mp4" /> Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </div>
</div>
    )
  }
}