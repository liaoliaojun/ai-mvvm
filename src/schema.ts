import {createSchema} from 'graphql-yoga'

export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      hello: String
      getUser: User
    }
    type User {
      id: String
      username: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'world liaoliao',
      getUser: async () => {
        const result_str = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('112211331222')
          }, 5000)
        })
        return {
          id: result_str,
          username: '235554'
        }
      }
    }
  }
})

