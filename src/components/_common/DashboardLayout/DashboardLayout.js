import React from 'react'
import Header from 'components/Header'
import styled from 'styled-components'
import { marginSize } from 'utils/margin'

const Content = styled.div`
  max-width: 600px;
  margin: ${marginSize.large} auto;
`

export default ({ children }) => (
  <React.Fragment>
    <Header />
    <Content>
      {children}
    </Content>
  </React.Fragment>
)
