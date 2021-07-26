import dotenv from "dotenv";
dotenv.config();
import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./schema";
import { getUser, protectResolver } from "./users/users.utils";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // query를 구성할때의 인자 (root,args,context,info) 중 Context는 모든 Resolver에서 접근이 가능하도록 해줌
  context: async ({ req, res }) => {
    // console.log(req.headers);
    return { loggedInUser: await getUser(req.headers.token), protectResolver };
  },
});

const PORT = process.env.PORT;

server
  .listen(PORT)
  .then(() => console.log(`server is running ong http:/localhsot:${PORT}`));
