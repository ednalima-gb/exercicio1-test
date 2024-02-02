const CpfValidator = require('../../../../src/utils/cpf-validator')

describe ('Testar cpfValidator', () => {
    test('Deve retornar um cpf válido', () => {
        const res = CpfValidator.isValid('273.403.750-58')

        expect(res).toBe(true)
    })

    test('Deve retornar um cpf inválido', () => {
        const res = CpfValidator.isValid('12345678901')

        expect(res).toBe(false)
    })
})