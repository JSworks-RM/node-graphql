const Query = {
        hello: (parent, args, context, info) => {
            const { name } = args
            return `Hello ${name || 'world'}`
        },
        quantity: () => 2,
        getUser: () => {
            return {
                name: 'Nacho',
                lastname: 'RM'
            }
        }
    }

export default Query