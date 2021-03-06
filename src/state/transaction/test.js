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
    it('deve adicionar a nova transação no fim da lista', () => {
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
        list: [1, 2, 3, {
          id,
          description: 'description',
          kind: 'kind',
          value: 'value',
        }],
      }
      expect(result).toEqual(expected)
    })
  })

  describe('requestTransactions', () => {
    it('deve mudar a flag <loading> e para true', () => {
      const initialState = {
        list: [1, 2, 3],
      }
      const result = reducer(initialState, requestTransactions())
      const expected = {
        list: [1, 2, 3],
        loading: true,
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
        dirty: true,
        list: [1, 2, 3],
      }
      expect(result).toEqual(expected)
    })

    it('deve retornar o resultado esperado se passar uma lista por parâmetro', () => {
      const initialState = {
        list: [1, 2, 3],
      }
      const result = reducer(initialState, receiveTransactions([{ id: 4 }, 5, 6]))
      const expected = {
        dirty: true,
        loading: false,
        lastId: 4,
        lastPage: true,
        list: [{ id: 4 }, 5, 6, 1, 2, 3],
      }
      expect(result).toEqual(expected)
    })

    it('deve retornar o resultado esperado se passar uma lista com tamanho maior que 4', () => {
      const initialState = {
        list: [1, 2, 3],
      }
      const result = reducer(initialState, receiveTransactions([{ id: 4 }, 5, 6, 7, 8]))
      const expected = {
        dirty: true,
        loading: false,
        lastId: 4,
        lastPage: false,
        list: [{ id: 4 }, 5, 6, 7, 8, 1, 2, 3],
      }
      expect(result).toEqual(expected)
    })
  })
})
