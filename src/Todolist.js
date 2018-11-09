import React, { Component } from 'react'
import './App.css'

class Todolist extends Component {
  render() {
    return <li>{this.props.text}</li>
  }
}

export default Todolist
