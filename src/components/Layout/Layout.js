import React from 'react'
import { Normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'
import { fontSize, fontWeight } from 'utils/font'
import { colorBlack, colorGrayLight } from 'utils/color'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

  body {
    font-family: Roboto;
    font-weight: ${fontWeight.regular};
    font-size: ${fontSize.normal};
    color: ${colorBlack};
    background-color: ${colorGrayLight};
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
