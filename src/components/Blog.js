import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SecondaryBlog from './SecondaryBlog';

export default class Blog extends Component {
  render() {
    return (
<div>
  <div className="content">
    <Link to='/what-is-neureal'>
    <div className='blog-header-container'>
      <div className='blog-column__two-thirds'>
        <div className='image-blog-container'>
          <img className='img-main-blog' src="https://image.ibb.co/h7KyS7/main_banner_compressor.jpg" alt="blog post" />
        </div>
      </div>
      <div className='blog-column__one-thirds'>
        <div className='blog-detail-container'>
          <div className='title-blog'>What is Neureal?</div>
          <div className='caption-blog'> Neureal is a project combining Blockchain and predictive AI technology to do something truly beneficial for humanity,
            rather than just trying to crack a useless hash. </div>
          <div className='creator-blog'>
            January 17, 2018
          </div>
        </div>
      </div>
    </div>
    </Link>
    <div className='blog-secondary-grid-container'>
    <Link to='/blockchain-vs-bitcoin'>
    <SecondaryBlog
    blogImage={'https://image.ibb.co/eWUqqS/Round_1_Blogs_02.png'}
    blogTitle={'Blockchain vs Bitcoin'}
    blogCaption={'It’s 2018 and it’s official: everyone knows about bitcoin.'}
    author={'Eric Nease'}
    blogDate={'February 21, 2018'}
    />
    </Link>
    <Link to='/crypto-wallet'>
    <SecondaryBlog
    blogImage={'https://image.ibb.co/gsDrVS/Round_1_Blogs_03.png'}
    blogTitle={'What is a Bitcoin Wallet Anyway'}
    blogCaption={'Crypto assets require a fundamental change in how we perceive...'}
    author={'Eric Nease'}
    blogDate={'February 28, 2018'}
    />
    </Link>
    <Link to='/crypto-community-moves-forward'>
    <SecondaryBlog
    blogImage={'https://image.ibb.co/mwjRx7/Round_1_Blogs_07.png'}
    blogTitle={'Crypto Market Moves Forward Despite FUD'}
    blogCaption={'Has the sky fallen? Has the bubble popped? Is this what...'}
    author={'Eric Nease'}
    blogDate={'March 7, 2018'}
    />
    </Link>
    <Link to='/neureal-vitalik'>
    <SecondaryBlog
    blogImage={'https://image.ibb.co/mmEJun/Round_1_04.png'}
    blogTitle={"Neureal and Vitalik's DAICO"}
    blogCaption={'Before he presented the idea publicly in January, Neureal had already...'}
    author={'Jen Greyson'}
    blogDate={'March 14, 2018'}
    />
    </Link>
    <Link to='/when-does-decentralization-make-sense'>
    <SecondaryBlog
    blogImage={'https://image.ibb.co/hGBpH7/Round_1_Blogs_04.png'}
    blogTitle={'When Does Decentralization Make Sense'}
    blogCaption={'Whether you’re interested in the wide world of crypto assets...'}
    author={'Eric Nease'}
    blogDate={'March 21, 2018'}
    />
    </Link>
    <Link to='/how-crypto-is-changing'>
    <SecondaryBlog
    blogImage={'https://image.ibb.co/kaREZn/RAISE_1_M_03_07.png'}
    blogTitle={'How crypto is changing the VC game'}
    blogCaption={'After a recent conversation on LinkedIn spurred my curiosity...'}
    author={'Jen Greyson'}
    blogDate={'March 28, 2018'}
    />
    </Link>
    <Link to='/how-to-choose-a-crypto-wallet'>
    <SecondaryBlog
    blogImage={'https://image.ibb.co/kbULPn/Round_1_Blogs_05.png'}
    blogTitle={'How to Choose a Crypto Wallet'}
    blogCaption={'Whether you’re interested in the wide world of crypto assets...'}
    author={'Eric Nease'}
    blogDate={'April 4, 2018'}
    />
    </Link>
    <Link to='/blockchain-5-years'>
    <SecondaryBlog
    blogImage={'https://image.ibb.co/f1hmUx/blockchain_5_years.png'}
    blogTitle={'Blockchain. 5 Years From Now.'}
    blogCaption={'I had an interviewer ask me where I thought Ethereum was going...'}
    author={'Jen Greyson'}
    blogDate={'April 11, 2018'}
    />
    </Link>
    {/* <Link to='/how-to-tell'>
    <SecondaryBlog
    blogImage={'https://image.ibb.co/dwofPn/Round_1_Blogs_06.png'}
    blogTitle={'How to Tell if Your AI Startup'}
    blogCaption={'In a world where no AI + Blockchain company is fully developed...'}
    author={'Eric Nease'}
    blogDate={'April 18, 2018'}
    />
    </Link>
    <Link to='/machine-mind'>
    <SecondaryBlog
    blogImage={'https://image.ibb.co/jV60Pn/Round_1_Blogs_08.png'}
    blogTitle={'The Biological Basis for a Machine Mind'}
    blogCaption={'It is a specialized cell in your nervous system responsible...'}
    author={'Eric Nease'}
    blogDate={'April 25, 2018'}
    />
    </Link>
    <Link to='/expanding-the-mind'>
    <SecondaryBlog
    blogImage={'https://image.ibb.co/jV60Pn/Round_1_Blogs_08.png'}
    blogTitle={'Expanding the mind'}
    blogCaption={'How does the human mind perceive knowledge? Being human...'}
    author={'Eric Nease'}
    blogDate={'March 28, 2018'}
    />
    </Link> */}
    </div>
  </div>
</div>
    )
  }
}
