const Author = {
    // Give the property register_by this resolver
    register_by: (parent, args, { db }, info) => {
        // This resolver is within a parent property who is "Author"
        // Then we  to find the user who has register that author and return it
        return db.users.find(user => user.id === parent.register_by)
    },
    books: (parent, args, { db }, info) => {
        return db.books.filter(book => book.writted_by === parent.id    )
    }
}

export default Author