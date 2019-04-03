import { removeDuplicates } from './array'

describe('array', () => {
  describe('removeDuplicates', () => {
    const list = [{
      id: 1,
      name: 'name1',
    }, {
      id: 2,
      name: 'name2',
    }]

    const list2 = [{
      id: 2,
      name: 'name2',
    }, {
      id: 3,
      name: 'name3',
    }]

    it('deve retornar um array vazio se passado um array vazio como parâmetro', () => {
      const result = removeDuplicates([])
      expect(result).toEqual([])
    })

    it('deve retornar um array vazio se passado um array somente no primeiro parâmetro', () => {
      const result = removeDuplicates(list)
      expect(result).toEqual([])
    })

    it('deve retornar um array vazio se passado um array no primeiro e segundo parâmetro', () => {
      const result = removeDuplicates(list, list2)
      expect(result).toEqual([])
    })

    it('deve retornar o resultado esperado se passado todos os parâmetros', () => {
      const result = removeDuplicates(list, list2, 'id')
      const expected = [{
        id: 3,
        name: 'name3',
      }]
      expect(result).toEqual(expected)
    })

    it('deve retornar um array vazio se passar uma chave que não existe', () => {
      const result = removeDuplicates(list, list2, 'naoExiste')
      expect(result).toEqual([])
    })
  })
})
