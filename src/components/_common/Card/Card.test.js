import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Card from './Card'

describe('Card component', () => {
  it('deve ser igual ao snapshot', () => {
    const tree = renderer.create(
      <Card />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
