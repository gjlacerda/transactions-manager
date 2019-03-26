import React from 'react'
import styled from 'styled-components'
import {
  colorAppUltraLight,
  colorCredit,
  colorDebit,
} from 'utils/color'
import { transitionInput } from 'utils/transition'
import { marginSize } from 'utils/margin'
import { sm } from 'utils/breakpoint'

const Tr = styled.tr`
  cursor: pointer;
  transition: ${transitionInput('background-color')};

  @media (min-width: ${sm}) {
    &:hover {
      background-color: ${colorAppUltraLight};
    }
  }
`

const Td = styled.td`
  padding: ${marginSize.medium} ${marginSize.small};
`

const TdName = styled(Td)`
  width: 60%;
`

const TdValue = styled(Td)`
  width: 20%;
`

const TdType = styled(Td)`
  width: 20%;
  text-align: right;
  color: ${props => props.kind === 'credit' ? colorCredit : colorDebit};
`

export default ({
  description,
  value,
  kind,
}) => (
  <Tr>
    <TdName>{description}</TdName>
    <TdValue>{value}</TdValue>
    <TdType kind={kind}>{kind}</TdType>
  </Tr>
)
