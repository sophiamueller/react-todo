import React, { Component } from 'react'
import './App.css'

class Todolist extends Component {
  render() {
    const { text, click, isDone } = this.props
    return (
      <li onClick={click} className={isDone ? 'done' : ''}>
        {text}
      </li>
    )
  }
}

export default Todolist
