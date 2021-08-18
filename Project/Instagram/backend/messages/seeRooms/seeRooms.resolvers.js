import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Query: {
    seeRooms: protectedResolver(
      async (_, __, { loggedInUser }) =>
        // 여러방을 찾는데
        await client.room.findMany({
          // 어디에서
          where: {
            // users안에서 모델엔 users[]로 되어있으니
            users: {
              // 고른다
              some: {
                // id가 loggedInUser.id인 방을 돌려준다.
                id: loggedInUser.id,
              },
            },
          },
        })
    ),
  },
};
