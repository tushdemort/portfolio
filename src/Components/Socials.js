import PropTypes from 'prop-types'
import React, { Component } from 'react'
import github from './assets/github.png'
import ig from './assets/instagram.png'
import ln from './assets/linkedin.png'
import './Socials.css'
export class Socials extends Component {
  static propTypes = {}

  render() {
    return (
        <>
        <p className='heading' id='socials'>Socials</p>
        <br/>
        <br/>
        <br/>
      <div className='container1'>
        <p className='contact heading'>
            Ph No.: 9717289571<br/>
            EMail: tushdemort@gmail.com
        </p>
      <a href='https://github.com/tushdemort' target='_blank'><img className='social-links' src={github} alt="github" /></a>
      <a href='https://instagram.com/tushdemort'target='_blank'><img className='social-links' src={ig} alt="github" /></a>
      <a href='https://www.linkedin.com/in/tusharananddel/' target='_blank'><img className='social-links' src={ln} alt="github" /></a>
      </div>
      </>
    )
  }
}

export default Socials