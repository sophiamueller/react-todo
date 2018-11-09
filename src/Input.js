import React, { Component } from 'react'

class Input extends Component {
  render() {
    return (
      <input
        type="text"
        placeholder="Whishlist"
        onKeyUp={event => {
          this.props.keyupfunction(event)
        }}
      />
    )
  }
}

export default Input
