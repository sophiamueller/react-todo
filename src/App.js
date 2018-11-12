import React, { Component } from 'react'
import Todo from './Todo'
import Input from './Input'
import Counter from './Counter'
import Heading from './Heading'
import './App.css'

class App extends Component {
  state = {
    todos: this.load()
  }

  render() {
    this.save()
    const countTodos = this.state.todos.filter(todo => todo.done).length
    return (
      <div className="App">
        <Heading />
        <Counter count={countTodos} />
        <div className="InputBox">
          <Input handleKeyUp={this.addTodo} />
        </div>

        <ul>{this.renderTodos()}</ul>
      </div>
    )
  }

  addTodo = event => {
    if (event.key === 'Enter') {
      const input = event.target
      const newEntry = [{ text: input.value, done: false }, ...this.state.todos]
      this.setState({
        todos: newEntry
      })
      input.value = ''
    }
  }

  toggleDone = index => {
    const { todos } = this.state
    const todo = todos[index]

    this.setState({
      todos: [
        ...todos.slice(0, index),
        { ...todo, done: !todo.done },
        ...todos.slice(index + 1)
      ]
    })
  }

  deleteTodo = index => {
    const { todos } = this.state

    this.setState({
      todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
    })
  }

  renderTodos() {
    return this.state.todos.map((todo, index) => (
      <Todo
        key={index}
        isDone={todo.done}
        text={todo.text}
        onClick={() => this.toggleDone(index)}
        onDelete={() => this.deleteTodo(index)}
      />
    ))
  }

  save() {
    localStorage.setItem('todo-app--todos', JSON.stringify(this.state.todos))
  }

  load() {
    try {
      return (
        JSON.parse(localStorage.getItem('todo-ap--todos')) || [
          { text: 'Geschenk1 ', done: false },
          { text: 'Geschenk2 ', done: false },
          { text: 'Geschenk3 ', done: false }
        ]
      )
    } catch (err) {
      return []
    }
  }
}

export default App
