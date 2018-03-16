import React, { Component } from 'react'

export default class LearnMore extends Component {
  render() {
    return (
<div>
    <div className="content">
        <div className="flex-reverse">
            <div className="column column__two-thirds">
                <div className="padding-image">
                    <img src={require( '../images/Comp_5.gif')} alt="" className="content__image" />
                </div>
            </div>
            <div className="column column__one-third">
                <h1 className="content__title">Breakthrough.</h1>
                <p className="content__paragraph">Neureal’s solution is a breakthrough because it is Limitless. The network’s architecture allows users to
                    ask Neureal about the future the same way we ask Google about the present and the past–with the same
                    confidence we have in the results of Google’s algorithms and first page. This limitless ability creates
                    not only the avoidance of bad things, but the ability to be a first-mover–true time travelers who can
                    see different possible futures, make informed decisions to affect the present through actions, and impact
                    the future one decision at a time. Whether users are companies or governments or individuals, actions
                    based on accurate predictions will have profound impacts across every industry, topic, and social good.</p>
                <h1 className="content__title">Impact.</h1>
                <p className="content__paragraph">We are giving everyone the ability to matter, to make a difference in the world on a grand scale. Users will
                    be able to predict anything they’re passionate about, from hurricane paths to the extinction of a species,
                    to climate change, to medical advances. And, of course… Bitcoin prices.</p>
            </div>
        </div>

        <div className="flex">
            <div className="column column__one-third">
                <h1 className="content__title">Decentralized.</h1>
                <p className="content__paragraph">There is no centralized system that can be more accurate–not Facebook, not Google–they cannot harness the
                    massive and raw amounts of data needed to surpass what Neureal’s architecture allows. We will always
                    be one step ahead in size and accuracy. Bitcoin itself proved the power of community, creating a distributed
                    computing platform that is 1,000,000 times faster than the largest centralized supercomputer in the world.
                </p>

                <h1 className="content__title">Timeless.</h1>
                <p className="content__paragraph">Data science continues to hit limitations. Neureal’s ability to be agnostic to the algorithms used allows
                    the system to be forever adaptable.
                </p>
            </div>
            <div className="column column__two-thirds">
                <img  src={require( '../images/Comp_2.gif')} alt="" className="content__image" />
            </div>
        </div>


        <div className="flex-reverse">
            <div className="column column__two-thirds">
                <img  src={require( '../images/Comp_4.gif')}alt="" className="content__image" />
            </div>
            <div className="column column__one-third">
                <div learn-more-flex>
                    <h1 className="content__title">Beyond AlphaGO.</h1>
                    <p className="content__paragraph">Humans are the unknown. Their patterns constantly change. The only way to account for this “human-factor”
                        is by forecasting black swans, allowing humans to foresee outcomes and shift their actions, preventing
                        the bad and capitalizing on the good.
                    </p>
                    <div className='learn-more-padding'>
                        <h1 className="content__title">Efficiency of Data.</h1>
                        <p className="content__paragraph">By giving Neureal raw data, the AI is allowed the freedom to do the right thing for itself beyond
                            the constraints of human decision-making on the front end.
                        </p>
                        <h1 className="content__title">Limitless. Without limits. Beyond today.</h1>
                        <p className="content__paragraph">Neureal gives humans the power to become limitless by predicting the future of anything.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
    )
  }
}
