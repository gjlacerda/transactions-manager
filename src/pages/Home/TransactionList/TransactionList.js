import React, { Component } from 'react'
import styled from 'styled-components'
import H1 from 'components/_common/H1'
import Button from 'components/_common/Button'
import { fontSize } from 'utils/font'
import { marginSize } from 'utils/margin'
import {
  colorAppUltraLight,
  colorGrayLight,
  colorCredit,
  colorDebit,
} from 'utils/color'
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

const TdType = styled(Td)`
  width: 20%;
  text-align: right;
  color: ${props => props.kind === 'credit' ? colorCredit : colorDebit};
`

const Actions = styled.div`
  text-align: center;
  margin-top: ${marginSize.large};
`

class TransactionList extends Component {
  componentDidMount() {
    const { dirty, requestTransactions } = this.props
    if (!dirty) {
      requestTransactions()
    }
  }

  renderTransactions() {
    const { list } = this.props
    return list.map(transaction => (
      <Tr key={transaction.id}>
        <TdName>{transaction.description}</TdName>
        <TdValue>{transaction.value}</TdValue>
        <TdType kind={transaction.kind}>{transaction.kind}</TdType>
      </Tr>
    ))
  }

  renderButtonMore() {
    const {
      list,
      lastId,
      lastPage,
      loading,
      requestTransactions,
    } = this.props
    return (list.length > 0 && !lastPage) && (
      <Button
        primary
        onClick={() => requestTransactions(lastId)}
        disabled={loading}
      >
        Carregar mais
      </Button>
    )
  }

  // mudar para funcao pura
  render() {
    return (
      <React.Fragment>
        <H1>Transações</H1>
        <Table>
          <tbody>
            {this.renderTransactions()}
          </tbody>
        </Table>
        <Actions>
          {this.renderButtonMore()}
        </Actions>
      </React.Fragment>
    )
  }
}

export default TransactionList
