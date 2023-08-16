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
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">View Project</a>
    </div>
    </div>
    </>
    )
  }
}

export default Cards