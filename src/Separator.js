import React, { Component } from 'react'
import './Separator.css'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  align-items: center;

  span {
    white-space: nowrap;
  }
`
const Text = styled.span`
  white-space: nowrap;
`
const Line = styled.div`
  width: 100%;
  margin: 0 10px;
  border-bottom: ${props => props.width || 4}px solid deeppink;
`

export default class Separator extends Component {
  render() {
    return (
      <Wrapper className="Separator">
        <Line width={10} className="hr" />
        <Text>{this.props.text}</Text>
        <Line className="hr" />
      </Wrapper>
    )
  }
}
