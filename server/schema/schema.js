const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList } = graphql;
const books = require('./data.js');
const _ = require('lodash');

// var books = [
//     {
//         name: 'Adwaita Raj Modak', genre: 'Thriller', id: '1', authorId: '1'
//     },
//     {
//         name: 'The Dark Tower', genre: 'Fantasy', id: '2', authorId: '2'
//     },
//     {
//         name: 'The Long Earth', genre: 'Sci-Fi', id: '3', authorId: '3'
//     },

// ];

var authors = [
    {
        name: 'Adwaita Raj Modak', age: 44, id: '1'

    },
    {
        name: 'Stephen King', age: 72, id: '2'
    },
    {
        name: 'Terry Pratchett', age: 66, id: '3'
    },
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                console.log(parent);
                return _.find(authors, { id: parent.authorId });
            }

        }

    })
});



const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return _.filter(books, { authorId: parent.id })
            }

        }

    })
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // code to get data from db / other source
                return _.find(books, { id: args.id });
            }

        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return _.find(authors, { id: args.id })
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return books;
            }

        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {
                return authors;
            }

        }

    }

})


module.exports = new GraphQLSchema({
    query: RootQuery
})