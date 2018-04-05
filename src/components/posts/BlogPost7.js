import React, { Component } from 'react';

export default class BlogPost7 extends Component {
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
          <img className='img-main-blog' src="https://image.ibb.co/jV60Pn/Round_1_Blogs_08.png" alt="blog post" />
        </div>
      </div>
      <div className='title-blog'>Inspiring AI: The Biological Basis for a Machine Mind</div>
      <div className='sub-title-blog'>This is a neuron:</div>
      <img className='blog-image-small' src="https://image.ibb.co/gFMr77/neuron_compressor.jpg" alt="neuron" />
      <div className='image-caption'>(https://www.evolvingsciences.com/Neuron%20.html)</div>
      <div className='caption-blog'>
        It is a specialized cell in your nervous system responsible for relaying information from one location to another. It does
        this through action potentials—small surges of electrical current that travel along the neuron.
        <br/>
        <br/> Your brain is comprised of about 86 billion neurons organized in a way that allows you to see, hear, and smell the
        world around you. It makes sense of these sensations by organizing them in a way we can interpret. Complex brains
        can use higher level processing to apply cognition for awareness, context, and decision making.
        <br/>
        <br/> These neurons form a network by connecting to one another. If you bang your knee, a single neuron might relay that
        message to another until they reach the part of your brain that interprets pain. When it comes to complex tasks like
        interpreting the world around you, connections become a little more complicated.
        <br/>
        <br/>
        <img className='blog-image-small' src="https://image.ibb.co/dbSaZn/neuron_detail_compressor.jpg" alt="neuron detail" />
        <div className='image-caption'>(https://ehumanbiofield.wikispaces.com/Neurons)</div>
        Neurons in your brain have multiple sites where other neurons can connect known as dendrites. The electrical signal is sent
        through the cell, down the long tail known as the axon, and transmitted into the dendrite of yet another cell. A
        single cell can receive one to thousands of inputs along its dendrites which culminate in an output that travels
        down the cell and delivered to more dendrites at the next stage of the signal.
        <br/>
        <br/> In your cortex—the folded fleshy outside always pictured in diagrams—these neurons are arranged in layers.
        <br/>
        <br/>
        <img className='blog-image-small' src="https://image.ibb.co/dwywPn/neuron_layers_compressor.jpg" alt="neuron layers" />
        <br/>
        <br/> Adding these layers of complexity to a simple functional unit like a neuron gives you a processor that can absorb,
        organize, and interpret data on its own. The field of neuroscience is tasked with decoding this single organ to understand
        how the brain works.
        <br/>
        <br/> Neuroscientists of the world aren’t the only ones looking at this sort of neural architecture. In recent decades,
        computer science has pushed machine learning forward into new realms. But before we delve into them, let’s look at
        how you’re able to read this article.
        <br/>
        <br/> Light hits the cells at the back of your eye called retina. That is the last time your body is exposed to the raw
        data of what you are seeing. That’s because the retina initiate a chain reaction of electrochemical signals that
        travel down your optic nerve. Light is our input.
        <br/>
        <br/> At this point, the information is simply electrical impulses. They go to the back of the brain which is responsible
        for sorting out the basic details like lines, curves, and shapes. From there it goes on to higher level processing
        that identifies what the object is and what it is doing.
        <br/>
        <br/>
        <img className='blog-image-half' src="https://image.ibb.co/i1HO4n/brain_layer_compressor.jpg" alt="brain layer" />
        <img className='blog-image-half' src="https://image.ibb.co/dbNUc7/brain_compressor.jpg" alt="brain" />
        <br/>
        <br/> This allows us to arrive at some conclusion about what we are seeing. It could be a man walking or a woman riding
        a bike or a bird chirping. This could be an output. We have taken information in the form of light and interpreted
        it to arrive at some conclusion.
        <br/>
        <br/> The bottom up processing is met by top-down ideas and concepts about what you are looking at—experiences and information
        about it that are stored in your brain. Combined, your neural pathways allow you to perceive, recognize, and identify.
        They allow you to form judgements, memories, and impressions. Your brain is able to take light as an input and create
        any number of outputs from identifying a dog to deciding whether or not to eat a spoiled piece of food.
        <br/>
        <br/> Of course this is just one example in a sea of complex things our brains are able to achieve. Things we take for
        granted. People have sought to achieve this level of learning with machines and for a long time those machines depended
        on humans to program these functions. We had to explicitly tell the system the criteria for identifying an object
        for it to be successful at the task.
        <br/>
        <br/> How does a program recognize a car? We tell it what makes a car and it compares photos or videos of cars to the
        criteria we’ve programmed. We couldn’t simply ask the program to figure out whether it saw a car or not on its own.
        <br/>
        <br/> Enter neural networks and deep learning.
        <img className='blog-image-small' src="https://image.ibb.co/gLCHUn/artificial_neuron_compressor.jpg" alt="neuron detail"
        />
        <div className='image-caption'>(http://neuralnetworksanddeeplearning.com/chap1.html)</div>
        <br/> Each artificial neuron receives information from all the inputs in the previous layer, but it doesn’t treat them
        equally. The information that neuron generates is a result of the information from prior neurons plus whatever bias
        that neuron has to the previous layer. Each neuron in this layer will then have its own weight for every neuron in
        the following layer and so on until arriving at the output.
        <br/>
        <br/> Tuning these neurons is necessary to make sure the outputs are correct. The process of adjusting the weights and
        biases that artificial neurons have toward one another is akin to your brain deciding which connections are more
        important for understanding the data in the input.
        <br/>
        <br/> So how does this system work? Let’s say you want to teach it to recognize people. Instead of programming the system
        to recognize Bill and tell him apart from Mary, you can train the system to learn on its own.
        <br/>
        <br/> We begin with pictures of Bill (input) and want to know whether it is Bill or Mary (outputs, 2). How can we tune
        all the artificial neurons in the hidden layers to spit out the correct answer? We don’t. We leave them random and
        see what conclusion the system has. Then, using some calculus, we can tell the system how far off its output was
        from the correct answer.
        <br/>
        <br/> We minimize that error by nudging the weights of all the neurons in the system to arrive at the correct answer—and
        we can build that adjustment into the system. The system establishes which connections are most important.
        <br/>
        <br/> This results in very specific pathways through the network to arrive at the right answer. We didn’t have to tell
        the system anything about Bill or Mary. Instead we simply trained it by giving it examples off which to base its
        judgement
        <br/>
        <br/> This is similar to the prototype theory in cognitive psychology whereby we can identify things based on an idealized
        prototype of that thing. By exposing an artificial neural network to many examples of a specific input, it creates
        concepts that it can apply to future examples it has never seen. Having seen 100,000 photos of birds, it might readily
        recognize everything from a sparrow to an eagle but also might lose accuracy on fringe examples like am emu or penguin.
        <br/>
        <br/> Interestingly, each layer seems to respond to higher forms of complexity. Just as we saw our visual pathways construct
        an idea of a car from light, a neural network might piece together basic lines and curves in its first layer while
        combining noses and eyes correctly in later layers. Given a picture of a dog, initial layers might only process the
        many lines and angles from the fur. Deeper in the network, those lines might piece together to create dog-like shapes.
        Later still those shapes may coalesce into dog-like representations that allow the network to arrive at the simple
        decision: is this a dog or not?
        <br/>
        <br/> Both artificial and biological neural networks function like assembly lines. They build their conclusions by parsing
        simple pieces of information into increasingly complex forms and ideas as those inputs are relayed down the assembly
        line. The product we end up with depends on our goal, but in our case it’s identification.
        <br/>
        <br/>
        <img className='blog-image-half' src="https://image.ibb.co/jrjmN7/inner_brain_compressor.jpg" alt="neuron detail" />
        <img className='blog-image-half' src="https://image.ibb.co/dxCFh7/neuron_learning_compressor.jpg" alt="neuron detail" />
        <br/> Our examination of neurons and the brain is simplistic here. Neurons account for 10% of the brains mass and supporting
        glial cells also transmit information between them. And although your brain is the hub of processing, it does not
        exist in isolation. The nervous system enervates the entire body which in turn influences the brain’s behaviour.
        Our bodies and brains together are the complete ecosystem.
        <br/>
        <br/> While great progress has been made with neural networks, refining AI and bringing it to a place that can make safe
        and sophisticated solutions for humanity’s problems is an ever-evolving pursuit. While machines can compute far beyond
        human capabilities we still reign supreme in tasks we take for granted simply because our brain was built for them.
        <br/>
        <br/> Artifical intelligence may have found its inspiration in biology, but time will tell how these processors diverge
        in their approach and converge in their application in a world destined for AI.
        <br/>
        <br/>
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
    )
  }
}
    