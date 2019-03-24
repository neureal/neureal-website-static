import React, { Component } from 'react';
import TeamModal from './TeamModal';
const jenImage = require('../images/team/jen.jpg');
const wilImage = require('../images/team/wil.jpg');
const jordanImage = require('../images/team/jordan.jpg');
const kylerImage = require('../images/team/kyler.jpg');
const jamesImage = require('../images/team/james.jpg');
const brianImage = require('../images/team/brian.jpg');
const nickImage = require('../images/team/nick.jpg');
const brianSewImage = require('../images/team/brian_sewell.jpg');
const ethanImage = require('../images/team/ethan.jpg');
const jakeImage = require('../images/team/jake');
const benImage = require('../images/team/ben.jpg');
const samImage = require('../images/team/sam.jpg');
const aleksanderImage = require('../images/team/aleksander.jpg');


export default class Team extends Component {

  state={ 
    openJen: false,
    openWil: false,
    openKyler: false,
    openJames: false,
    openBrianNel: false,
    openNick: false,
    openBrianBag: false,
    openJordan: false,
    openEthan: false,
    openJake: false,
    openBen: false,
    openSam: false,
    openAleksander: false,
   }

  clickOpenJen = () => {
    this.setState({
      openJen: !this.state.openJen
    })
  }

  clickOpenWil = () => {
    this.setState({
      openWil: !this.state.openWil
    })
    console.log('hi')
  }

  clickOpenKyler = () => {
    this.setState({
      openKyler: !this.state.openKyler
    })
  }

  clickOpenJames = () => {
    this.setState({
      openJames: !this.state.openJames
    })
  }

  clickOpenBrianNel = () => {
    this.setState({
      openBrianNel: !this.state.openBrianNel
    })
  }

  clickOpenNick = () => {
    this.setState({
      openNick: !this.state.openNick
    })
  }

  clickOpenBrianBag = () => {
    this.setState({
      openBrianBag: !this.state.openBrianBag
    })
  }

  clickOpenJordan = () => {
    this.setState({
      openJordan: !this.state.openJordan
    })
  }

  clickOpenEthan = () => {
    this.setState({
      openEthan: !this.state.openEthan
    })
  }


  clickOpenJake = () => {
    this.setState({
      openJake: !this.state.openJake
    })
  }

  clickOpenBen = () => {
    this.setState({
      openBen: !this.state.openBen
    })
  }

  clickOpenSam = () => {
    this.setState({
      openSam: !this.state.openSam
    })
  }

  clickOpenAleksander = () => {
    this.setState({
      openAleksander: !this.state.openAleksander
    })
  }


