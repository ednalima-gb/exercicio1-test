const userController = require('../../../src/controllers/user-ctrl');

describe('Criar usuário', () => {
    test('Deve retornar um status 200 quando for sucesso', () => {
        const reqMock = {
            body: {
                name: 'José', 
                cpf: '273.403.750-58', 
                password: '123456', 
                confirmPassword: '123456'
            }
        }

        const resMock = {
            
        }
    })
})