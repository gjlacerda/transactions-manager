import reducer from './reducers'
import {
  requestBalance,
  receiveBalance,
} from './actions'

describe('balance state', () => {
  it('deve retornar o estado inicial se a action não existir', () => {
    const initialState = {
      balance: 0,
    }
    const result = reducer(initialState, { type: 'naoExiste' })
    const expected = {
      balance: 0,
    }
    expect(result).toEqual(expected)
  })

  describe('requestBalance', () => {
    it('deve mudar a flag <loading> para true', () => {
      const initialState = {
        balance: 0,
      }
      const result = reducer(initialState, requestBalance())
      const expected = {
        balance: 0,
        loading: true,
      }
      expect(result).toEqual(expected)
    })
  })

  describe('receiveBalance', () => {
    it('deve retornar o resultado esperado se passado o saldo', () => {
      const initialState = {
        balance: 0,
      }
      const result = reducer(initialState, receiveBalance(10))
      const expected = {
        balance: 10,
      }
      expect(result).toEqual(expected)
    })
  })
})
