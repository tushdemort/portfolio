import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './About.css'
export class About extends Component {
  static propTypes = {}

  render() {
    return (
      <>
      <section id='about' className='about-section'>
      <div className='useless'>&nbsp;</div>
      <p className='heading'>About</p>
      <div className='container about'>
      <p>I'm a dedicated second-year student at BITS Pilani, Hyderabad, where I'm pursuing Economics and Computer Science. I have a fervent passion for Machine Learning and Deep Learning and intend to pursue research in these areas. I also have some experience with web-dev</p>
      </div>
      </section>
      </>
    )
  }
}

export default About