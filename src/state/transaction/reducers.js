import * as types from './types'

const INITAL_STATE = {
  loading: true,
  list: [],
}

const addTransaction = (state, action) => ({
  ...state,
  list: [
    ...state.list,
    {
      id: action.id,
      description: action.description,
      value: action.value,
      kind: action.kind,
    },
  ],
})

const requestTransactions = state => ({
  ...state,
  loading: true,
})

const receiveTransactions = (state, action) => ({
  ...state,
  loading: false,
  dirty: true,
  lastId: action.payload.length ? action.payload[0].id : null,
  lastPage: action.payload.length < 4, // TODO parametrizar
  list: [
    ...action.payload,
    ...state.list,
  ],
})

const transactionReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_TRANSACTION:
      return addTransaction(state, action)
    case types.REQUEST_TRANSACTIONS:
      return requestTransactions(state)
    case types.RECEIVE_TRANSACTIONS:
      return receiveTransactions(state, action)
    default:
      return state
  }
}

export default transactionReducer
