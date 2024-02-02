require('dotenv').config()
const mongoose = require('mongoose')
const { faker } = require('@faker-js/faker');
const {cpf: cpfGenerator} = require('cpf-cnpj-validator')

const UserService = require('../../../src/service/user')

describe('Test integration between Service and database', () => {
    beforeAll(async() => {
       await mongoose.connect(process.env.MONGO_DB_URL)
    })

    afterAll(async() => {
        await mongoose.connection.close()
    })

    test('Should create a new user', async() => {
        const createdUser = await UserService.create({
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password() ,
            cpf: cpfGenerator.generate()
        })

        expect(createdUser).toHaveProperty('id')
    })
})