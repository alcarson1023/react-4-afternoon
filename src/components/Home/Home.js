import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div className="box">
        <Link to="/classlist/MATH1010"><button className='btn'>
          <p>Math 1010</p>
        </button></Link>
        <Link to="/classlist/ENG2010"><button className='btn'>
          <p>English 2010</p>
        </button></Link>
        <Link to="/classlist/BIO2020"><button className='btn'>
          <p>Biology 2020</p>
        </button></Link>
      </div>
    )
  }
}
