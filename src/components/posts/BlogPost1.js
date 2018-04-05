import React, { Component } from 'react'

export default class BlogPost1 extends Component {
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
      <img className='img-main-blog' src="https://image.ibb.co/eWUqqS/Round_1_Blogs_02.png" alt="blog post" />
      
      <div className='author-name-detail'>Eric Nease</div>
      <div className='author-date-posted-detail'>February 21, 2018</div>
    </div>
  </div>


  <div className='column__post'>
    <div className='blog-detail-container-secondary'>
      <div className='title-blog'>Blockchain vs Bitcoin: Separating Tech and Use Case</div>
      <div className='caption-blog'>

        It’s 2018 and it’s official: everyone knows about bitcoin. Unfortunately, not everyone knows the wider world of crypto assets
        beyond bitcoin. That’s a shame because some of the most interesting projects and benefits of blockchain exist outside
        of use cases like currency or storage of value.
        <br/>
        <br/> To go beyond bitcoin, one must first understand the blockchain.
        <div className='sub-title-blog'>The Blockchain Behind Bitcoin</div>
        <br/> The blockchain is a trustless and decentralized method of exchange. It is an immutable ledger distributed across
        members of the network that does not require a centralized authority to ensure the integrity of the system. This
        exchange can be transacting value in the form of digital currency: bitcoin.
        <br/>
        <br/> If we look at bitcoin, the blockchain records every transaction made on the network since its inception. When you
        send or receive bitcoin, special users known as “miners” verify those transactions by checking all transactions in
        the network to make sure that transaction is valid. That transaction is then committed to a block in the chain and
        will be referenced every time a miner verifies a new transaction. This ensures the system is updated and correct
        with every exchange made between its users.
        <br/>
        <br/> This solves a fundamental issue with exchanging digital information known as the double spending problem. If you
        send a file via email, you do not lose that file. It is merely copied and now two of those files exist. For money,
        this would not work. With blockchain, transacting value is transparent and fair across the network. It maintains
        its integrity by accurately accounting for changes in value due to each transaction.

        <br/>
        <br/>
        <div className='sub-title-blog'>Why This Matters for Currency in a Modern World</div>
        <br/> The evolution of both money and the systems to control/facilitate that money have evolved over time. Progressing
        from precious metals to paper money to debit and credit has made it easier for money to move in an economy. It offers
        more services and options for users. But in order to use those services, we put trust in those who offer them. Third
        party intermediaries hold participants accountable. This centralization has drawbacks that can include corruption,
        fraud, vulnerability to cyber attack, and trust in a fourth party (regulation) to keep intermediaries honest.
        <br/>
        <br/> With blockchain, we have achieved the best of both worlds. We can develop a system of reliable, cheap, and fast
        transactions—and we can do it without a third party. These networks are global and open allowing for participation
        across the globe unfettered from regional governance. Blockchain allows for the sort of reach and opportunity not
        seen since the dawn of the internet.
        <br/>
        <br/>
        <div className='sub-title-blog'>The Blockchain Beyond Bitcoin</div>
        <br/>
        <br/> Let’s look outside of currency. We have a network with global reach, open participation, and a reliable ledger of
        exchange.
        <br/>
        <br/>
        <div className='bold-caption'>Energy Sector:</div> As green energy options like solar become more viable, it creates opportunity for energy users
        to also become energy producers. There are currently centralized methods of selling power you generate via solar
        panels to the grid. With blockchain, individuals who produce energy and those who need it can exchange directly between
        one another.
        <br/>
        <br/>
        <div className='bold-caption'>Supply Chain (and your food!):</div> Consumer awareness is at an all time high—and that’s a good thing! Consumers
        can get piece of mind by checking that products make legitimate claims by various stamps of approval from third parties.
        We trust that those third parties are honest and reliable. But what if we tracked an item through production using
        the blockchain? Each product could be traced with full transparency from production to sales floor.
        <br/>
        <br/> This can be applied to food by verifying organic or non-GMO labelled products. In the instance there is a food scare
        leading to a recall, it can take time to check product and trace its origin to determine whether it is safe. With
        blockchain, items can be traced in a fraction of the time and get potentially harmful food product off shelves faster.
        <br/>
        <br/>
        <div className='bold-caption'>Distributed Supercomputing:</div> In 2007, researchers at Stanford University sought to understand how proteins fold
        and thus affect how they work in your body. The findings would help understand disorders linked to incorrect folding
        such as Alzheimer’s disease. Unfortunately, this is a complex task requiring plenty of processing power-- so they
        outsourced it using PlayStation 3.
        <br/>
        <br/> PlayStation 3 owners were able to donate idle processing power to the project. But what if this was available to
        any organization or individual? Instead of going through costly data centers, you could leverage users on the blockchain
        willing to offer their processing power to your project. As a contributor, you would be incentivized to provide that
        computing power. By leveraging thousands (or millions) of computers across the network, you could have a supercomputer
        at your fingertips for a fraction of what it would cost to go through a centralized institution.
        <br/>
        <br/> Now take that distributed network, and imagine combining access to live data streams that allow that processing
        power to make accurate predictions based on that data. Low level predictions can be fed back into the network and
        incorporate more data and processing power to increase the accuracy and precision of those predictions. Protein folding
        is complex, but by leveraging global computation we can create models to predict everything from heart attacks to
        hurricanes—and we can do it far better than any human generated predictions in existence.
        <br/>
        <br/> Whether it’s voting, healthcare records, ride sharing, autonomous vehicles, or artificial intelligence—blockchain
        can establishing a trustless record of accountability for people in a way that offers transparency, can leverage
        distributed populations, and allow for transactions with fewer barriers placed by third party intermediaries.
        <br/>
        <br/> To see how blockchain is impacting AI and supercomputing, join our Telegram:
        <br/> Link:
        <a className='link-underline' href=" https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A" data-href=" https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A">https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A</a>
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
