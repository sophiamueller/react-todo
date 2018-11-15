import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import GlobalStyle from '../src/components/GlobalStyle'

addDecorator(withKnobs)

addDecorator(story => (
  <div>
    {story()}
    <GlobalStyle />
  </div>
))

function loadStories() {
  require('../src/stories')
}
configure(loadStories, module)
