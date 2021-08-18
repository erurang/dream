import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    readMessage: protectedResolver(async (_, { id }, { loggedInUser }) => {
      // id는 메세지의 id
      const message = await client.message.findFirst({
        where: {
          // 메세지 id의 테이블에
          id,
          // 유저아이디가
          userId: {
            // 현재접속한 유저아이디가 아닌 걸고르고
            not: loggedInUser.id,
          },
          // 대화방에서
          room: {
            // 유저안에
            users: {
              some: {
                // 나인걸 고른다.
                id: loggedInUser.id,
              },
            },
          },
        },
        select: {
          id: true,
        },
      });

      if (!message) return { ok: false, error: "message not found" };

      await client.message.update({
        where: {
          id,
        },
        data: {
          read: true,
        },
      });

      return { ok: true };
    }),
  },
};
