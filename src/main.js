import {GraphQLServer} from 'graphql-yoga'
import Query from './resolvers/Query'
import Author from './resolvers/Author'
import Book from './resolvers/Book'
import db from './db' // Importing all db to add it within the context

const resolvers = {
    Query,
    Author,
    Book
}

// Create an object called context which refers to the context
// Asociate this context to our instance of GraphQLServer
// Next in the schema qe create our query
const context = {
    db
}

const server = new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers,
    context
})

server.start(() => console.log('Server is running on localhost:4000'))
