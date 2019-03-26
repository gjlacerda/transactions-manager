import React, { Component } from 'react'
import styled from 'styled-components'
import Skeleton from 'components/_common/Skeleton'
import { fontSize } from 'utils/font'
import { colorDebit, colorCredit } from 'utils/color'

// TODO: testar
export const getBalanceColor = balance => balance >= 0 ? colorCredit : colorDebit

export const getBalanceText = balance => balance > 0 ? `+${balance}` : `${balance}`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${fontSize.xlarge};
  color: ${props => getBalanceColor(props.balance)}
`

class Balance extends Component {
  componentDidMount() {
    const { requestBalance } = this.props
    requestBalance()
  }

  render() {
    const { balance, loading } = this.props
    return (
      <Container balance={balance}>
        {loading && <Skeleton width="60px" height="34px" />}
        {!loading && getBalanceText(balance)}
      </Container>
    )
  }
}

export default Balance
