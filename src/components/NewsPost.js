import React, { Component } from 'react'

export default class NewsPost extends Component {
  render() {
    return (
      <div className='news-container'>
        <div className='news-post'>
          <a href={ this.props.newsLink } target="_blank">
            <img className='news-img' src={ this.props.newsImage } alt="news" />
          </a>
          <a href={ this.props.newsLink } target="_blank">
            <div className='news-detail-container'>
              <div className='news-container-padding'>
                <h2 className='news-title'>{ this.props.newsTitle }</h2>
                <div className='news-caption'>{ this.props.newsCaption + '...' }</div>
                <div className='learn-more-container'>
                  <div className='news-learn-more'>Learn More</div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

    )
  }
}