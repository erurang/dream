import dotenv from "dotenv";
dotenv.config();
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./schema";
import { getUser } from "./users/users.utils";
import express from "express";
import morgan from "morgan";
import { graphqlUploadExpress } from "graphql-upload";

import http from "http";

const PORT = process.env.PORT;

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  uploads: false,
  // query를 구성할때의 인자 (root,args,context,info) 중 Context는 모든 Resolver에서 접근이 가능하도록 해줌
  context: async ({ req, res }) => {
    // http일때
    if (req)
      return {
        loggedInUser: await getUser(req.headers.token),
      };
    // console.log(req.headers);
  },
});

const app = express();

app.use(morgan("tiny"));
app.use("/static", express.static("uploads"));
app.use(graphqlUploadExpress());

// 아폴로서버에 express서버와 함께 작동하도록 넘김
apollo.applyMiddleware({ app });

// subsceription ws소켓연결
const httpServer = http.createServer(app);
//
apollo.installSubscriptionHandlers(httpServer);

httpServer.listen({ port: PORT }, () =>
  console.log(`server is running ong http:/localhsot:${PORT}`)
);
