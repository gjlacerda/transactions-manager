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
import { formatToHuman } from 'utils/currency'

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
  width: 40%;
`

const TdValue = styled(Td)`
  width: 30%;
  color: ${props => props.kind === 'credit' ? colorCredit : colorDebit};
  text-align: right;
`

const TdAccumulated = styled(Td)`
  width: 30%;
  text-align: right;
`

export default ({
  description,
  value,
  kind,
  accumulated,
}) => (
  <Tr>
    <TdName>{description}</TdName>
    <TdValue kind={kind}>{formatToHuman(value)}</TdValue>
    <TdAccumulated>{formatToHuman(accumulated)}</TdAccumulated>
  </Tr>
)
