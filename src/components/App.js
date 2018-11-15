import React, { Component } from 'react'
import uid from 'uid'
import styled from 'styled-components'
import Todo from './Todo'
import Input from './Input'
import Counter from './Counter'
import Heading from './Heading'
import Separator from './Separator'

import './App.css'
import ToggleButton from './ToggleButton'

class App extends Component {
  state = {
    todos: this.load()
  }

  render() {
    this.save()

    const Wrapper = styled.section`
      box-sizing: content-box;
      box-shadow: 7;
      background: linear-gradient(gray, darkgreen);
      max-width: 400px;
      min-height: 80vh;
      margin: auto;
      border-radius: 10px;
      border: solid 30px;
      border: darkred dotted 9px;
    `
    const countTodos = this.state.todos.filter(todo => todo.done).length

    return (
      <Wrapper>
        <ToggleButton
          defaultText="foo"
          alternativeText="bar"
          isDefault={true}
          onClick={() => console.log('click test')}
        />
        <Heading />
        <Counter count={countTodos} />
        <div className="InputBox">
          <Input handleKeyUp={this.addTodo} />
        </div>
        <Separator text="TODO" />
        {this.renderOpenTodos()}
        <Separator text="DONE" />
        {this.renderDoneTodos()}
      </Wrapper>
    )
  }

  addTodo = text => {
    this.setState({
      todos: [{ text, done: false, id: uid() }, ...this.state.todos]
    })
  }

  toggleTodo = id => {
    const { todos } = this.state
    const index = todos.findIndex(todo => todo.id === id)
    const todo = todos[index]

    this.setState({
      todos: [
        ...todos.slice(0, index),
        { ...todo, done: !todo.done },
        ...todos.slice(index + 1)
      ]
    })
  }

  deleteTodo = id => {
    const { todos } = this.state
    const index = todos.findIndex(todo => todo.id === id)

    this.setState({
      todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
    })
  }

  renderOpenTodos() {
    return this.state.todos
      .filter(todo => !todo.done)
      .map(this.renderSingleTodo)
  }

  renderDoneTodos() {
    return this.state.todos.filter(todo => todo.done).map(this.renderSingleTodo)
  }

  renderSingleTodo = todo => {
    return (
      <Todo
        key={todo.id}
        text={todo.text}
        done={todo.done}
        onToggle={() => this.toggleTodo(todo.id)}
        onDelete={() => this.deleteTodo(todo.id)}
      />
    )
  }

  save() {
    localStorage.setItem('todo-app--todos', JSON.stringify(this.state.todos))
  }

  load() {
    try {
      return (
        JSON.parse(localStorage.getItem('todo-ap--todos')) || [
          { text: 'Geschenk1 ', done: false, id: uid() },
          { text: 'Geschenk2 ', done: false, id: uid() },
          { text: 'Geschenk3 ', done: false, id: uid() }
        ]
      )
    } catch (err) {
      return []
    }
  }
}

export default App
