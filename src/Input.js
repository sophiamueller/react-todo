import React, { Component } from 'react'

class Input extends Component {
  onKeyUp = event => {
    if (event.key === 'Enter') {
      const input = event.target
      this.props.handleKeyUp(input.value)
    }
  }

  render() {
    return <input placeholder="Whishlist" onKeyUp={this.onKeyUp} />
  }
}

export default Input
