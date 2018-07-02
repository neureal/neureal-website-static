import React, { Component } from 'react'

export default class BlogPosts extends Component {
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
          <img className='img-main-blog' src="https://image.ibb.co/h7KyS7/main_banner_compressor.jpg" alt="blog post" />
        </div>
      </div>


      <div className='column__post'>
        <div className='blog-detail-container-secondary'>
          <div className='title-blog'>What is Neureal?</div>
          <div className='caption-blog'>

            Neureal is a project combining Blockchain and predictive AI technology to do something truly beneficial for humanity, rather
            than just trying to crack a useless hash. Neureal seeks to give humanity the power to see the future and become
            limitless by putting tools currently used by the world’s most powerful companies in the hands of EVERYONE. Neureal’s
            design means it has great potential to become the world’s most accurate predictor. Forget reliable accuracy,
            we are going black swan hunting! <a className='link-underline' href="https://www.visualcapitalist.com/black-swans-9-recent-events-that-changed-finance-forever/" data-href="https://www.visualcapitalist.com/black-swans-9-recent-events-that-changed-finance-forever/">(Black Swans: 9 Recent Events That Changed Finance Forever)</a>
            <br/>
            <br/> Let me give you a brief overview of our team, the project, a few use cases and provide links so you can do your
            own research. If you have any questions, please feel free to reach out to me and I will get you answers or get
            you connected directly with the CEO or Chief Architect. Our policy is extreme transparency, so if you want access
            to any of our documentation, you only have to ask and I will show you where to find it.
            <br/> Our CEO is Jen Greyson. This month she was voted among Chipin’s “Top 8 Women in Cryptocurrency.” She brings
            over a decade of business experience running a multi-million dollar life insurance company and another decade
            running a publishing company, where she specialized in intellectual property, turning ideas into money.
            <br/>
            <br/> I have known our Chief Architect, Wil Bown, since he was organizing Bitcoin meetups in 2013, where we each easily
            spent over $50K (today’s exchange) of BTC doing Bitmob events at restaurants in the Salt Lake valley. He has
            been programming for over 30 years, has been programming blockchain projects since 2011, and won first prize
            at the 2015 Texas Blockchain Hackathon with a prototype of Neureal. This prize entitled him to a $500,000 investment
            if he was able to launch an ICO within a year. Wil was, unfortunately, unable to capitalize on this opportunity
            at the time and has since built a team, made connections, and strategized to ensure the project’s success long
            after its Token Generation Event.
            <br/>
            <br/> More information about our team can be found here: 
            <a className='link-underline' href="https://docs.google.com/presentation/d/18aTxA6LZCq4ewikatIYKymD9ZRBjUtZMJueIEtWeQ-o/edit?usp=sharing" 
            data-href="https://docs.google.com/presentation/d/18aTxA6LZCq4ewikatIYKymD9ZRBjUtZMJueIEtWeQ-o/edit?usp=sharing">
              <br/>Neureal Team and Advisors</a>
            <br/>
            <br/> Neureal is a platform, one which allows anyone to approach the platform with something they want to be predicted,
            data they believe is relevant to that prediction, and a reward for the most accurate predictors (in our currency
            of Neurons). From there, predictive algorithms, neural networks, human-powered/augmented prediction markets compete
            to give the most accurate prediction. This competition has an incredible number of advantages over existing models.
            For example, it ensures the most accurate predictor available is used to make the prediction every time, incentivizes
            the further development of new predictive algorithms/techniques, and the refinement of existing ones.
            <br/>
            <br/> It also creates a great market for the projects currently trying to make it possible for individuals to regain
            control of their data and monetize it for themselves, as our predictors would always be attempting to obtain
            more data they believe would allow them to predict more accurately. (As an aside, our CEO is working several
            valuable connections to bring several hospitals and cancer centers into the data stream discussion.)
            <br/>
            <br/> The project is also, in my opinion, a very eloquent solution to the question of, “What is being done about all
            this power waste in crypto?” With Neureal, the power is used to make useful predictions for individuals and businesses
            rather than trying to crack a useless hash. Most of the experts I have been listening to in the space have said
            for years that all this hash power is ultimately going to be used for AI.
            <br/>
            <br/>
            <br/> Here is our current roadmap (please note this is subject to change): We just closed our Pre-Pre sale on the
            14th, and are now moving forward into our pre-sale which begins April 5th. The presale is for accredited investors
            only and has a minimum purchase of $100,000. This will continue until April 15 when we will begin the Token Generation
            Event public sale. In this sale, tokens will be available in hourly buckets. The price will rise slightly after
            each bucket with a maximum of 6X the opening price. We have designed the sale this way in an attempt to distribute
            the tokens as widely as possible. Unfortunately, we will not be allowing US citizens to participate in the Token
            Generation Event public sale.
            <br/>
            <br/> All Neureal tokens received will be locked in their wallets. This lock will remain in place until the Neureal
            network is fully secure, has passed internal auditing and testing, publicly demonstrates its ability to scale,
            capability for accuracy (Via our 2 MVPs), and is ready to accept prediction contracts (Oracles) from the general
            public. We conservatively expect this process to take 2 years. During that period, we will be running our 2 MVP
            products. The first is a crypto trading bot which will predict not just what a pairing will be tomorrow, but
            a continuous prediction of the price going from the next second onward, being constantly updated by live data.
            We feel this is a good first project because it’s not extremely complicated, there is a glut of freely available
            data, and it’s appealing for our target audience. The second MVP uses the Neureal network to predict hurricane
            travel path and intensity using live streaming meteorological data, and do so more accurately than any prediction
            system currently available. The progress on and predictions made by these MVPs will be freely available to the
            public as a demonstration of the network’s capabilities.
            <br/>
            <br/> We have been in talks with a number of companies who want to use Neureal as a service, but for a concrete example,
            let’s use Lyft. When/if Neureal’s services become available, they would like to have their driverless cars autonomously
            ask for predictions about where the most profitable place to wait for their next customer. In practice, a Lyft
            car could be available before you knew you needed it. As another example, airlines could use the Neureal network
            to improve their existing predictive algorithms, such as their “no show” algorithm which caused so much trouble
            this past year. New practical examples are being offered up by our community as they continue to answer how they’d
            use the power of Neureal.
            <br/>
            <br/> We are also in talks to partner with several projects in the blockchain space, for instance, SingularityNET.
            They are building a piece of our network described in our whitepaper which would allow AI agents to interact
            autonomously with each other, Neureal in this case. Harnessing their efforts frees up development time and resources.
            Having Neureal would mean they could add predictive algorithm services to every AI product on their marketplace,
            you could use agents on SingularityNET as predictors on the Neureal network, and the data generated by each project
            will be useful to the AI agents of the other. Neureal has this kind of synergistic potential with virtually every
            AI project currently active or proposed — every AI project in the world, not just AI+blockchain.
            <br/>
            <br/> Additionally, we are pursuing partnerships with institutions like the University of Utah, participating in a
            program that allows students of the University to design predictors to compete on the Neureal network for credit.
            We will also be providing a Default Prediction Strategy (DPS) as outlined in our white paper. The DPS will run
            on NVIDIA GPUs and is plug-and-play, so non-technical individuals can run it just like they would run a cryptocurrency
            miner. That system itself has the potential to eclipse any kind of cloud offering like Google TPU cloud.
            <br/>
            <br/> Our legal team has been doing everything possible to comply with regulations on all fronts. They say the strategy
            we are currently pursuing is one that many cryptocurrency projects will want to look to going forward. I cannot
            say more about this at this time, as we are still finalizing everything. Please watch our official channels for
            announcements.
            <br/>
            <br/> I hope I still have your attention after that massive wall of text. Thank you so much for your time. Information
            about our project can be found at the links below. We would love to answer any questions here or in our official
            telegram.
            <br/>
            <br/>
            <a className='link-underline' href="https://t.me/joinchat/C8JtFkMMkD3nbZY_MMPAaA" data-href="https://t.me/joinchat/C8JtFkMMkD3nbZY_MMPAaA">Please join our Telegram community!</a>
            <br/>
            <br/>
            
          </div>
          <div className='creator-blog'>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
  }
}
