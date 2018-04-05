import React, { Component } from 'react'

export default class BlogPost2 extends Component {
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
      <img className='img-main-blog' src="https://image.ibb.co/gsDrVS/Round_1_Blogs_03.png" alt="blog post" />

      <div className='author-name-detail'>Eric Nease</div>
      <div className='author-date-posted-detail'>February 28, 2018</div>
    </div>
  </div>


  <div className='column__post'>
    <div className='blog-detail-container-secondary'>
      <div className='title-blog'>What is a Bitcoin/Crypto-Wallet Anyway?</div>
      <div className='caption-blog'>
        Crypto assets require a fundamental change in how we perceive and approach not only money but security. Once you decide to
        own crypto assets, you will also have to decide where and how to keep them.
        <br/>
        <br/> To go beyond bitcoin, one must first understand the blockchain.
        <br/>
        <br/> When thinking of storing value, cash is easiest to wrap our heads around. The bank holds cash available to you.
        You can withdraw funds in that cash and store it in a physical wallet. Simple, easy, and somewhat effective if not
        cumbersome. Not many people are willing to hold all the cash available to them when they have cards that can accesses
        it far easier. These offer a level of convenience and access but also come with extra security measures like a PIN
        number.
        <br/>
        <br/> Crypto-wallets offer a unique combination of access, ownership, and security to storing and using your wealth.
        <br/>
        <br/>
        <div className='sub-title-blog'>Wallets? Try “Keychain”</div>
        <br/> Take your debit card. It doesn’t hold your money—it allows you to transact by accessing those funds through your
        bank. There are measures in place to ensure those transactions are secure.
        <br/>
        <br/> Crypto assets don’t use cards. Instead, blockchain platforms like bitcoin use public and private keys. Your public
        key is an alphanumeric string of characters that funds can be sent to and from. When you send bitcoin to a friend,
        you are sending it to their public key.
        <br/>
        <br/> In this way, your public key is like the account number attached to your debit card, or even your email address.
        <br/>
        <br/>Your private key is kept hidden. How you handle your private key will depend on which wallet you use and the level
        of security you prefer for your wealth. When someone sends you bitcoin, the only way to tell that it’s you is to
        tie your public key to your private key. The private key is used to generate a digital signature to ensure its authenticity.
        <br/>
        <br/>In other words, your private key is kind of like your PIN number, or password for your email. Even though the terms
        are different, the principle is the same. There must be a destination to send and/or receive funds and then a way
        to ensure those are tied to the correct individuals securely.
        <br/>
        <br/>
        <div className='sub-title-blog'>Security &amp; Theft</div>
        <br/> The security of wallets will vary depending on which type you choose, but there are commonalities between them that
        you ought to know.
        <br/>
        <br/> First, like your PIN, your private key must be kept secret unless you want someone to have access to your funds.
        Your public key will appear as an address and will change with each transaction to hide your transaction history
        from others on the network while still tying those transactions back to you.
        <br/>
        <br/> Maybe the most appealing aspect of crypto assets is that no one can steal your bitcoin or hack the blockchain in
        a way that jeopardizes your wealth. This is true even if you lose your phone that has your crypto-wallet, or worse,
        someone stole it and can access your funds. What happens to your crypto then?
        <br/>
        <br/> With crypto-wallets, you are able to recover your funds using instructions given to you when you set up your wallet.
        By completing the security protocol that has you input information provided exclusively to you while registering
        your wallet, you can recover your funds to a new wallet and they will be unavailable to anyone who gets a hold of
        your lost/stolen device.
        <br/>
        <br/> Crypto-wallets also come with password and/or PIN requirements for sending and receiving any funds meaning that
        even if they can access your wallet and view your funds, they will be unable to transact with them unless they know
        your password/PIN.
        <br/>
        <br/> Deciding your level of security will depend on how you intend to use your crypto assets and can be found [here].

        <br/>
        <br/> Don’t forget to follow us on Telegram:
        <a className='link-underline' href=" https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A"
          data-href=" https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A"> https://t.me/joinchat/C8JtFgzGzcsN_tjxoYBH1A</a>
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
