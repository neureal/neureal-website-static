import React, { Component } from 'react'

export default class BlogPost5 extends Component {
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
          <img className='img-main-blog' src="https://image.ibb.co/kbULPn/Round_1_Blogs_05.png" alt="blog post" />
            <div className='author-name-detail'>Eric Nease</div>
            <div className='author-date-posted-detail'>April 4, 2018</div>
        </div>
      </div>
      <div className='title-blog'>How to Choose a Crypto Wallet</div>
      <div className='caption-blog'>
        Whether you’re interested in the wide world of crypto assets or looking for another method to store your coins, there are
        plenty of options to choose from. Deciding which crypto-wallet you want to use will depend on which crypto asset
        you want to store among other factors.
        <br/>
        <br/> Digging through the rich world of crypto will inevitably lead to utility tokens. These are often businesses leveraging
        blockchain technology to disrupt an existing category in the market. And make no mistake, with this many crypto assets
        in existence, there’s bound to be one disrupting any industry you can think of. Whether it’s publishing, ride sharing,
        dozens of gaming application, energy, couting, virtual/augmented reality, insurance, advertising—you name it and
        there’s a blockchain for it.
        <br/>
        <br/> If you’ve read our previous article, you will know that when you buy a crypto asset like bitcoin you are participating
        in the blockchain using private and public keys. Choosing which crypto-wallet will depend on how you want to handle
        those keys.
        <br/>
        <br/>
        <div className='sub-title-blog'>“Hot” Storage Crypto-Wallets</div>
        <br/> Most people purchase their crypto assets from an exchange where those tokens will appear in your online account.
        It knows you own that amount because these exchanges manage your private keys. They are also high-volume centers
        of wealth that are freely accessible to anyone with an internet connection.
        <br/>
        <br/> Herein lies the heart of hot wallets: they are tied, in some way, to an internet connection.
        <br/>
        <br/>
        <div className='sub-title-blog'>Web Wallets (Browser)</div>
        <br/> Any crypto-wallet that requires you to log on to a website to view your crypto falls under this category. That includes
        any exchange that holds your crypto-asset. This involves increased trust in a third party—a facet that runs counter
        to many crypto-enthusiasts.
        <br/>
        <br/> Many web wallets hold your private keys which means they technically control your funds. Others allow you to own
        your private keys but require using their servers to load your wallet.
        <br/> The advantage of a web wallet is that you can access it from any device with an internet connection. Unfortunately
        increased accessibility leads to increased vulnerability. Having your private keys available through an online source
        makes it more susceptible to hacks and fraud. To combat this, some web wallets include multi-sig verifications among
        other security measures to help protect your crypto assets.
        <br/>
        <div className='sub-title-blog'>Software—Desktop & Mobile</div>
        <br/> Software wallets are downloaded onto your computer or mobile device. This offers an extra layer of security by allowing
        you to own your private keys and keep your crypto assets off websites and exchanges susceptible to cyber attack.
        The odds of you being a specific target of crypto-theft are lower than centralized sites that are responsible for
        large volumes of funds.
        <br/>
        <br/> You can download a software wallet for your desktop or mobile device. Some are specific to a single crypto asset
        while others allow you to store multiple crypto assets on the same wallet.
        <br/>
        <br/> But that doesn’t mean these wallets are full-proof safety precautions. As long as your device is tied to an internet
        connection it is still vulnerable. A hacker who breaks into your computer or mobile device can gain access to your
        wallet and take any number of actions to siphon your wealth away or simply steal your crypto assets.
        <br/>
        <br/> Mobile wallets are convenient for those who want to have their crypto assets on hand wherever they go. In a world
        where we can transact peer to peer with nothing more than a QR code, mobile wallets are an appealing storage and
        usage method.
        <br/>
        <br />
        <div className='sub-title-blog'>“Cold” Storage Crypto-Wallets</div>
        <br/> Hot wallets offer ease of access to your crypto assets. Whether on your phone, desktop, or online, you can use your
        crypto assets conveniently. But given their level of security, what if you’re uncomfortable with the amount you’re
        storing in those wallets?
        <br/>
        <br/> Let’s imagine your crypto-wallet as a regular physical wallet for cash. How much cash are you willing to walk around
        with? At some point, you would store unnecessary cash with the bulk of your wealth in a bank. For crypto assets,
        you would put them in cold storage.
        <br/>
        <br/>
        <div className='sub-title-blog'>Paper Wallet</div>
        <br/> Using and storing your crypto assets has everything to do with your private and public keys. We know from our last
        article that your public key is used to send and receive transactions while your private key ties those transactions
        back to you.'
        <br/>
        <br/> A paper wallet simply prints your private and public keys with their corresponding QR codes.
        <br/>
        <br/> Paper wallets are used for a single cryptocurrency at a time since you would need to generate them separately for
        each crypto asset you own. By doing this, you can transfer the entirety of a crypto asset to a paper wallet and store
        it in a secure location.
        <br/>
        <br/>
        <div className='sub-title-blog'>Hardware Wallets</div>
        <br/> The holy grail for secure storage of your crypto assets. When it comes to versatility and security, hardware wallets
        are your ideal choice. These are devices that store your crypto assets and private keys offline.
        <br/>
        <br/> Hardware wallets can be both password and PIN protected. They also provide versatility by allowing the storage of
        multiple crypto assets. Being able to interact with your crypto offers a much more user friendly experience than
        simply printing individual crypto assets on to paper wallets.
        <br/>
        <br/> When it comes to storing crypto asset values you are uncomfortable leaving in hot storage, hardware wallets are
        the best overall solution to securing your tokens.
        <br/>
        <br/>
        <div className='sub-title-blog'>Which Crypto-Wallet Should You Use?</div>
        <br/> This will ultimately come down to personal preference but there are some things to keep in mind. It helps to think
        in terms of paper money. Cash on hand can be used easily and freely but also means that money is more susceptible
        to theft or loss. Cash kept in the bank is safer but requires you to withdraw it from your account prior to spending
        it. This is similar to the relationship between hot and cold storage methods for crypto assets.
        <br/>
        <br/> It’s best practice to only keep crypto assets in hot storage that you intend to use or will need to use quickly.
        Keeping your money on an exchange isn’t your best option for security, but it makes it easier to sell those crypto
        assets if you need to.
        <br/>
        <br/> Likewise, when it comes to values you would not be comfortable carrying in a regular cash wallet day-to-day, it
        would be in your best interest to move toward better security measures including a hardware wallet. This means if
        need to use your crypto assets, you may need to transfer them from your hardware wallet to an exchange or other platform.
        <br/>
        <br/> When it comes to choosing your crypto-wallet your assets will be a balance of long term security and short term
        usability. Use both hot and cold storage methods to balance your crypto assets appropriately and you’ll be ahead
        with managing your tokens in the wide world of crypto.
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