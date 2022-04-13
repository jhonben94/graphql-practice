const { UserList, MovieList } = require("../fakeData")
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
    User:{
        favoriteMovies: ()=>{
            return MovieList.filter(item => item.yearOfPublication > 2010)
        }
    } 
   
}

module.exports = { resolvers }
