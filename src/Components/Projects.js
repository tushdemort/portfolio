import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './Projects.css';
import Cards from './Cards';
export class Projects extends Component {
  static propTypes = {}

  render() {
    return (
      <>
        <div id='projects'>dummy</div>
        <br/>
        <div className='heading' >Projects</div>
        <div class="wrapper">
          <div><Cards name='WILP'/></div>
          <div><Cards name='Senitiment Analysis'/></div>
          <div><Cards name='TechWeek Website'/></div>
          <div><Cards name='Stockr'/></div>
          <div><Cards name='Portfolio'/></div>
          <div><Cards name='Aruco Detector'/></div>
        </div>
      </>
    )
  }
}

export default Projects