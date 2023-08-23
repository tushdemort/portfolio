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
          <div className='cell1'><Cards name='WILP' desc='Developed a tool for WILP professors to generate, modify and store question. Further these questions are used to generate question papers for students during their Midterms and Endsems.' link='https://google.com'/></div>
          <div className='cell2'><Cards name='Senitiment Analysis' desc='An app that uses the News api to fetch the latest news articles related to a topic and runs sentiment analysis on the articles to determine the medias opinio on the topic.' link='https://github.com/tushdemort/newsanalyser'/></div>
          <div className='cell3'><Cards name='TechWeek Website' desc='Official website for TechWeek 23 at BITS Pilani, Hyderabad Campus. Links to all the events on unstop are available on this website along with a gallery of past events .' link='https://techweek-bitsh.com'/> </div>
          <div className='cell4'><Cards name='Stockr' desc='A python and streamlit app that predicts stock price and can be used to calculate gains that could have been made by investing in a particular stock on the market.' link='https://github.com/tushdemort/stockr'/></div>
          <div className='cell5'><Cards name='Aruco Detector' desc='A python script to detect arUco markers, their orientation, draw a border around them and read their IDs. Useful in building autonomous rovers and drones.' link='https://github.com/tushdemort/aruco'/></div>
        </div>
      </>
    )
  }
}

export default Projects