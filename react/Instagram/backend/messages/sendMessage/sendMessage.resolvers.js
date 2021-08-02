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
        if (userId) {
          // 유저를 찾고
          const user = await client.user.findUnique({
            where: {
              id: userId,
            },
            select: {
              id: true,
            },
          });
          // 유저가 존재안하면 유저가없어 오류!
          if (!user) return { ok: false, error: "this user not exist" };

          // 유저가 존재하면 방을만들자
          room = client.room.create({
            data: {
              users: {
                connect: [
                  // 이 둘을 연결함
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

          // 방을 만들었으니 메세지를 넘기자
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
        // 메세지를 보냄
        await client.message.create({
          data: { message },
          room: {
            // 방을 연결시키고
            connect: {
              id: room.id,
            },
          },
          //
          users: {
            connect: {
              id: loggedInUser.id,
            },
          },
        });

        return { ok: true };
      }
    ),
  },
};
