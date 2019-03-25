import reducer from './reducers'
import {
  addTransaction,
  requestTransactions,
  receiveTransactions,
} from './actions'

describe('transaction state', () => {
  it('deve retornar o estado inicial se a action não existir', () => {
    const initialState = {
      list: [1, 2, 3],
    }
    const result = reducer(initialState, { type: 'naoExiste' })
    const expected = {
      list: [1, 2, 3],
    }
    expect(result).toEqual(expected)
  })

  describe('addTransaction', () => {
    it('deve adicionar a nova transação no começo da lista', () => {
      const initialState = {
        list: [1, 2, 3],
      }
      const id = +new Date()
      const result = reducer(initialState, addTransaction({
        id,
        description: 'description',
        kind: 'kind',
        value: 'value',
      }))
      const expected = {
        list: [{
          id,
          description: 'description',
          kind: 'kind',
          value: 'value',
        }, 1, 2, 3],
      }
      expect(result).toEqual(expected)
    })
  })

  describe('requestTransactions', () => {
    it('deve mudar a flag <loading> e <dirty> para true', () => {
      const initialState = {
        list: [1, 2, 3],
      }
      const result = reducer(initialState, requestTransactions())
      const expected = {
        list: [1, 2, 3],
        loading: true,
        dirty: true,
      }
      expect(result).toEqual(expected)
    })
  })

  describe('receiveTransactions', () => {
    it('deve retornar o resultado esperado se passar uma lista vazia por parâmetro', () => {
      const initialState = {
        list: [1, 2, 3],
      }
      const result = reducer(initialState, receiveTransactions([]))
      const expected = {
        loading: false,
        lastId: null,
        lastPage: true,
        list: [1, 2, 3],
      }
      expect(result).toEqual(expected)
    })

    it('deve retornar o resultado esperado se passar uma lista por parâmetro', () => {
      const initialState = {
        list: [1, 2, 3],
      }
      const result = reducer(initialState, receiveTransactions([4, 5, { id: 6 }]))
      const expected = {
        loading: false,
        lastId: 6,
        lastPage: true,
        list: [1, 2, 3, 4, 5, { id: 6 }],
      }
      expect(result).toEqual(expected)
    })

    it('deve retornar o resultado esperado se passar uma lista com tamanho maior que 4', () => {
      const initialState = {
        list: [1, 2, 3],
      }
      const result = reducer(initialState, receiveTransactions([4, 5, 6, 7, { id: 8 }]))
      const expected = {
        loading: false,
        lastId: 8,
        lastPage: false,
        list: [1, 2, 3, 4, 5, 6, 7, { id: 8 }],
      }
      expect(result).toEqual(expected)
    })
  })
})
