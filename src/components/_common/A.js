import styled from 'styled-components'
import { colorWhite, colorApp } from 'utils/color'

export default styled.a`
  color: ${props => (props.light ? colorWhite : colorApp)};
  text-decoration: none;
`