  render() {
    return (
<div>

  <TeamModal 
  onClose={this.clickOpenJen} 
  clickOpen={ this.state.openJen } 
  nameModal={ 'Jen Greyson'} 
  roleModal={ 'Advisor'} 
  biographyModal={  'Prior to being named one of the Top 8 Women in Crypto, Jen managed a multi-million dollar life insurance company during a highly lucrative and chaotic run-up of the industry, as well as managing morale, forecasting, and finances during the impacts of AIG’s multi-billion dollar crash, giving her a unique comfort level of leading from within the volatility of cryptocurrency. With over two decades of experience building and maintaining entrepreneurial organisms, from startups to established partnerships in numerous industries, her involvement at the onset of new development has repeatedly generated millions to bottom line. For the last decade, she specialized in intellectual property, working intimately with both NYT bestselling clients as well as smaller first-time movers into the publishing space to create, systematize, and deploy new income streams. Clients include New York Times and USA Today bestselling thriller, mystery, and fantasy writers, as well as international speakers, business coaches, and serial entre- preneurs. Her chaos management strategies identify and implement systems to enable the structures to exist beyond her involvement, ensuring their continued success is not based on singular individuals, but as a whole. Systems are everything. Strategic decisions are everything else. Nothing works without community'} 
  imageModal={jenImage} 
  />

  <TeamModal 
  onClose={this.clickOpenWil} 
  clickOpen={ this.state.openWil } 
  nameModal={ 'Wil Bown'} 
  roleModal={ 'Founder | Chief Architect'} 
  biographyModal={  'Wil has been working as a contract software engineer for over 23 years. He almost single-handedly developed the Mozaex Media Server which did over $30 million in sales. A local Bitcoin activist, he has been mining cryptocurrencies since 2011, is the organizer of the 500+ member Utah Bitcoin Community meetup, won top prize at the Million Dollar Texas Bitcoin Conference hackathon in 2015, contributed code to main fork Bitcoin, and has been involved in several bitcoin startup projects. Wil considers himself an old school Cyberpunk and hopes to gradually merge his mind directly with machines and to help build strong artificial intelligence. As founder of Neureal, Wil is the keeper of the vision and passion of where Neureal is headed. He is the torchbearer for open source and ongoing educator, committed to enrolling people in both his vision and his uniquely expansive view of the future for artificial intelli- gence and the way humans and technology will interact and integrate in a future that is no longer very far away. The architecture for Neureal exists as a whole inside his head and it is through the coming phases of Neureal’s road map-- with the help, guidance, and stewardship of other members of the core team--that we, as a community, will be able to begin using what he’s already envisioned.'} 
  imageModal={wilImage} 
  />


  <TeamModal 
  onClose={this.clickOpenJordan} 
  clickOpen={ this.state.openJordan } 
  nameModal={ 'Jordan Miller'} 
  roleModal={ 'Founder | Architect'} 
  biographyModal={  'Creator of the maestro ai project (maestroai.com), Jordan has a background in distributed systems, machine learning, economics, phi- losophy and information theory. Jordan’s ability to maintain a 30,000-foot view allows him to quickly locate pertinent and relevant details, disseminate the information, and move projects and people forward. An autodidact, Jordan wants to know everything and thinks the easiest way to do this is to build a learning machine.'} 
  imageModal={jordanImage} 
  />
 
 <TeamModal 
  onClose={this.clickOpenKyler} 
  clickOpen={ this.state.openKyler } 
  nameModal={ 'Kyler Anderson'} 
  roleModal={ 'Community Manager'} 
  biographyModal={  'For Kyler, understanding human behavior and the dynamics of communities has been a lifelong fascination and obsession. He has studied and maintained a working knowledge of the field of applied behavior analysis psychology. Kyler was recruited by the USMC and trained in advanced electrical engineering. He later became a chief marksmanship instructor, distinguishing himself as an exem- plary leader, presenter, and educator. For three years he presented on a daily basis to hundreds of individuals from wildly di ering edu- cational, intellectual, and socioeconomic backgrounds, including Generals and foreign dignitaries. His intuitive communication style ensures each connection receives the same understanding, committed to following up until the participant has a full grasp of the mate- rial. Kyler was the lead producer for the worlds first terrestrial radio program about cryptocurrency, has been active in the cryptocurrency community since 2012, and has an extensive and successful history in deal flow, team building and sales. Kyler is passionate about free- ing all humanity, and he firmly believes Blockchain technology, decentralization, and servant leadership are all necessary components of that future.'} 
  imageModal={kylerImage} 
  />

  <TeamModal 
  onClose={this.clickOpenJames} 
  clickOpen={ this.state.openJames } 
  nameModal={ 'James Alton'} 
  roleModal={ 'Developer | Dev Ops, Ethereum'} 
  biographyModal={  'With over 17 years as a so ware developer heavily involved with information technology, his diversified experience includes applica- tions in hardware and so ware solutions for the U.S. Federal Government and banking industries. Programming language expert in Solidity, Javascript and Python. His intense research in blockchain technology started in 2011 and he was an early bitcoin miner. James has also contributed to many other projects including ones involving artificial intelligence. James and Wil collaborate and develop smart contracts and code deployed within the Neureal so ware. Additionally, James is pas- sionate about weather prediction, having invested heavily in sensors being deployed across remote locations to further increase the accuracy of the ability for the Neureal sotware’s predictive ensembles. His work on Neureal’s MVP for hurricane modeling helped guide the decision to add Barbuda as a corporate location and setting for Neureal’s first digital/physical humanitarian e ort.'} 
  imageModal={jamesImage} 
  />

  <TeamModal 
  onClose={this.clickOpenBrianNel} 
  clickOpen={ this.state.openBrianNel } 
  nameModal={ 'Brian Nelson'} 
  roleModal={ 'Relationships | Regulation'} 
  biographyModal={  'Brian Nelson is the founder of ExTech Ventures, an organization focused on helping exponential technology entrepreneurs launch world changing products and services. Before launching ExTech Ventures, Brian co-founded Sig3, an automated co-signer security product for multi-sig bitcoin wallets. As a recognized figure in the Bitcoin and blockchain technology ecosystem, he has consulted many of the top digital currency companies, spoken at numerous industry events and was one of 40 industry insiders to attend the Blockchain Summit with Richard Branson on Necker Island. Brian has recently traveled to London and Kiev to represent Neureal at cryptocurrency events, building relationships and expanding the community for Neureal. He has made numerous connections and is working closely with the sales and relationship team to hando  these connections in a way to best expand Neureal’s community.'} 
  imageModal={brianImage} 
  />

  <TeamModal 
  onClose={this.clickOpenNick} 
  clickOpen={ this.state.openNick } 
  nameModal={ 'Nick Baguley'} 
  roleModal={ 'Data Science | Contacts, Strategy'} 
  biographyModal={  'Nick Baguley is a well-known Community Leader in the technology space in the West. His connections in Data Science and Big Data spread around the world. As one of the earliest co-founders of a HUG (Hadoop User’s Group) in the United States and as an entrepre- neur, Nick has been able to influence and help create the rising wave of Big Data and Analytics in Utah. He has been heavily involved in the Big Data Hubs and the National Data Science Organizers (NDSO) group from the White House. Through Big Data Utah and Utah Geek Events, he has created and co-organized many large conferences and competitions. Nick founded Evolve STEAM, a training entity focused on Data Science, AI and Data Engineering. Nick co-founded Data Scrubs, a Data Science company that is creating a Data pipeline product with a near-real time serverless architec- ture for the finance industry and other decisioning functions. Nick co-founded Crossfold.tech, a recruiting company focused on the Data Science, Data Engineering and roles in the algorithmic economy. Nick has acted as an advisor to Universities, Non-Profits, Corpo- rations, Startups, and Individuals for years. This has allowed Nick to impact curriculum, strategic directions for companies, hiring deci- sions, career advancements and to build communities.'} 
  imageModal={nickImage} 
  />

  <TeamModal 
  onClose={this.clickOpenBrianBag} 
  clickOpen={ this.state.openBrianBag } 
  nameModal={ 'Brian Sewell'} 
  roleModal={ 'Education'} 
  biographyModal={  'Brian Sewell is Founder and CEO of The American Bitcoin Academy, the thought leader in cryptocurrency education. Mr. Sewell is a serial entrepreneur who has owned several companies in the technology, energy and manufacturing industries. Mr. Sewell is also a former executive with World Savings & Loan, a Fortune 500 company that was purchased by Wells Fargo (NYSE: WFC). His passion for entrepreneurship and learning from the best leaders in the world also led him to host of the internationally acclaimed entrepreneurial radio broadcast, “The Brian Sewell Show.” He has previously managed more than $1.1 Billion in assets and is recognized for his fiscal, strategic, and operational vision and leadership. Mr. Sewell received his education from Dixie University, Johns Hopkins University and Stanford.'}
   imageModal={brianSewImage} 
  />

  <TeamModal 
  onClose={this.clickOpenEthan} 
  clickOpen={ this.state.openEthan } 
  nameModal={ 'Ethan Erkiletian'} 
  roleModal={ 'Blockchain Educator | Advisor'} 
  biographyModal={  "Ethan started out in the crypto space in 2012 when Bitcoin luminaries and economists at the time began educating him in regard to the potential of blockchain technology. Primarily focussed on the currency and money value proposition in Bitcoin, Ethan drove discussion on Bitcoin and blockchain tech amongst economists, technologists, industry leaders and entrepreneurs both as a method of learning more about the technology, and as a way to drive blockchain tech adoption among members of his audience and beyond. Ethan has since become an investor in cryptocurrency projects and has performed freelance consulting to major and minor concerns alike in respect to high level blockchain concepts."} 
  imageModal={ethanImage} 
  />

  <TeamModal 
  onClose={this.clickOpenJake} 
  clickOpen={ this.state.openJake } 
  nameModal={ 'Jake Wiser'} 
  roleModal={ 'Senior Strategic Planner at CureCoin'} 
  biographyModal={  "A futurist with a knack for seeing the big picture, I have found my niche in Crypto.  I have been involved in all aspects of the Crypto world since 2011 and spend more time examining charts and live order books than most people do at their jobs.  In my years of researching Bitcoin, Altcoins, and the Blockchain I have built a network of over 13,000 like minded individuals.  This access has given me the ability to attend developer meetings for a wide variety of Altcoins.  I also serve as the Senior Strategic Planner for CureCoin after joining their core team in 2013 as well as an adviser to a couple of Crypto based startup companies.  Crypto has been very kind to me and through it I was able to remodel my home here in beautiful Utah.  I bring to the team an unprecedented network of news and information about Crypto along with my long time experience in various exchanges and markets.  I have a desire to share what I've learned so others may benefit just as I have."} 
  imageModal={jakeImage} 
  />

  <TeamModal 
  onClose={this.clickOpenBen} 
  clickOpen={ this.state.openBen } 
  nameModal={ 'Ben Taylor'} 
  roleModal={ 'Data Science'} 
  biographyModal={  "Ben Taylor has over 13 years of machine learning experience. He has worked for 5 years in the semiconductor industry for Intel and Micron in photolithography, process control, and yield prediction. He has also worked as a Wall Street “quant” building sentiment stock models for a hedge fund trading the S&P 1500 on the news content. During that time Ben helped build a 600 GPU core computing cluster from the ground up that he used to backtest up to 10M trading scenarios per day. Ben left finance and semiconductor to work for a new HR start-up called HireVue in 2013 and lead their machine learning efforts around digital interviewing. His greatest accomplishment has been developing the features and methods which have allowed short unstructured video recorded interviews to see r-values in the 0.3-0.4 range in the HireVue insights product. He has a M.S. in chemical engineering from the University of Utah where he is currently finishing his Ph.D., also in chemical engineering."} 
  imageModal={benImage} 
  />

  <TeamModal 
  onClose={this.clickOpenSam} 
  clickOpen={ this.state.openSam } 
  nameModal={ 'Samuel M. Smith, PhD'} 
  roleModal={ 'AI Expert | Researcher | Developer'} 
  biographyModal={  "Proven researcher in artificial intelligence, automated reasoning, and intelligent control. My greatest strength is a comprehensivist approach to intelligent systems design. I was a pioneer in the development of reinforcement learning algorithms for optimization. Early in my career I was responsible for the multi-disciplinary design of autonomous underwater vehicle systems. Thus I learned to see systems holistically. The more complex the problem, the greater my relative ability to solve it. I am also an avid disciple of Lean Startup methodologies with extensive experience running businesses as an entrepreneur and intrapreneur. Inside the university I supervised 20 engineers and a dozen graduate students and an annual budget of over $ 2 million. I have founded two different companies. My passion is finding solutions that benefit from computational intelligence. I have also been actively involved in open source software development. I am the originator of Ioflo, an open source flow based programming framework. I am the architect of OpenReputation.net, a blockchain based reputation system. I am also the designer and primary developer of RAET (Reliable Asynchronous Event Transport) protocol which are at the core of the new SaltStack. I was also the chair of the CEA working group on the ANSI/EIA 852.1 network protocol standard and a major contributor to both the ANSI/EIA 852 and 709.x protocols. I have over 25 years experience in a variety of disciplines including computational intelligence, machine learning, network automation, autonomic systems, cloud based computing, intelligent control, embedded systems design, autonomous vehicles and blockchain technology. I have over 120 publications in the fields of intelligent control, survivable network automation, autonomous systems, simulation, computational search, and expert systems, including seven book chapters, 20 journal papers, and 100 refereed conference papers."} 
  imageModal={samImage} 
  />

  <TeamModal 
  onClose={this.clickOpenAleksander} 
  clickOpen={ this.state.openAleksander } 
  nameModal={ 'Aleksander Sobolev'} 
  roleModal={ 'Software Engineer'} 
  biographyModal={  "Detail-oriented software engineer with 6+ years' success devising innovative and tailored solutions to meet ever-changing business requirements within diverse industries. Advanced skill with leading-edge programming tools complemented by proven ability to assimilate and rapidly utilize emerging technologies. Aleksander is passionate by blockchain and artificial intelligence projects. He believes that Neureal is going to be a tech revolution, it will open a lot of new possibilities in the AI world."} 
  imageModal={aleksanderImage} 
  />




  <div className="content-team">
    <div className="column column__title">
      <h2 className='team-title'>
        Meet the Core Team & Advisors
      </h2>
    </div>
    <div className="column column__full">
      <div className='flex-team'>

        <div className='team-box' onClick={ this.clickOpenWil } >
          <div className='team-box-container'>
            <div className='team-image-container'>
              <img className='team-image' src={require( '../images/team/wil.jpg')} alt="team" />
            </div>
            <div className='name-title-container'>
              <div className='team-name'>Wil Bown</div>
              <div className='team-role'>Founder | Chief Architect</div>
            </div>

            <div className='biography'>25+ years software engineer. 2015 Million Dollar Texas Bitcoin Conference hackathon winner. Coding contributor to
              main fork Bitcoin. Crypto miner since 2012. Experience developing multi-million dollar software.</div>
          </div>

          <div className='team-icon-container'>
            <a className='lk ion-social-linkedin' href="https://www.linkedin.com/in/wilbown/" target="_blank"></a>
          </div>

        </div>

        <div className='team-box' onClick={ this.clickOpenJen } >
          <div className='team-box-container' type="button" value="Show Modal">
            <div className='team-image-container'>
              <img className='team-image' src={require( '../images/team/jen.jpg')} alt="team" />
            </div>
            <div className='name-title-container'>
              <div className='team-name'>Jen Greyson</div>
              <div className='team-role'>Advisor</div>
            </div>

            <div className='biography'>
              20+ years executive-level. Multi-million dollar leadership. IP Specialist.</div>

          </div>

          <div className='team-icon-container'>
            <a className='lk ion-social-linkedin' href="https://www.linkedin.com/in/jengreyson/" target="_blank" ></a>
          </div>

        </div>

        <div className='team-box' onClick={ this.clickOpenJake } >
        <div className='team-box-container'>
          <div className='team-image-container'>
            <img className='team-image' src={require( '../images/team/jake')} alt="team" />
          </div>
          <div className='name-title-container'>
            <div className='team-name'>Jake Wiser</div>
            <div className='team-role'>Senior Strategic Planner at CureCoin</div>
          </div>

          <div className='biography'>Early adopter. Connector. Strategist. Heavy involvement in crypto projects founded in social and scientific good. Front-line educator.</div>
        </div>

        <div className='team-icon-container'>
          <a className='lk ion-social-linkedin' href="https://www.linkedin.com/in/jakewiser/" target="_blank"></a>
        </div>

        </div>

{/* 
        <div className='team-box' onClick={ this.clickOpenJordan } >
          <div className='team-box-container'>
            <div className='team-image-container'>
              <img className='team-image' src={require( '../images/team/jordan.jpg')} alt="team" />
            </div>
            <div className='name-title-container'>
              <div className='team-name'>Jordan Miller</div>
              <div className='team-role'>Founder | Architect</div>
            </div>

            <div className='biography'>Creator of the maestro ai project (maestroai.com), Jordan has a background in distributed systems, machine learning,
              economics, phi- losophy and information theory.</div>
          </div>

          <div className='team-icon-container'>
            <a className='lk ion-social-linkedin' href="https://www.linkedin.com/in/jordan-miller-636724b/" target="_blank"></a>
          </div>

        </div>
 
        <div className='team-box' onClick={ this.clickOpenKyler } >
          <div className='team-box-container'>
            <div className='team-image-container'>
              <img className='team-image' src={require( '../images/team/kyler.jpg')} alt="team" />
            </div>
            <div className='name-title-container'>
              <div className='team-name'>Kyler Anderson</div>
              <div className='team-role'>Community Manager</div>
            </div>

            <div className='biography'>Expert connector focused in applied behavior analysis psychology. Marine. Miner. Engineer. Educator. Deal flow.
              Producer of the first live crypto radio show.</div>
          </div>

          <div className='team-icon-container'>
            <a className='lk ion-social-linkedin' href="https://www.linkedin.com/in/kyleranderson/" target="_blank"> </a>
          </div>

        </div>
*/}

        <div className='team-box' onClick={ this.clickOpenJames } >
          <div className='team-box-container'>
            <div className='team-image-container'>
              <img className='team-image' src={require( '../images/team/james.jpg')} alt="team" />
            </div>
            <div className='name-title-container'>
              <div className='team-name'>James Alton</div>
              <div className='team-role'>Developer | Dev Ops, Ethereum</div>
            </div>

            <div className='biography'>17+ years software development. Wrote the first completed Ethereum contract. Bitcoin miner since 2011. Federal
              Government and Banking software solutions.</div>
          </div>

          <div className='team-icon-container'>
            <a className='lk ion-social-linkedin' href="https://www.linkedin.com/in/jamesalton" target="_blank"></a>
          </div>

        </div>

        <div className='team-box' onClick={ this.clickOpenAleksander } >
          <div className='team-box-container'>
            <div className='team-image-container'>
              <img className='team-image' src={require( '../images/team/aleksander.jpg')} alt="team" />
            </div>
            <div className='name-title-container'>
              <div className='team-name'>Aleksander Sobolev</div>
              <div className='team-role'>Software Engineer</div>
            </div>

            <div className='biography'>6+ years software developer. Team Lead at Mad Devs. Passionated by blockchain and artificial intelligence projects.</div>
          </div>

          <div className='team-icon-container'>
            <a className='lk ion-social-linkedin' href="https://www.linkedin.com/in/s0b0lev" target="_blank"></a>
          </div>

        </div>

        <div className='team-box' onClick={ this.clickOpenBrianNel } >
          <div className='team-box-container'>
            <div className='team-image-container'>
              <img className='team-image' src={require( '../images/team/brian.jpg')} alt="team" />
            </div>
            <div className='name-title-container'>
              <div className='team-name'>Brian Nelson</div>
              <div className='team-role'>Relationships | Regulation</div>
            </div>

            <div className='biography'>Token sale consultant. Bitcoin and Blockchain Expert. International speaker.</div>
          </div>

          <div className='team-icon-container'>
            <a className='lk ion-social-linkedin' href="https://www.linkedin.com/in/briannelson36/" target="_blank"></a>
          </div>
        </div>

        <div className='team-box' onClick={ this.clickOpenEthan } >
          <div className='team-box-container'>
            <div className='team-image-container'>
              <img className='team-image' src={require( '../images/team/ethan.jpg')} alt="team" />
            </div>
            <div className='name-title-container'>
              <div className='team-name'>Ethan Erkiletian</div>
              <div className='team-role'>Blockchain Educator | Advisor</div>
            </div>

            <div className='biography'>Former radio talk show host, blockchain educator and advisor.</div>
          </div>

          <div className='team-icon-container'>
            <a className='lk ion-social-linkedin' href="https://www.linkedin.com/in/ethan-erkiletian-6674a275/" target="_blank"></a>
          </div>

        </div>

        <div className='team-box' onClick={ this.clickOpenBrianBag } >
          <div className='team-box-container'>
            <div className='team-image-container'>
              <img className='team-image' src={require( '../images/team/brian_sewell.jpg')} alt="team" />
            </div>
            <div className='name-title-container'>
              <div className='team-name'>Brian Sewell</div>
              <div className='team-role'>Education</div>
            </div>

            <div className='biography'>Brian Sewell is Founder and CEO of The American Bitcoin Academy, the thought leader in cryptocurrency education.
              Mr. Sewell is a serial entrepreneur who has owned several companies in the technology, energy and manufacturing
              industries.
            </div>
          </div>

          <div className='team-icon-container'>
            <a className='lk ion-social-linkedin' href="https://www.linkedin.com/in/briansewell2/" target="_blank"></a>
          </div>

        </div>

        <div className='team-box' onClick={ this.clickOpenNick } >
          <div className='team-box-container'>
            <div className='team-image-container'>
              <img className='team-image' src={require( '../images/team/nick.jpg')} alt="team" />
            </div>
            <div className='name-title-container'>
              <div className='team-name'>Nick Baguley</div>
              <div className='team-role'>Data Science | Contacts, Strategy</div>
            </div>

            <div className='biography'>Creator of a near-real time serverless architecture for the finance industry.</div>
          </div>

          <div className='team-icon-container'>
            <a className='lk ion-social-linkedin' href="https://www.linkedin.com/in/nickbaguley/" target="_blank"></a>
          </div>

        </div>

        <div className='team-box' onClick={ this.clickOpenBen } >
          <div className='team-box-container'>
            <div className='team-image-container'>
              <img className='team-image' src={require( '../images/team/ben.jpg')} alt="team" />
            </div>
            <div className='name-title-container'>
              <div className='team-name'>Ben Taylor</div>
              <div className='team-role'>Data Science</div>
            </div>

            <div className='biography'>Passionate about machine learning. Life's mission is to further the boundaries of what is possible with data science.</div>
          </div>

          <div className='team-icon-container'>
            <a className='lk ion-social-linkedin' href="https://www.linkedin.com/in/bentaylordata/" target="_blank"></a>
          </div>

        </div>
        
        <div className='team-box' onClick={ this.clickOpenSam } >
          <div className='team-box-container'>
            <div className='team-image-container'>
              <img className='team-image' src={require( '../images/team/sam.jpg')} alt="team" />
            </div>
            <div className='name-title-container'>
              <div className='team-name'>Samuel M. Smith, PhD</div>
              <div className='team-role'>AI Expert | Researcher | Developer</div>
            </div>

            <div className='biography'>Comprehensivist approach to intelligent systems design. Author and Expert in Artificial Intelligence and Machine Learning for 25+ years.
            Pioneer of reinforcement learning algorithms for optimization. Architect of several projects and protocols, including OpenReputation.net, Sovrin.org, Ioflo and RAET.</div>
          </div>

          <div className='team-icon-container'>
            <a className='lk ion-social-linkedin' href="https://www.linkedin.com/in/samuel-m-smith-phd-4652751/" target="_blank"></a>
          </div>

        </div>

      </div>
    </div>
  </div>
</div>
    )
  }
}
