const UserList = [
    {
        id: 1,
        firstName: "Devondra",
        lastName: "Sickert",
        username: "dsickert0",
        gender: "Female",
        nationality: "NORWAY",
        friends: [
            {
                id: 2,
                firstName: "Lorinda",
                lastName: "Farbrace",
                username: "lfarbrace1",
                gender: "Female",
                nationality: "PERU",
            },
            {
                id: 3,
                firstName: "Brucie",
                lastName: "Windrum",
                username: "bwindrum2",
                gender: "Male",
                nationality: "PERU",
            },
        ],
        favoriteMovies:[{
            id: 1,
            name: "Interview, The",
            yearOfPublication: "2001",
            isInTheaters: false,
        },
        {
            id: 3,
            name: "Watcher in the Woods, The",
            yearOfPublication: "2021",
            isInTheaters: true,
        }]
    },
    {
        id: 2,
        firstName: "Lorinda",
        lastName: "Farbrace",
        username: "lfarbrace1",
        gender: "Female",
        nationality: "PERU",
        favoriteMovies:[]

    },
    {
        id: 3,
        firstName: "Brucie",
        lastName: "Windrum",
        username: "bwindrum2",
        gender: "Male",
        nationality: "PERU",
        favoriteMovies:[]

    },
    {
        id: 4,
        firstName: "Sarge",
        lastName: "Berridge",
        username: "sberridge3",
        gender: "Male",
        nationality: "PORTUGAL",
        favoriteMovies:[]

    },
    {
        id: 5,
        firstName: "Correy",
        lastName: "Wittleton",
        username: "cwittleton4",
        gender: "Male",
        nationality: "INDONESIA",
        favoriteMovies:[]

    },
]
const MovieList = [
    {
        id: 1,
        name: "Interview, The",
        yearOfPublication: "2021",
        isInTheaters: false,
    },
    {
        id: 2,
        name: "Predator",
        yearOfPublication: "2001",
        isInTheaters: false,
    },
    {
        id: 3,
        name: "Watcher in the Woods, The",
        yearOfPublication: "2021",
        isInTheaters: true,
    },
    {
        id: 4,
        name: "Live Wire",
        yearOfPublication: "2021",
        isInTheaters: false,
    },
    {
        id: 5,
        name: "Few of Us",
        yearOfPublication: "2021",
        isInTheaters: false,
    },
]

module.exports = { UserList, MovieList }
