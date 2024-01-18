const userController = require('../../../src/controllers/user-ctrl');
const UserModel = require('../../../src/models/User');
const CpfValidator = require('../../../src/utils/cpf-validator');
const CheckPassword = require('../../../src/utils/check-password');

const cpfMock = (cpf) => true

const passwordMock = (password, confirmPassword) => true

describe('Teste do controller', () => {
    test('Deve retornar um status 200 e o json', async() => {
        
        const reqMock = {
            body: {
                "name": "José",
                "cpf": "273.403.750-58",
                "password": "123456",
                "confirmPassword": "123456"
            }
        }

        const resMock = {
            status: (status) => {
                console.log(status)
                return {
                    json: (mensage) => {
                        console.log(mensage)
                    }
                }
            }
        }
            const validatorCpfGetSpy = await jest.spyOn(CpfValidator, 'isValid')
                        .mockImplementationOnce(cpfMock)

            const validatorPasswordGetSpy = await jest.spyOn(CheckPassword, 'match')
                        .mockImplementationOnce(passwordMock)

            await userController.create(reqMock, resMock)
            

            expect(validatorCpfGetSpy).toHaveReturnedWith(true)
            expect(validatorPasswordGetSpy).toHaveReturnedWith(true)

            
    })
})