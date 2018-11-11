import React, { Component } from 'react'
import Todolist from './Todolist'
import Input from './Input'
import Counter from './Counter'
import Heading from './Heading'
import './App.css'
import './Counter.css'
import './Heading.css'

class App extends Component {
  state = {
    todos: [
      { text: 'Geschenk1', done: false },
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

  deleteTodo = index => {
    const { todos } = this.state
    const newTodos = [...todos.slice(0, index), ...todos.slice(index + 1)]

    this.setState({
      todos: newTodos
    })
  }

  render() {
    const countTodos = this.state.todos.filter(todos => todos.isDone).length
    return (
      <div className="App">
        <header />
        <Heading />
        <Counter count={countTodos} />
        <Input keyupfunction={this.addTodoArray} />
        <ul>
          {this.state.todos.map((todo, index) => (
            <Todolist
              key={index}
              isDone={todo.done}
              text={todo.text}
              onClick={() => this.toggleDone(index)}
              onDelete={() => this.deleteTodo(index)}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
