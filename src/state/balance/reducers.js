import * as types from './types'

const INITAL_STATE = {
  balance: 0,
  loading: true,
}

const requestBalance = state => ({
  ...state,
  loading: true,
})

const receiveBalance = (state, action) => ({
  ...state,
  loading: false,
  balance: action.balance,
})

const balanceReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case types.REQUEST_BALANCE:
      return requestBalance(state)
    case types.RECEIVE_BALANCE:
      return receiveBalance(state, action)
    default:
      return state
  }
}

export default balanceReducer
