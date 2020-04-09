import { v4 as uuidv4 } from 'uuid'
const Mutation = {
    createUser: (parent, args, { db }, info) => {
        // If an user email exist, means that a user is already registered
        const isEmailTaken = db.users.some(user => user.email === args.email)
        if (isEmailTaken) {
            throw new Error('Email is taken')
        }
        
        // If user does not exist, we create it
        const user = {
            id: uuidv4(),
            ...args
        }
        db.users.push(user)

        // As we have a type we have to return, we just return this user we have created
        return user
    },
    updateUser: (parent, args, { db }, info) => {
        const { id, ...data } = args
        const userExist = db.users.find(user => user.id === id)
        if (!userExist) {
            throw new Error('User Not Found')
        }

        const isEmailTaken = db.users.some(user => user.email === data.email)
        if (isEmailTaken) {
            throw new Error('Email is taken')
        }

        // Updating info
        db.users = db.users.map(user => {
            if (user.id === id) {
                user = { ...user, ...data } // Fill object to create a new instance
                return user // Return new instance
            }
            return user
        })

        // Mutation have to return an user type object
        return { ...userExist, ...data }
    }
}

export default Mutation