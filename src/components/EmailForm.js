import React, { Component } from 'react'

export default class EmailForm extends Component {
state = {
  emailValue: '',
  fNameValue: '',
  lNameValue: '',
}

  render() {

    return (
<div className='email-form-flex'>
  <form action="https://sendy.neureal.world/subscribe" method="POST" accept-charset="utf-8">
    <div className='join'>Join our community</div>

    <label htmlFor='email'>
      <input className='subscribe-input' placeholder="Email" type="email" name="email" id="email" autoCapitalize="off" autoCorrect="off" />
    </label>
    <label htmlFor='name'>
      <input className='subscribe-input' placeholder="Full Name" type="text" name="name" id="name" />
    </label>

    <div style="display:none;">
    <label for="hp">HP</label><br/>
    <input type="text" name="hp" id="hp"/>
    </div>

    <input type="hidden" name="list" value="w892tkpPCExvO5iMBR13vBCQ"/>
    <input type="hidden" name="subform" value="yes"/>
    
    <div className='subscribe-button'>
      <input className='subscribe-text' type="submit" value="Subscribe Now" name="submit" id="submit" className="button" />
    </div>
  </form>
  
</div>
) } }
