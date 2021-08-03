import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    sendMessage: protectedResolver(
      async (_, { message, roomId, userId }, { loggedInUser }) => {
        let room = null;
        // 방만들떄의 형식
        // sendMessage("message",roomid,userid) -> userid가 온다는것은 처음 대화한다는뜻 -> 방을파야함
        // 만약에 유저가 존재하면 ..
        // userId 가 존재하면 방을 새로파야한다는뜻

        // 근데 룸부터 찾아보자
        // 만약에 이미 내가 이 상대방과의 방이 있으면..? 그땐 방을 만들필요가없지.

        if (userId) {
          // 유저가 존재하나?
          const user = await client.user.findUnique({
            // 유저아이디인 곳에서
            where: {
              id: userId,
            },
            // 아이디정보만 받아옴
            select: {
              id: true,
            },
          });

          // 유저가 존재안하면 유저가없어 오류!
          if (!user) return { ok: false, error: "this user not exist" };

          // 유저가 존재하면 대화방을만들자
          room = await client.room.create({
            data: {
              users: {
                connect: [
                  {
                    id: userId,
                  },
                  {
                    id: loggedInUser.id,
                  },
                ],
              },
            },
          });
        } else if (roomId) {
          room = await client.room.findUnique({
            where: {
              id: roomId,
            },
            select: {
              id: true,
            },
          });
          if (!room) return { ok: false, error: "room not found" };
        }
        await client.message.create({
          data: {
            message,
            room: {
              connect: {
                id: room.id,
              },
            },
            user: {
              connect: {
                id: loggedInUser.id,
              },
            },
          },
        });
        return {
          ok: true,
        };
      }
    ),
  },
};
