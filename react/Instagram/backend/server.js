import { ApolloServer } from "apollo-server";
import schema from "./schema";

const server = new ApolloServer({
  schema
});

server
  .listen()
  .then(() => console.log("server is running ong http:/localhsot:4000"));
