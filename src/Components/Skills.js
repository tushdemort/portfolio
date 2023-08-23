import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './Skills.css'
import python from './assets/python.png'
import flask from './assets/flask.png'
import fox from './assets/fox.png'
import mongo from './assets/mongo.png'
import react from './assets/react.png'
import sql from './assets/sql.png'
export class Skills extends Component {
  static propTypes = {}

  render() {
    return (
        <>
            <div id='skills'>dummy</div>
            <br/>
            <div className='heading'>Skills</div>
            <div className='wrapper'>
                <div className='parent cell1'>
                    <img className='skills-card' src={python} style={{filter:'invert(1)', scale:'0.3'}}/>
                    <div className='child'>
                        <p className='heading2'>Python</p>
                    </div>
                </div>
                <div className='parent cell2'>
                    <img className='skills-card' src={flask} style={{filter:'invert(1)', scale:'0.3'}}/>
                    <div className='child'>
                        <p className='heading2'>Flask</p>
                        </div>
                </div>
                <div className='parent cell3'>    
                    <img className='skills-card' src={fox} style={{scale:'0.3'}}/>
                    <div className='child'>
                        <p className='heading2'>Firebase</p>
                        </div>
                </div>
                <div className='parent cell4'>
                    <img className='skills-card' src={mongo} style={{scale:'0.3'}}/>
                    <div className='child'>
                        <p className='heading2'>MongoDB</p>
                        </div>
                </div>
                <div className='parent cell5'>
                    <img className='skills-card' src={react} style={{scale:'0.3'}}/>
                    <div className='child'>
                        <p className='heading2'>React</p>
                        </div>
                </div>
                <div className='parent cell6'>
                    <img className='skills-card' src={sql} style={{filter:'invert(1)', scale:'0.3'}}/>
                    <div className='child'>
                        <p className='heading2'>SQL</p>
                        </div>
                </div>
            </div>
        </>
    )
  }
}

export default Skills