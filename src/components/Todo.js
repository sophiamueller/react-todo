import React, { Component } from 'react'
import styled from 'styled-components'

const Text = styled.span`
  &.done {
    text-decoration: line-through;
    color: hotpink;
  }
`

class Todo extends Component {
  render() {
    const { text, onToggle, done, onDelete } = this.props

    return (
      <li>
        <Text onClick={onToggle} className={done ? 'done' : ''}>
          {text}
        </Text>
        <button onClick={onDelete}>&times;</button>
      </li>
    )
  }
}

export default Todo
