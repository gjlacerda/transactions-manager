import React from 'react'
import styled from 'styled-components'
import A from 'components/_common/A'
import { colorApp, colorWhite } from 'utils/color'
import { fontSize, fontWeight } from 'utils/font'
import { marginSize } from 'utils/margin'

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${marginSize.medium};
  background-color: ${colorApp};
  height: 50px;
`

const Logo = styled.div`
  color: ${colorWhite};
  width: 25%
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.large};
`

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  width: 50%;
`

const NavItem = styled(A)`
  opacity: ${props => (props.active ? '1' : '0.8')};
  transition: opacity 0.1s ease-in-out;
  padding: 15px 0;
  margin: 0 ${marginSize.medium};
  border-bottom: 3px solid ${props => (props.active ? colorWhite : 'transparent')};

  &:hover {
    opacity: 1;
  }
`

export default () => (
  <Container>
    <Logo>TM.</Logo>
    <Nav>
      <NavItem light active href="#">
        transações
      </NavItem>
      <NavItem light href="#">
        cadastrar
      </NavItem>
    </Nav>
    <div />
  </Container>
)
