const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "bebe",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server
  .listen()
  .then(() => console.log("server is running ong http:/localhsot:4000"));
