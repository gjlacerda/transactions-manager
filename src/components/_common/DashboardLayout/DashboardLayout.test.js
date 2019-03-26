import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { BrowserRouter } from 'react-router-dom'
import DashboardLayout from './DashboardLayout'

describe('DashboardLayout component', () => {
  it('deve ser igual ao snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <DashboardLayout>
          <span>teste</span>
        </DashboardLayout>
      </BrowserRouter>,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
