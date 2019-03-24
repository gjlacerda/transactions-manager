import * as types from './types'

export const addTransaction = transaction => ({
  ...transaction,
  type: types.ADD_TRANSACTION,
})

export const requestTransactions = () => ({
  type: types.REQUEST_TRANSACTIONS,
})

export const receiveTransactions = payload => ({
  type: types.RECEIVE_TRANSACTIONS,
  payload,
})
