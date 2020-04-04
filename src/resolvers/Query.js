const Query = {
        hello: (parent, args, context, info) => `Hello world`,
        quantity: () => 2,
        getUser: () => {
            return {
                name: 'Nacho',
                lastname: 'RM'
            }
        }
    }

export default Query