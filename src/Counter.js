import React, { Component } from 'react'

class Counter extends Component {
  render() {
    return <p className="Counter">Done: {this.props.count}</p>
  }
}

export default Counter
