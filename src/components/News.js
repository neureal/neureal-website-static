import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NewsPost from './NewsPost';
export default class News extends Component {
  render() {
    return (
<div className="content">
  <div className="podcast-news-flex">
    <div className='news-column'>
      <h2 className='news-header'>News</h2>
      <NewsPost 
      newsLink={"https://medium.com/@Francesco_AI/the-convergence-of-ai-and-blockchain-whats-the-deal-60c618e3accc"}
      newsImage={"https://cdn-images-1.medium.com/max/2000/1*xJ9uihFO6wBW5RfyEVbuEQ.jpeg"}
      newsTitle={"The convergence of AI and Blockchain: what’s the deal?"}
      newsCaption={"It is undeniable that AI and blockchain are two of the major technologies that are catalyzing the pace of innovation and introducing radical shifts in every industry. Each technology has its"}
      />
      <NewsPost 
      newsLink={"https://cointelegraph.com/news/neureal-bringing-artificial-intelligence-to-the-people?utm_content=bufferae0b9&utm_medium=social&utm_source=facebook.com&utm_campaign=buffer"}
      newsImage={"https://cointelegraph.com/images/725_Ly9jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy9kM2Q3YzgzNzIxZjdmODNiMDMxOTNlZWI2Y2JjMWUzMS5wbmc=.jpg"}
      newsTitle={"Иeureal: Bringing Artificial Intelligence to the People"}
      newsCaption={"Иeureal is the first decentralized open-source protocol designed to produce a distributed artificial intelligence (AI) architecture that is incentivized, maintained and housed"}
      />
      <NewsPost 
      newsLink={"https://www.newgenapps.com/blog/future-of-ico-impact-of-initial-coin-offering"}
      newsImage={"https://www.newgenapps.com/hs-fs/hubfs/bitcoin.jpg?width=1196&height=598&name=bitcoin.jpg"}
      newsTitle={"11 Experts on the Future of ICO & its Impact on Financial Markets"}
      newsCaption={"ICO i.e. Initial Coin Offering is the new wave of fundraising where ideators ditch the complete hassle of the lengthy funding process and raise capital via blockchain technology"}
      />
      <NewsPost 
      newsLink={"https://medium.com/@chain_explainer/blockchain-insider-jen-greyson-2610af01c709"}
      newsImage={"https://cdn-images-1.medium.com/max/1600/1*pYXvf8puA9rCQunqjBJlWw.jpeg"}
      newsTitle={"Blockchain Insider: Jen Greyson"}
      newsCaption={"Recently named one of the Top 8 Women in Crypto, Jen Greyson of the Neureal Network and CEO of Powered by Neureal brings decades of executive leadership to the blockchain/crypto"}
      />
      {/* <NewsPost 
      newsLink={"https://medium.com/@JenGreyson/blockchain-5-years-from-now-cda989c3048b"}
      newsImage={"https://image.ibb.co/k2YHTS/neureal_background_final.jpg"}
      newsTitle={"Blockchain. 5 Years From Now."}
      newsCaption={"I had an interviewer ask me where I thought Ethereum was going to be in 5 years. Five years. That’s a lifetime in blockchain. Look what we’ve seen in the last five MONTHS"}
      /> */}
      <NewsPost 
      newsLink={"http://usaweekly.com/2018/01/interview-with-jen-greyson-ceo-at-neureal/"}
      newsImage={"https://www.strongholdcybersecurity.com/wp-content/uploads/2018/01/usa-weekly.jpg"}
      newsTitle={"Interview with Jen Greyson, CEO at Neureal"}
      newsCaption={"Starting a business is a big achievement for many entrepreneurs, but maintaining one is the larger challenge. There are many standard challenges that face every business whether they"}
      />
      {/* <NewsPost 
      newsLink={"https://medium.com/@JenGreyson/neureal-and-vitaliks-daico-962e8bfc6391"}
      newsImage={"https://image.ibb.co/bsH0En/network.jpg"}
      newsTitle={"Neureal and Vitalik’s DAICO"}
      newsCaption={"There’s been a lot of discussion about Vitalik Buterin’s DAICO concept"}
      /> */}
      {/* <NewsPost 
      newsLink={"https://medium.com/@JenGreyson/neureal-and-vitaliks-daico-962e8bfc6391"}
      newsImage={"https://image.ibb.co/dS0sS7/crypto.jpg"}
      newsTitle={"How crypto is changing the VC game."}
      newsCaption={"After a recent conversation on LinkedIn spurred my curiosity, I went looking at how the current spike of ETH would look for the ICOs of 2017"}
      /> */}

    </div>

    <div className='podcast-column'>

      <h2 className='podcast-header'>Podcasts</h2>

      <div className='podcast-container'>
        <div className='podcast-post'>
          <a href='https://vimeo.com/227450398' target="_blank">
            <div className='news-detail-container'>
              <div className='news-container-padding'>
                <div className='podcast-author'>Ernest Hancock</div>
                <div className='podcast-detail-flex'>
                  <a className='headphone ion-headphone' />
                  <div className='podcast-title'>Hour 3</div>
                </div>
                <div className='learn-more-container'>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className='podcast-container'>
        <div className='podcast-post'>
          <a href='https://l.facebook.com/l.php?u=https%3A%2F%2Fbuff.ly%2F2DtDQym&h=ATPm5b78akZ7GXRdgF_PLrTXA6lbbW1wWlye2KSmX4OMv46h2jlSD9AuMAsn-Fd4WQGijhFFKjvwR-rWzkIsDM-vBluNkK-UGNnRnHwwQjjByLf4hmSJMS5MMEpgCBopvmWcWFecoLyhPpZyKM-_HWcAsN6f5c_0WTi0k9fy0-uEiTf5cIoo4aGWwyKbQtqsPVpBwvUUVA11JnR9olQ7l8cQ2sagq8dAUkSYVSsOQCyZHm0VBembhAKzZAReuBlIqqtfKYItIJ5ivNWlpUoouucPHGfeOcNMHSeLsgE' target="_blank">
            <div className='news-detail-container'>
              <div className='news-container-padding'>
                <div className='podcast-author'>Brandon Reese & Daniel Blum</div>
                <div className='podcast-detail-flex'>
                  <a className='headphone ion-headphone' />
                  <div className='podcast-title'>On The Bus Podcast</div>
                </div>
                <div className='learn-more-container'>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className='podcast-container'>
        <div className='podcast-post'>
          <a href='http://alwaysthejourney.com/2017/12/08/always-the-journey-podcast-episode-no-2/' target="_blank">
            <div className='news-detail-container'>
              <div className='news-container-padding'>
                <div className='podcast-author'>Jason Woodland</div>
                <div className='podcast-detail-flex'>
                  <a className='headphone ion-headphone' />
                  <div className='podcast-title'>Always the Journey Podcast Episode No. 2</div>
                </div>
                <div className='learn-more-container'>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className='podcast-container'>
        <div className='podcast-post'>
          <a href='http://freecitiespodcast.libsyn.com/decentral-hub-and-d10e-recap' target="_blank">
            <div className='news-detail-container'>
              <div className='news-container-padding'>
                <div className='podcast-author'>Anthoney</div>
                <div className='podcast-detail-flex'>
                  <a className='headphone ion-headphone' />
                  <div className='podcast-title'>DeCentral Hub and D10e ReCap</div>
                </div>
                <div className='learn-more-container'>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className='podcast-container'>
        <div className='podcast-post'>
          <a href='https://www.youtube.com/watch?v=tZ2XKUoNtyc' target="_blank">
            <div className='news-detail-container'>
              <div className='news-container-padding'>
                <div className='podcast-author'>Future Tech Podcast</div>
                <div className='podcast-detail-flex'>
                  <a className='headphone ion-headphone' />
                  <div className='podcast-title'>Neureal Open-Source, Peer-to-Peer Pr</div>
                </div>
                <div className='learn-more-container'>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

    </div>



  </div>
  {/* <div className='video-column'>
  <h2 className='news-header'>Media</h2>

  <div className="flex-video-grid">
    <div className='media-container'>
      <video className='video-neureal' controls>
        <source src="https://cdn.biteable.com/3b/a9/5858609/4937775_3ba9fb46dab22093a314d809d3d30eaa5ca22956.mp4" poster="https://cdn.biteable.com/3b/a9/5858609/4937775_3ba9fb46dab22093a314d809d3d30eaa5ca22956-poster-large.jpg" id="vjs_video_3_html5_api" type="video/mp4" /> Your browser does not support the video tag.
      </video>
    </div>

    <div className='media-container'>
      <video className='video-neureal' controls>
        <source src="https://www.youtube.com/watch?v=pmpJKYL_nSk" type="video/mp4" /> Your browser does not support the video tag.
      </video>
    </div>

    <div className='media-container'>
      <video className='video-neureal' controls>
        <source src="https://biteable.com/watch/limitless_long-1691250/3ba9fb46dab22093a314d809d3d30eaa5ca22956" type="video/mp4" /> Your browser does not support the video tag.
      </video>
    </div>
  </div>
  </div> */}
</div>
    )
  }
}
