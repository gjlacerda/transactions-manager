import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import TransactionItem from 'pages/Home/TransactionItem'
import H1 from 'components/_common/H1'
import Button from 'components/_common/Button'
import { fontSize } from 'utils/font'
import { marginSize } from 'utils/margin'
import { colorGrayLight } from 'utils/color'
import TransactionListSkeleton from './TransactionListSkeleton'

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${marginSize.large};

  .header {
    margin-right: ${marginSize.medium};
    margin-bottom: 0;
  }
`

const Table = styled.table`
  width: 100%;
  font-size: ${fontSize.small};
  margin: -${marginSize.medium} 0;
  border-collapse: collapse;

  tr:not(:last-child) {
    border-bottom: 1px solid ${colorGrayLight};
  }
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

  render() {
    const {
      list,
      lastId,
      lastPage,
      loading,
      requestTransactions,
      history,
      dirty,
    } = this.props

    return (
      <Fragment>
        <Header>
          <H1 className="header">
            Transações
          </H1>
          <Button onClick={() => history.push('/transaction')}>
            Novo
          </Button>
        </Header>
        {loading && !dirty && (
          <TransactionListSkeleton />
        )}
        <Table>
          <tbody>
            {list.map(transaction => (
              <TransactionItem
                key={transaction.id}
                description={transaction.description}
                value={transaction.value}
                kind={transaction.kind}
                accumulated={transaction.accumulated}
              />
            ))}
          </tbody>
        </Table>
        <Actions>
          {list.length > 0 && !lastPage && (
            <Button
              primary
              onClick={() => requestTransactions(lastId)}
              disabled={loading}
            >
              Carregar mais
            </Button>
          )}
        </Actions>
      </Fragment>
    )
  }
}

export default TransactionList
