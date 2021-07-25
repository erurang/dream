import { ApolloServer, gql } from "apollo-server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const typeDefs = gql`
  type Query {
    movies: [Movie]
    movie(id: Int!): Movie
  }

  type Movie {
    id: Int!
    title: String!
    year: Int!
    genre: String
    createdAt: String!
    updatedAt: String!
  }

  type Mutation {
    createMovie(title: String!, year: Int!, genre: String): Movie
    deleteMovie(id: Int!): Boolean
  }
`;

const resolvers = {
  Query: {
    movies: () => client.movie.findMany(),
    movie: (_,{id}) => ({ title: "avengers", year: 2020 }),
  },
  Mutation: {
    createMovie: (root, { title, year, gerne }, context, info) =>
      client.movie.create({ data: { title, year, gerne } }),
    deleteMovie: (root, { id }, context, info) => {
      console.log(title);
      return true;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen()
  .then(() => console.log("server is running ong http:/localhsot:4000"));
