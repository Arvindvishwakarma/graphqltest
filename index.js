const {ApolloServer} = require("apollo-server")
const mongoose = require('mongoose')
const {typeDefs} = require('./schema/type-defs')
const {resolvers} = require('./schema/resolvers')
const server = new ApolloServer({typeDefs, resolvers});


mongoose.connect(`mongodb://roomsnearyou:rooms2588@cluster0-shard-00-00.tneod.mongodb.net:27017,cluster0-shard-00-01.tneod.mongodb.net:27017,cluster0-shard-00-02.tneod.mongodb.net:27017/graphqltest?ssl=true&replicaSet=atlas-11olds-shard-0&authSource=admin&retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    server.listen({ port: process.env.PORT || 4000 }).then(({url})=> {
        console.log(`Server is running: ${url}`)
    })
}).catch(err => {
    console.log(err);
});
