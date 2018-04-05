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
          <img className='img-main-blog' src="https://image.ibb.co/kaREZn/RAISE_1_M_03_07.png" alt="blog post" />

            <div className='author-name-detail'>Jen Greyson</div>
            <div className='author-date-posted-detail'>March 28, 2018</div>
        </div>
      </div>
      <div className='title-blog'>Raise $1M; HODL $132MM. How crypto is changing the VC game.</div>
      <div className='caption-blog'>
        After a recent conversation on LinkedIn spurred my curiosity, I went looking at how the current spike of ETH would look for
        the ICOs of 2017. The results shocked me.
        <br/>
        <br/> Raising capital isn’t new. Raising capital in an asset class that can cause 15,000% gains; that’s a big deal. A
        damn big deal considering the cost to bring some of these nascent technologies to market. Dev costs alone are skyrocketing
        (as they should be).
        <br/>
        <br/> Still, I would venture that most of the teams putting out ICOs in 2016 and early 2017 could not have predicted the
        run of BTC and ETH. I ran the numbers using just ETH, so some of these aren’t accurate if they only took BTC, but
        the meteoric rise of BTC tracked with ETH, better some months. (Anyone’s welcome to add a BTC column to the below
        spreadsheet.)
        <br/>
        <br/> Let’s take a look at the leaderboard from two angles, % increase and current estimated value.
        <br/>
        <br/> Mercatox, BlockCDN, Hacker Gold— all up 15,071% from the day’s high of $7USD for ETH in December 2016.
        <br/>
        <br/> FIFTEEN THOUSAND PERCENT
        <br/>
        <br/> Hacker Gold raised $653k, currently worth $99MM
        <br/>
        <br/> Wings and Golem — up 10,520%
        <br/>
        <br/> Wings’s raise of $2MM, currently at $220MM based on the day’s high of $10USD for ETH compared to where it sits today
        at $1062USD (to say nothing of where it was when it was up at $1400 a few weeks ago.)
        <br/>
        <br/> Golem went from a respectable $8.5MM raise to $912MM — nearly a billion in USD.
        <br/>
        <br/> Ironically, the biggest leader is The DAO, turning their $168MM raise to $14.8B. Another irony is Tezos; their $232MM
        raise is valued at a little over a billion as well (though only a 360% increase).
        <br/>
        <br/> So while ICOs have been touted for their ability to circumvent the silver handcuffs of VC deals, it is the ongoing
        gains that are an astounding infusion of working capital that will likely speed this new tech into the market.
        <br/>
        <br/> To that point, I didn’t take the time to delve into where these companies are spending that money, how well they’ve
        met their milestones, and how many of them have crashed. That dataset would be another interesting research project,
        likely one that could help dispel this ongoing fear that most ICOs are ideas with no ability to execute.
        <br/>
        <br/> Spreadsheet of figures here:
        <br/>
        <a className='link-underline' href="https://docs.google.com/spreadsheets/d/1tuxyFdWWerddt7gZnCXixsj-eVh1SXrm0uiPrnfupM0/edit?usp=sharing"
          data-href="https://docs.google.com/spreadsheets/d/1tuxyFdWWerddt7gZnCXixsj-eVh1SXrm0uiPrnfupM0/edit?usp=sharing">
          https://docs.google.com/spreadsheets/d/1tuxyFdWWerddt7gZnCXixsj-eVh1SXrm0uiPrnfupM0/edit?usp=sharing</a>
        <br/>
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