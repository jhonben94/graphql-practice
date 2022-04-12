const { UserList, MovieList } = require("../fakeData")
var _ = require("lodash")
const resolvers = {
    Query: {
        users: () => {
            return UserList
        },
        user: (parent, args) => {
            return UserList.find((item) => item.id == args.id)
        },
        movies: () => {
            return MovieList
        },
        movie: (parent, args) => {
            const name = args.name
            console.log(MovieList.filter((item) => item.name.includes(name)))
            return MovieList.filter((item) => item.name.includes(name))
        },
    },
    User: {
        favoriteMovies: (parent, args) => {
            return MovieList.filter((item) => item.yearOfPublication > 2020)
        },
    },
    Mutation: {
        createUser: (parent, args) => {
            let user = args.input
            const id = UserList[UserList.length - 1].id + 1
            user.id = id
            UserList.push(user)

            return user
        },
        updateUserName: (parent, args) => {
            let updateData = args.input
            let user = UserList.find((userItem) => userItem.id == updateData.id)
            user.username = updateData.newUserName
        },
        deleteUser: (parent, args) => {
            _.remove(UserList, (item) => item.id == args.id)
            return null
        },
    },
}

module.exports = { resolvers }
