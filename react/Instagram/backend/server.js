import { ApolloServer, gql } from "apollo-server";

// const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    movies: [Movie]
    movie: Movie
  }

  type Movie {
    title: String
    year: Int
  }

  type Mutation {
      createMovie(title: String!) : Boolean
      deleteMovie(title:String!) : Boolean
  }
`;

const resolvers = {
  Query: {
    movies: () => [],
    movie: () => ({ title: "avengers", year: 2020 }),
  },
  Mutation : {
      createMovie : (root,{title},context,info) => {
          console.log(title);
          return true
      },
      deleteMovie : (root,{title},context,info) => {
        console.log(title);
        return true
    },
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen()
  .then(() => console.log("server is running ong http:/localhsot:4000"));
