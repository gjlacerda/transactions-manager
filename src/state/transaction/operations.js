import database from 'database'
import { removeDuplicates } from 'utils/array'
import * as actions from './actions'

const ref = database.ref('transactions')

const addTransaction = transaction => (dispatch) => {
  dispatch(actions.addTransaction(transaction))
  ref.push(transaction)
}

const requestTransactions = lastId => async (dispatch, getState) => {
  dispatch(actions.requestTransactions())

  let query = ref
    .orderByKey()
    .limitToLast(5) // TODO parametrizar
  if (lastId) {
    query = query.endAt(lastId)
  }
  const result = await query.once('value')
  const value = result.val() || []
  const list = Object
    .keys(value)
    .map((item, index) => ({
      ...value[item],
      id: Object.keys(value)[index],
    }))
    .reverse()

  const filteredList = removeDuplicates(getState().transaction.list, list, 'id')
  dispatch(actions.receiveTransactions(filteredList))
}

export default {
  addTransaction,
  requestTransactions,
}
