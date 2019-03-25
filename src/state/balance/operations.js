import database from 'database'
import * as actions from './actions'

const ref = database.ref('transactions')

const requestBalance = () => async (dispatch) => {
  dispatch(actions.requestBalance())

  let balance = 0
  const result = await ref.once('value')
  const value = result.val() || []
  Object
    .keys(value)
    .map((item) => {
      const transaction = value[item]
      const transValue = +transaction.value
      balance += value[item].kind === 'credit'
        ? transValue
        : -transValue
      return balance
    })

  dispatch(actions.receiveBalance(balance))
}

export default {
  requestBalance,
}
