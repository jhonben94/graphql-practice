const { gql } = require("apollo-server")
const typeDefs = gql`
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        username: String
        gender: String!
        nationality: Nationality!
        friends: [User]
    }
    type Movie {
        id: ID!
        name: String!
        yearOfPublication: String!
        isInTheaters: Boolean!
    }

    type Query {
        users: [User!]!
        user(id: ID!): User
        movies: [Movie!]!
        movie(name: String!): [Movie!]!
    }

    enum Nationality {
        PERU
        NORWAY
        INDONESIA
        PORTUGAL
    }
`

module.exports = { typeDefs }
