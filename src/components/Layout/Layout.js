import React from 'react'
import { Normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,300');

  body {
    font-family: Roboto;
  }

  * {
    box-sizing: border-box;
  }
`

export default ({ children }) => (
  <React.Fragment>
    <Normalize />
    <GlobalStyle />
    {children}
  </React.Fragment>
)
