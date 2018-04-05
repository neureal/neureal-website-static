import React, { Component } from 'react'

export default class SecondaryBlog extends Component {
  render() {
    return (
  <div className='blog-secondary-container'>
    <div className='image-blog-container-secondary'>
      <img className='img-secondary-blog' src={ this.props.blogImage } alt="blog post" />
    </div>
    <div className='blog-column-secondary'>
      <div className='blog-detail-container-secondary'>
        <div className='title-blog-secondary'>{ this.props.blogTitle }</div>
        <div className='caption-blog'> { this.props.blogCaption } </div>
        <div className='creator-blog'>
          <div className='flex-author'>
            <div className='flex-date'>
              <div className='author-name'>{ this.props.author }</div>
              <div className='author-date-posted'>{ this.props.blogDate }</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
  }
}
