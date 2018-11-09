import React, { Component } from 'react'
import Todolist from './Todolist'
import Input from './Input'
import './App.css'

class App extends Component {
  state = {
    todos: [
      { text: 'Geschenk1', done: true },
      { text: 'Geschenk2', done: false },
      { text: 'Geschenk3', done: false }
    ]
  }

  addTodoArray = event => {
    if (event.key === 'Enter') {
      const newEntry = [
        { text: event.target.value, done: false },
        ...this.state.todos
      ]
      this.setState({
        todos: newEntry
      })
      event.target.value = ''
    }
  }

  toggleDone = index => {
    const { todos } = this.state
    const newTodos = [
      ...todos.slice(0, index),
      { ...todos[index], done: !todos[index].done },
      ...todos.slice(index + 1)
    ]

    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <div className="App">
        <Input keyupfunction={this.addTodoArray} />
        <div>
          {this.state.todos.map((todo, index) => (
            <Todolist
              key={index}
              isDone={todo.done}
              text={todo.text}
              click={() => this.toggleDone(index)}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App
