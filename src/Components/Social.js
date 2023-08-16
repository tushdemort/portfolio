import PropTypes from 'prop-types'
import React, { Component } from 'react'
import gh from "./assets/github.png"
import ld from "./assets/linkedin.png"
import ig from "./assets/instagram.png"
import "./Social.css"

export class Social extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <p className='heading' id='socials'>Socials</p>
        <div className='wrapper'>
        <a href='https://www.linkedin.com/in/tusharananddel/'>
            <img src={ld} alt="robo" className="robo2"/>
        </a>
        <a href='https://www.instagram.com/tushdemort'>
            <img src={ig} alt="robo" className="robo2"/>
        </a>
        <a href='https://www.github.com/tushdemort'>
        <img src={gh} alt="robo" className="robo2"/>
        </a>
        </div>
        <div style={{height:'28rem'}}></div>
      </div>
    )
  }
}

export default Social