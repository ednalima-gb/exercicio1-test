const CheckPassword = require('../../../../src/utils/check-password')

describe('Testar checkpassword', () => {
    test('Deve retornar true se as duas senhas forem iguais', () => {
        const res = CheckPassword.match(123, 123)

        expect(res).toBe(true)
    })

    test('Deve retornar false se as duas senhas forem diferentes', () => {
        const res = CheckPassword.match(123, 321)

        expect(res).toBe(false)
    })

})