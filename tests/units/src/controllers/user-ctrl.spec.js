const UserController = require('../../../../src/controllers/user-ctrl');
const CPFValidator = require('../../../../src/utils/cpf-validator');
const CheckPassword =require('../../../../src/utils/check-password');
const UserModel =require('../../../../src/service/user');

const resMock = {
    status: (status) => {
        return {
            json: (message) => {
            }
        }
    }
}

const reqMock = {
    body: {
        name: 'Any Name',
        cpf:'335.865.070-70',
        password: '123456',
        confirmPassword: '123456'
    }
}

describe('User controller tests', () => {
    test('Should finish with status code 200 and a created user', async () => {      
        const isValidCPFSpy = await jest.spyOn(CPFValidator, 'isValid')
            .mockImplementationOnce(() => true)

        const checkPasswordSpy = await jest.spyOn(CheckPassword, 'match')
            .mockImplementationOnce(() => true)

        const createdAt = new Date()

        const userCreateSpy = await jest.spyOn(UserModel, 'create')
            .mockImplementationOnce(() => {
                return {
                    id: 1,
                    created_at: createdAt
                }
            })

        const resSpy = await jest.spyOn(resMock, 'status')

        await UserController.create(reqMock, resMock)
        
        expect(isValidCPFSpy).toHaveBeenCalledWith('335.865.070-70')
        expect(checkPasswordSpy).toHaveBeenCalledWith('123456', '123456')
        expect(userCreateSpy).toHaveReturnedWith({
            id: 1,
            created_at: createdAt
        })

        expect(resSpy).toHaveBeenCalledWith(200)
    })

    test('Shound return status 400 an error if an invalid cpf is provided', async () => {
        const reqMockWithInvalidCPF = {
            body: {
                name: 'Any Name',
                cpf:'99999999999',
                password: '123456',
                confirmPassword: '123456'
            }
        }

        await jest.spyOn(CPFValidator, 'isValid')
            .mockImplementationOnce(() => false)
        
        const resSpy = await jest.spyOn(resMock, 'status')

        await UserController.create(reqMockWithInvalidCPF, resMock)

        expect(resSpy).toHaveBeenCalledWith(400)
    })
})




// const userController = require('../../../../src/controllers/user-ctrl');
// const UserService = require('../../../../src/service/user');
// const CpfValidator = require('../../../../src/utils/cpf-validator');
// const CheckPassword = require('../../../../src/utils/check-password');

// const cpfMock = (cpf) => true

// const passwordMock = (password, confirmPassword) => true

// describe('Teste do controller', () => {
//     test('Deve retornar um status 200 e o json', async() => {
        
//         const reqMock = {
//             body: {
//                 "name": "José",
//                 "cpf": "273.403.750-58",
//                 "password": "123456",
//                 "confirmPassword": "123456"
//             }
//         }

//         const resMock = {
//             status: (status) => {
//                 console.log(status)
//                 return {
//                     json: (mensage) => {
//                         console.log(mensage)
//                     }
//                 }
//             }
//         }
//             const validatorCpfGetSpy = await jest.spyOn(CpfValidator, 'isValid')
//                         .mockImplementationOnce(cpfMock)

//             const validatorPasswordGetSpy = await jest.spyOn(CheckPassword, 'match')
//                         .mockImplementationOnce(passwordMock)

//             await userController.create(reqMock, resMock)
            

//             expect(validatorCpfGetSpy).toHaveReturnedWith(true)
//             expect(validatorPasswordGetSpy).toHaveReturnedWith(true)

            
//     })
// })