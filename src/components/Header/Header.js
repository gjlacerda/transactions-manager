import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colorApp, colorWhite } from 'utils/color'
import { fontSize, fontWeight } from 'utils/font'
import { marginSize } from 'utils/margin'
import { transitionInput } from 'utils/transition'

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

const NavItem = styled(Link)`
  opacity: ${props => (props.active ? '1' : '0.8')};
  transition: ${transitionInput('opacity')};
  padding: 15px 0;
  color: ${colorWhite};
  margin: 0 ${marginSize.medium};
  text-decoration: none;
  border-bottom: 3px solid ${props => (props.active ? colorWhite : 'transparent')};

  &:hover {
    opacity: 1;
  }
`

// tODO: testar
export const getActiveByPathname = pathname => (window.location.pathname === pathname ? 'true' : '')

export default () => (
  <Container>
    <Logo>TM.</Logo>
    <Nav>
      <NavItem active={getActiveByPathname('/')} to="/">
        transações
      </NavItem>
      <NavItem active={getActiveByPathname('/transaction')} to="/transaction">
        nova transação
      </NavItem>
    </Nav>
    <div />
  </Container>
)
