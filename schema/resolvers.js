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
        },

        updateUser: async (_, { userId, name, age }) => {
            const filter = { _id: userId }
            const update = {
                name: name,
                age: age
            }
            return await User.findOneAndUpdate(filter, update, { new: true })
        },

        deleteUser: async (_, { userId }) => {
            return await User.findOneAndDelete({_id:userId})
        },
    }
}

module.exports = { resolvers }