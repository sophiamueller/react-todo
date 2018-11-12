import React, { Component } from 'react'

class Todo extends Component {
  render() {
    const { text, onClick, isDone, onDelete } = this.props

    return (
      <li>
        <span onClick={onClick} className={isDone ? 'done' : ''}>
          {text}
        </span>
        <button onClick={onDelete}>&times;</button>
      </li>
    )
  }
}

export default Todo
