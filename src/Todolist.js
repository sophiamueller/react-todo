import React, { Component } from 'react'
import './App.css'

class Todolist extends Component {
  render() {
    const { text, onClick, isDone, onDelete } = this.props

    return (
      <li>
        <span onClick={onClick} className={isDone ? 'done' : ''}>
          {text}
          <checkbox type="checkbox" className="Checkbox" />
        </span>
        <button onClick={onDelete}>&times;</button>
      </li>
    )
  }
}

export default Todolist
