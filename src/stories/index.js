import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean, number, color } from '@storybook/addon-knobs'
import Todo from '../components/Todo'
import Counter from '../components/Counter'
import Input from '../components/Input'
import Separator from '../components/Separator'

storiesOf('Todo', module)
  .add('with text', () => (
    <React.Fragment>
      <Todo
        text={text('Display Text', 'text')}
        done={boolean('foo', false)}
        onToggle={action('toggle')}
        onDelete={action('delete')}
      />
    </React.Fragment>
  ))
  .add('in done state', () => (
    <Todo
      text={text('Display Text', 'Hello world')}
      done={true}
      onToggle={action('toggle')}
      onDelete={action('delete')}
    />
  ))

storiesOf('Counter', module).add('displays done count for example 7', () => (
  <Counter count={number('Counter number', 29)} />
))

storiesOf('Input', module).add('Input field for text', () => (
  <Input handleKeyUp={action('text')} />
))

storiesOf('Separator', module).add('Separator for Task is done', () => (
  <Separator text="TODO" />
))
