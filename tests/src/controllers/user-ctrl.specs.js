const userController = require('../../../src/controllers/user-ctrl');
const UserModel = require('../../../src/models/User');
const charMock = require('../../../tests/mocks/char-list.json')

const charMock = (name, cpf, password, confirmPassword) => {
    console.log(charServiceMock)
    return charServiceMock
}

describe('Teste do controller', () => {
    test('Deve retornar um status 200 e o json', async() => {
        const reqMock = {
            body: {
                name: 'José', 
                cpf: '273.403.750-58', 
                password: '123456', 
                confirmPassword: '123456'
            }
        }

        const resMock = {
            status: () => {
                console.log('STATUS')

                return { 
                    json: () => {
                        console.log("json")
                    }
                }
            }
        }

        const userControllerGetSpy = await jest.spyOn(userController, 'get')
            .mockImplementationOnce(charMock)

            await userController.list(reqMock, resMock)

            expect(charServiceGetSpy).toHaveReturnedWith([
                {
                    "name": "José",
                    "cpf": "273.403.750-58",
                    "password": "123456",
                    "confirmPassword": "123456"
                }
            ])
    })
})