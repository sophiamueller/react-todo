import React, { Component } from 'react'
import './Separator.css'

export default class Separator extends Component {
  render() {
    return (
      <section className="Separator">
        <div className="hr" />
        <span>{this.props.text}</span>
        <div className="hr" />
      </section>
    )
  }
}
