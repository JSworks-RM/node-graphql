import {GraphQLServer} from 'graphql-yoga'

// A partial Schema and resolvers to can raise GraphSQLServer
// Schema
const typeDefs = `
    type query {
        hello: String!,
    }
`
// Resolver
const resolvers = {
    query: {
        hello: () => `Hello world`,
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers,
})

server.start(5000, () => console.log('Server is running on localhost:5000'))
