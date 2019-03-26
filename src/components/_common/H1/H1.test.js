import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { marginSize } from 'utils/margin'
import { fontSize } from 'utils/font'
import H1 from './H1'

describe('H1 component', () => {
  it('deve ser igual ao snapshot', () => {
    const tree = renderer.create(<H1 />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it(`deve conter o css <margin-bottom: ${marginSize.large}>`, () => {
    const tree = renderer.create(<H1 />).toJSON()
    expect(tree).toHaveStyleRule('margin-bottom', marginSize.large)
  })

  it(`deve conter o css <font-size: ${fontSize.large}>`, () => {
    const tree = renderer.create(<H1 />).toJSON()
    expect(tree).toHaveStyleRule('font-size', fontSize.large)
  })
})
