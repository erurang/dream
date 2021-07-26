import dotenv from "dotenv"
dotenv.config()
import { ApolloServer } from "apollo-server";
import schema from "./schema";

const server = new ApolloServer({
  schema,
  // query를 구성할때의 인자 (root,args,context,info) 중 Context는 모든 Resolver에서 접근이 가능하도록 해줌
  context : {
    "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI3Mjg1NTgxfQ.saksKnWRwZ3O_yg_9SOxaI3o7qHUeeYHCWCS3af5ffc"
  }
});

const PORT = process.env.PORT

server
  .listen(PORT)
  .then(() => console.log(`server is running ong http:/localhsot:${PORT}`));
