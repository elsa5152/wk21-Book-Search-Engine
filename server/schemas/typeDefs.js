//import qgl function
const { gql } = require('apollo-server-express');

//create typedefs

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    bookId: String!
    authors: [String]
    description: String
    title: String
    image: String
    link: String 
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput): User
    removeBook(bookId: ID!): User
  }
  
  input BookInput {
    authors: [String]
    description: String
    bookId: String
    image: String
    title: String
    link: String
}
  type Auth {
      token: ID!
      user: User
  }
  
  type Query {
    me: User
  }
  
`;

// export the typeDefs
module.exports = typeDefs;