import React, { Component } from 'react'
import './Counter.css'

class Counter extends Component {
  render() {
    return <p className="Counter">Done: {this.props.count}</p>
  }
}

export default Counter
