const UserSchema = require('../schemas/User')

class User {
    static async create({name, email, password, cpf}) {
        const { id } = await UserSchema.create({
            name,
            email,
            password,
            cpf
        })

        return { id }
    }
}

module.exports = User