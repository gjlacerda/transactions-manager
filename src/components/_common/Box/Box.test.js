import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { marginSize } from 'utils/margin'
import Box from './Box'

describe('Box component', () => {
  it('deve ser igual ao snapshot', () => {
    const tree = renderer.create(
      <Box
        marginTop="small"
        marginRight="medium"
        marginBottom="large"
        marginLeft="small"
      />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it(`deve conter o css <margin-top: ${marginSize.small}> ao passar o parâmetro (marginTop="small")`, () => {
    const tree = renderer.create(<Box marginTop="small" />).toJSON()
    expect(tree).toHaveStyleRule('margin-top', marginSize.small)
  })

  it(`deve conter o css <margin-right: ${marginSize.medium}> ao passar o parâmetro (marginBottom="medium")`, () => {
    const tree = renderer.create(<Box marginRight="medium" />).toJSON()
    expect(tree).toHaveStyleRule('margin-right', marginSize.medium)
  })

  it(`deve conter o css <margin-bottom: ${marginSize.large}> ao passar o parâmetro (marginBottom="large")`, () => {
    const tree = renderer.create(<Box marginBottom="large" />).toJSON()
    expect(tree).toHaveStyleRule('margin-bottom', marginSize.large)
  })

  it(`deve conter o css <margin-left: ${marginSize.small}> ao passar o parâmetro (marginLeft="small")`, () => {
    const tree = renderer.create(<Box marginLeft="small" />).toJSON()
    expect(tree).toHaveStyleRule('margin-left', marginSize.small)
  })
})
