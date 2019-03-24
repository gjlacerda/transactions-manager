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
    description: '',
    value: '',
    kind: 'debit',
  }

  onSubmit = () => {
    const { addTransaction, history } = this.props
    const { description, value, kind } = this.state
    if (!description || !value) {
      return
    }
    addTransaction({ description, value, kind })
    history.push('/')
  }

  updateState(state, value) {
    this.setState({
      [state]: value,
    })
  }

  changeType(kind) {
    this.setState({ kind })
  }

  render() {
    const { history } = this.props
    const { kind } = this.state

    return (
      <DashboardLayout>
        <Card>
          <form onSubmit={this.onSubmit}>
            <H1>Nova transação</H1>
            <Box marginBottom="medium">
              <TextField
                label="Descrição"
                width="300px"
                focus
                onChange={event => this.updateState('description', event.target.value)}
              />
            </Box>
            <Box marginBottom="large">
              <TextField
                label="Preço"
                width="100px"
                onChange={event => this.updateState('value', event.target.value)}
              />
            </Box>
            <Options>
              <Radiobutton
                label="débito"
                active={kind === 'debit'}
                debit
                onClick={() => this.changeType('debit')}
                onChange={event => this.updateState('value', event.target.value)}
              />
              <Radiobutton
                label="crédito"
                active={kind === 'credit'}
                credit
                onClick={() => this.changeType('credit')}
              />
            </Options>
            <Actions>
              <Button type="button" onClick={() => history.push('/')}>
                Cancelar
              </Button>
              <Button type="submit" primary>
                Salvar
              </Button>
            </Actions>
          </form>
        </Card>
      </DashboardLayout>
    )
  }
}

export default Transaction
