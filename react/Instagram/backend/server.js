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
  // 여기서 onConnect를 하는이유, 우리가 localhost:graphql로 요청을 할때 우리는 사용자 인증을 위해 헤더에 토큰을 지정해주었음
  // 하지만 이것은 http요청일때의 토큰이지, ws에서는 이 토큰이 먼지 모름. 그래서 아래에서 http요청인 (req,res) context에서 if(req)라면! => http를 이용한다면 req.header.token을 건네준거임.
  // 즉 웹소켓도 사용자 인증을 받기위해서 onConnect를 이용함. 여기선 params안에 우리가 header에 지정한 토큰이 적혀있음.
  // subscription에서 return이 되는건 똑같이 context의 전역변수로 들어가게됨
  subscriptions: {
    onConnect: async ({ token }) => {
      // console.log(params);
      if (!token) throw new Error("you cant listen");

      const loggedInUser = await getUser(token);
      // console.log(user);
      return { loggedInUser };
    },
  },
  // query를 구성할때의 인자 (root,args,context,info) 중 Context는 모든 Resolver에서 접근이 가능하도록 해줌
  context: async (ctx) => {
    // 우리는 위에서 onConnect에서 인자를 넘기면 컨텍스트에 자동 저장되는걸 알았음.
    // 그럼사용해보자
    // http일때;
    if (ctx.req)
      return {
        // console.log(req.headers);
        loggedInUser: await getUser(ctx.req.headers.token),
      };
    else {
      // 우리가 onConnect에서 리턴한 user는 connection의 context에 아래처럼 저장이됨.
      // console.log(ctx);
      /**
  connection: {...
    context: { loggedInUser: [Object] },
    ...
  },
  payload: {...}
} */
      const {
        connection: { context },
      } = ctx;

      return { loggedInUser: context.loggedInUser };
    }
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
