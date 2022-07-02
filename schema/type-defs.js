const { gql } = require('apollo-server');

const typeDefs = gql`

    type user {
        id: ID
        name: String
        age: Int
    }

    input userInput{
        name: String
        age: Int
    }

    type Query {
        getUser:[user]
    }

    type Mutation {
        createUser(UserInput:userInput):user
    }

`

module.exports = { typeDefs }