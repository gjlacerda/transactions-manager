import React, { Component } from 'react'
import styled from 'styled-components'
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
    const { balance } = this.props
    return (
      <Container balance={balance}>
        {getBalanceText(balance)}
      </Container>
    )
  }
}

export default Balance
