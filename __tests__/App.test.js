import React from 'react'
import { render } from 'react-native-testing-library'
import App from '../App'

test('should render', () => {
  const { toJSON } = render(<App />)

  expect(toJSON()).toMatchSnapshot()
})
