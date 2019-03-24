import React from 'react'
import styled from 'styled-components'
import {
  colorApp,
  colorAppLight,
  colorAppDark,
  colorWhite,
  colorGray,
  colorGrayDark,
  colorBlack,
} from 'utils/color'
import { borderRadius } from 'utils/border'
import { inputShadow } from 'utils/shadow'
import { transitionInput } from 'utils/transition'
import { opacityDisabled } from 'utils/opacity'

const Container = styled.button`
  padding: 10px 20px;
  background: ${props => (props.primary ? colorApp : colorGray)};
  color: ${props => (props.primary ? colorWhite : colorBlack)};
  outline: none;
  border: none;
  border-radius: ${borderRadius};
  cursor: pointer;
  box-shadow: ${inputShadow};
  transition: ${transitionInput('background-color')};
  opacity: ${props => props.disabled ? opacityDisabled : 1};

  &:hover {
    background-color: ${props => (props.primary ? colorAppDark : colorGrayDark)};
  }

  &:active {
    background-color: ${props => (props.primary ? colorAppLight : colorGray)};
  }
`

export default ({
  primary,
  onClick,
  type,
  disabled,
  children,
}) => (
  <Container
    type={type}
    primary={primary}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </Container>
)
