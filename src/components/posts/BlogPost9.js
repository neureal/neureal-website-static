import React, { Component } from 'react'; 

export default class BlogPost9 extends Component { 
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
          <img className='img-main-blog' src="https://image.ibb.co/mmEJun/Round_1_04.png" alt="blog post" />

          <div className='author-name-detail'>Jen Greyson</div>
          <div className='author-date-posted-detail'>March 14, 2018</div>
        </div>
      </div>
      <div className='title-blog'>Neureal and Vitalik’s DAICO</div>
      <div className='caption-blog'>
        Before he presented the idea publicly in January, Neureal had already implemented several of the Best Practices he suggests,
        among them, the requirement of community vote to release funds based on milestones, much in the way of current startup
        incubators.
        <br/>
        <br/>Neureal has instituted several decisions to postpone its token generation event in order to implement Best Practices
        based on industry-wide issues. One of which was the removal of the soft and hard caps in order to prevent whales
        from dominating the token sale, as was seen in
        <a className='link-accent' href="https://bravenewcoin.com/news/decentraland-raises-24-million-in-35-seconds-leaving-retail-investors-out-in-the-cold/"
          data-href="https://bravenewcoin.com/news/decentraland-raises-24-million-in-35-seconds-leaving-retail-investors-out-in-the-cold/"
          target="_blank"> Decentraland’s 35-second, $24MM raise</a> that left a majority of the community unable to purchase tokens in the
        sale. Theirs wasn’t the first occurrence, nor the last. What bothered the team at Neureal was that no one seemed
        to be making adjustments to counterbalance what was happening in the token sales.
        <br/>
        <br/>But the decision to pull the Neureal cap presented the problem of selling a vast amount of pre-release software access
        and the resulting deluge of a large stream of working capital without a way for the community to weigh in on the
        project’s ability to reach its internal milestones.
        <br/>
        <br/>To account for this, Neureal implemented a strategy to engage smart contracts and voting to reward the project for
        successfully accomplishing milestones, thus keeping the majority of the funds received during the token generation
        event locked up.
        <br/>Bonus. By keeping the funds frozen, they can continue to appreciate based on an increasing value of ETH, as seen
        in their CEO’s <a className='link-accent' href="https://medium.com/@JenGreyson/raise-1m-hodl-132mm-how-crypto-is-changing-the-vc-game-707112d6f79d"
          data-href="https://medium.com/@JenGreyson/raise-1m-hodl-132mm-how-crypto-is-changing-the-vc-game-707112d6f79d"
          target="_blank">recently published dataset</a> showing the current value of ETH for 2017 ICOs.
        <br/>
        <br/>This forward-thinking, community-driven philosophy is what continues to showcase Neureal as an emerging leader in
        the blockchain space. Coupled with their AI + Blockchain project, this startup is continuing to show why it will
        be one of the 2% who will still be around long after their token generation event.

        <br/> Don’t forget to follow us on Telegram:
        <a className='link-underline' href=" https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A" data-href=" https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A">
           https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A</a>

        <div className='creator-blog'>
        </div>
      </div>
    </div>
  </div>
</div>
) } }