import React, { Component } from 'react'
import styled from 'styled-components'
import DashboardLayout from 'components/_common/DashboardLayout'
import Card from 'components/_common/Card'
import H1 from 'components/_common/H1'
import TextField from 'components/_common/TextField'
import Radiobutton from 'components/_common/Radiobutton'
import Button from 'components/_common/Button'
import Box from 'components/_common/Box'
import { marginSize } from 'utils/margin'

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;  

  button {
    margin-left: ${marginSize.small};
  }
`

const Options = styled.div`
  display: flex;
  margin-bottom: ${marginSize.large};

  > div {
    margin-right: ${marginSize.medium};
  }
`

class Transaction extends Component {
  state = {
    type: 'debit',
  }

  changeType(type) {
    this.setState({ type })
  }

  render() {
    const { history } = this.props
    const { type } = this.state

    return (
      <DashboardLayout>
        <Card>
          <H1>Nova transação</H1>
          <Box marginBottom="medium">
            <TextField label="Descrição" width="300px" />
          </Box>
          <Box marginBottom="large">
            <TextField label="Preço" width="100px" />
          </Box>
          <Options>
            <Radiobutton
              label="débito"
              active={type === 'debit'}
              debit
              onClick={() => this.changeType('debit')}
            />
            <Radiobutton
              label="crédito"
              active={type === 'credit'}
              credit
              onClick={() => this.changeType('credit')}
            />
          </Options>
          <Actions>
            <Button onClick={() => history.push('/')}>Cancelar</Button>
            <Button primary>Salvar</Button>
          </Actions>
        </Card>
      </DashboardLayout>
    )
  }
}

export default Transaction
