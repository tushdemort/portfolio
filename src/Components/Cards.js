import PropTypes from 'prop-types'
import React, { Component } from 'react'
import profile from'./profile.jpg'
import './Cards.css'

export class Cards extends Component {
  static propTypes = {}

  render() {
    return (
    <>
    <div className='card'>
      <div className="card-body">
        <h5 className="card-title">{this.props.name}</h5>
        <p className="card-text">{this.props.desc}</p>
        <a href={this.props.link} target='_blank'  className="btn btn-primary">View Project</a>
    </div>
    </div>
    </>
    )
  }
}

export default Cards