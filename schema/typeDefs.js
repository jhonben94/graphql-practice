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
        favoriteMovies: [Movie]
    }
    type Movie {
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheaters: Boolean!
    }

    type Query {
        users: [User!]!
        user(id: ID!): User
        movies: [Movie!]!
        movie(name: String!): [Movie!]!
    }
    type Mutation {
        createUser(input: CreateUserInput!): User
        updateUserName(input: UpdateUserNameInput!): User
        deleteUser(id: ID!): Boolean
    }
    input CreateUserInput {
        firstName: String!
        lastName: String!
        username: String
        gender: String = "Generic"
        nationality: Nationality = PORTUGAL
    }
    input UpdateUserNameInput {
        id: ID!
        newUserName: String!
    }

    enum Nationality {
        PERU
        NORWAY
        INDONESIA
        PORTUGAL
    }
`

module.exports = { typeDefs }
