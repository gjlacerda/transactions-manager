import React from 'react'
import styled from 'styled-components'
import H1 from 'components/_common/H1'
import { fontSize } from 'utils/font'
import { marginSize } from 'utils/margin'
import { colorAppUltraLight, colorGrayLight } from 'utils/color'
import { transitionInput } from 'utils/transition'

const Table = styled.table`
  width: 100%;
  font-size: ${fontSize.small};
  margin: -${marginSize.medium} 0;
  border-collapse: collapse;

  tr:not(:last-child) {
    border-bottom: 1px solid ${colorGrayLight};
  }
`

const Tr = styled.tr`
  cursor: pointer;
  transition: ${transitionInput('background-color')};

  &:hover {
    background-color: ${colorAppUltraLight};
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

const TdDate = styled(Td)`
  width: 20%;
  text-align: right;
`

export default () => (
  <React.Fragment>
    <H1>Transações</H1>
    <Table>
      <tbody>
        <Tr>
          <TdName>Carro</TdName>
          <TdValue>10,00</TdValue>
          <TdDate>21/03/2019</TdDate>
        </Tr>
        <Tr>
          <TdName>Moto</TdName>
          <TdValue>20,00</TdValue>
          <TdDate>21/03/2019</TdDate>
        </Tr>
        <Tr>
          <TdName>Energia</TdName>
          <TdValue>20,00</TdValue>
          <TdDate>21/03/2019</TdDate>
        </Tr>
      </tbody>
    </Table>
  </React.Fragment>
)
