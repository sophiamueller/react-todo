import React, { Component } from 'react'

class Input extends Component {
  render() {
    return <input placeholder="Whishlist" onKeyUp={this.props.handleKeyUp} />
  }
}

export default Input
