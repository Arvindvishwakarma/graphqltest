const User = require('../models/user')

const resolvers = {

    Query: {
        getUser: async () => {
            return await User.find()
        }
    },

    Mutation: {
        createUser: async (_, args) => {
            const user = new User({
                name: args.UserInput.name,
                age: args.UserInput.age
            })

            return user.save()
        }
    }
}

module.exports = { resolvers }