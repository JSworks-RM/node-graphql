const Query = {
        hello: (parent, args, context, info) => {
            const { name } = args
            return `Hello ${name || 'world'}`
        },
        quantity: () => 2,
        user: (parent, { id }, context, info) => {
            const { db } = context
            if (!id) {
                return db.users
            }

            return db.users.filter(user => user.id === id)
        },
        author: (parent, { id }, { db }, info) => {
            if (!id) {
                return db.authors
            }
            return db.authors.filter(author => id === author.id)
        },
        book: (parent, { id }, { db }, info) => {
            if (!id) {
                return db.books
            }
            return db.books.filter(book => id === book.id)
        }
    }

export default Query