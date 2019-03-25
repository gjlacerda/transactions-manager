import * as types from './types'

export const requestBalance = () => ({
  type: types.REQUEST_BALANCE,
})

export const receiveBalance = balance => ({
  type: types.RECEIVE_BALANCE,
  balance,
})
