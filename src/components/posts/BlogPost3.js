import React, { Component } from 'react'

export default class BlogPost3 extends Component {
  render() {
    return (
<div>
  <div className="content">

    {/*
    <div className='flex-author'>
      <img className='author-of-blog' src={require( '../../images/team/kyler.jpg')} alt='author' />
      <div className='flex-date'>
        <div className='author-name'>Kyler Anderson</div>
        <div className='author-date-posted'>March 1</div>
      </div>
    </div> */}

    <div className='blog-post-container'>
      <div className='column__post'>
        <div className='image-blog-container'>
          <img className='img-main-blog' src="https://image.ibb.co/mwjRx7/Round_1_Blogs_07.png" alt="blog post" />

          <div className='author-name-detail'>Eric Nease</div>
          <div className='author-date-posted-detail'>March 7, 2018</div>
        </div>
      </div>
      <div className='title-blog'>Business as Usual: Crypto Community Moves Forward Despite FUD</div>
      <div className='caption-blog'>
        Has the sky fallen? Has the bubble popped? Is this what the news has warned us about when it comes to vague bitcoin press
        coverage?
        <br/>
        <br/> If you’re newer to the world of crypto assets, the following chart might cause some discomfort, especially if you’ve
        recently purchased bitcoin since December.
        <br/>
        <br/>
        <img className='blog-image' src="https://image.ibb.co/eVjsx7/bitcoin_Chart_compressor.jpg" alt="bitcoin chart" />
        <br/>
        <br/> We are using bitcoin here because it best represents the market. The sudden rise and recent fall has left many worried
        about the state of crypto assets. But it isn’t the first time bitcoin has seen sharp corrections. In fact, we can
        show almost the same pattern from 2012-2013 here:
        <br/>
        <br/>
        <img className='blog-image' src="https://image.ibb.co/g6QnVS/chart_Span_compressor.jpg" alt="bitcoin chart" />
        <br/>
        <br/> Those in the crypto community for long enough know that this is par for the course. It’s part of the process. In
        fact, it’s not even the worst bitcoin has seen. As of February 1st, 2018, the correction from all time highs is 55%.

        <br/>
        <br/> Yet we only have to go back to September to recall the 40% correction. Go back even further and you can see a ~50%
        correction in February 2014. The tumultuous year-long fall from ~$1072 to $206 throughout 2014, the sharp correction
        of over 70% in one week of April 2013, the 90% crash in 2011 [1]—none of it changes the fact that the crypto community
        is still here and moving forward.

        <br/>
        <br/> These numbers aren’t meant to predict what will happen next in the market. It’s to illustrate that developers and
        entrepreneurs continue to drive the space forward despite these setbacks. This is grounded in the belief that the
        fundamental technology that allows for effective decentralization has revolutionary value for our world.

        <br/>
        <br/> This is the crux of crypto. It is beyond bitcoin. It’s the promise of benefitting everyone with viable use cases
        for this technology.
        <br/>
        <br/> Market FUD won’t deter Mark Zuckerberg from dedicating research to blockchain and decentralized protocols. It doesn’t
        stop tech giants like Samsung from entering the mining hardware market. [3] And it isn’t stopping promising ICOs
        from hitting their fundraising targets, sometimes at breakneck speeds.
        <br/>
        <br/> As FUD works its way into the minds of retail investors, it’s important to look at the fundamentals for why this
        space is valuable. That boils down to the technology underpinning crypto assets and the myriad applications in which
        it can benefit existing and emerging industries.
        <br/>
        <br/> If the current crypto climate worries you, dig into these projects. Gravitate to ones with promise and spread your
        focus across several teams, what they are trying to accomplish, and how they’re going to change their industry.
        <br/>It might surprise some who have jumped on the crypto-coaster of investing to fall so quickly, but long- term outlook
        and knowledge about the fundamentals driving the crypto-community outside of price action will offer perspective
        instead of frenzy. So, while impulsivity might get the best of many retail investors, take stock in the fact that
        developers continue to drive innovation and come up with better solutions using decentralizing technologies.
        <br/>
        <br/> Don’t forget to follow us on Telegram:
        <a className='link-underline' href=" https://t.me/joinchat/C8JtFkMMkD3nbZY_MMPAaA"
          data-href=" https://t.me/joinchat/C8JtFkMMkD3nbZY_MMPAaA"> https://t.me/joinchat/C8JtFkMMkD3nbZY_MMPAaA</a>
        <div className='creator-blog'>
        </div>
      </div>
    </div>
  </div>
</div>
    )
  }
}