import React, { Component } from 'react'
import './Counter.css'

class Counter extends Component {
  render() {
    return <div className="Counter">Done: {this.props.count}</div>
  }
}

export default Counter
