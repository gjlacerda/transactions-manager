import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Radiobutton from './Radiobutton'

describe('Radiobutton component', () => {
  it('deve ser igual ao snapshot', () => {
    const tree = renderer.create(
      <Radiobutton
        label="Teste"
        credit
        active
      />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('deve chamar a função onClick passada por parâmetro', () => {
    const spy = jest.fn()
    const wrapper = shallow(<Radiobutton onClick={spy} />)
    wrapper.simulate('click')
    expect(spy).toHaveBeenCalled()
  })
})
