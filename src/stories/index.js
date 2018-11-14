import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'
import Todo from '../Todo'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))

storiesOf('Todo', module).add('width text', () => (
  <Todo
    text="Hello world"
    done={false}
    onToggle={action('toggle')}
    onDelete={action('delete')}
  />
))

.add('in done state', () => (
  <Todo
  text="Hello world"
  done={done}
  onToggle={action('toggle')}
  onDelete={action('delete')}
))
