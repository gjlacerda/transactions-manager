import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Button from './Button'

describe('Button component', () => {
  it('deve ser igual ao snapshot', () => {
    const tree = renderer.create(
      <Button />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('deve ser igual ao snapshot quando passado o parâmetro (fullWidth)', () => {
    const tree = renderer.create(
      <Button fullWidth />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('deve chamar a função onClick passada por parâmetro', () => {
    const spy = jest.fn()
    const wrapper = shallow(<Button onClick={spy} />)
    wrapper.simulate('click')
    expect(spy).toHaveBeenCalled()
  })
})
