import React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import Search from '../Search'

test('should render', () => {
  const { toJSON } = render(<Search onSubmit={jest.fn()} />)

  expect(toJSON()).toMatchSnapshot()
})

test('should show placeholder', () => {
  const placeholder = 'test'
  const { toJSON } = render(<Search placeholder={placeholder} onSubmit={jest.fn()} />)

  expect(toJSON()).toMatchSnapshot()
})

test('should call onSubmit', () => {
  const mockOnSubmit = jest.fn()
  const input = 'testing'

  const { getByTestId, toJSON } = render(<Search onSubmit={mockOnSubmit} />)

  fireEvent.changeText(getByTestId('search'), input)
  fireEvent(getByTestId('search'), 'submit')

  expect(mockOnSubmit).toHaveBeenCalledTimes(1)
  expect(toJSON()).toMatchSnapshot()
})
