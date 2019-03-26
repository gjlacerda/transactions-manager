import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import TextField from './TextField'

describe('TextField component', () => {
  it('deve ser igual ao snapshot', () => {
    const tree = renderer.create(
      <TextField
        label="Teste"
        fullWidth
      />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('deve chamar a função onChange passada por parâmetro', () => {
    const spy = jest.fn()
    const wrapper = mount(<TextField onChange={spy} />)
    wrapper.find('input').simulate('change', { target: { value: 'teste' } })
    expect(spy).toHaveBeenCalled()
  })
})
