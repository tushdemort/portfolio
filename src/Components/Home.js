import PropTypes from 'prop-types'
import React, { Component } from 'react'
import profile_pic from './assets/profile.png'
import './Home.css'
export class Home extends Component {
  static propTypes = {}

  render() {
    return (
      <>
      <div className="main" id='home'>
        <h1 className='tushar'>Tushar</h1>
        <div className="shape">
        <img src={profile_pic} alt="profile_pic" className="profile_pic"/>
        </div>
        <h1 className='anand'>Anand</h1>
      </div>
      </>
    )
  }
}

export default Home