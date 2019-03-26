import * as types from './types'

const INITAL_STATE = {
  loading: true,
  list: [],
}

const addTransaction = (state, action) => ({
  ...state,
  list: [
    {
      id: action.id,
      description: action.description,
      value: action.value,
      kind: action.kind,
    },
    ...state.list,
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
  lastId: action.payload.length ? action.payload[action.payload.length - 1].id : null,
  lastPage: action.payload.length < 4, // TODO parametrizar
  list: [
    ...state.list,
    ...action.payload,
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
