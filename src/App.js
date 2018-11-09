import React, { Component } from 'react'
import Todolist from './Todolist'
import Input from './Input'
import './App.css'

class App extends Component {
  state = {
    todos: [
      { text: 'Geschenk1', done: false },
      { text: 'Geschenk2', done: false },
      { text: 'Geschenk3', done: false }
    ]
  }
  render() {
    return (
      <div className="App">
        <Input />
        <div>
          {this.state.todos.map(todo => (
            <Todolist key={todo.text} text={todo.text} />
          ))}
        </div>
      </div>
    )
  }
}

export default App
