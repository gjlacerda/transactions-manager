import React from 'react'
import styled from 'styled-components'
import { marginSize } from 'utils/margin'

const Container = styled.div`
  margin-bottom: ${props => marginSize[props.marginBottom]};
  margin-left: ${props => marginSize[props.marginLeft]};
  margin-right: ${props => marginSize[props.marginRight]};
  margin-top: ${props => marginSize[props.marginTop]};
`
Container.displayName = 'Container'

export default ({
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  children,
}) => (
  <Container
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    marginRight={marginRight}
    marginTop={marginTop}
  >
    {children}
  </Container>
)
