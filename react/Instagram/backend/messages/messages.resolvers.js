import client from "../client";

export default {
  Room: {
    users: ({ id }) => client.room.findUnique({ where: { id } }).users(),
    messages: ({ id }) => client.message.findMany({ where: { roomId: id } }),
    unreadCount: ({ id }, _, { loggedInUser }) => {
      if (!loggedInUser) return 0;
      return client.message.count({
        where: {
          // 안읽은 메세지중에
          read: false,
          // 방의 아이디가 내가 찾는 방의 아이디이면서
          roomId: id,
          // 유저는 내가 not : loggedInUser.id가 아닌
          user: {
            id: {
              not: loggedInUser.id,
            },
          },
        },
      });
    },
  },
  Message: {
    user: ({ id }) => client.message.findUnique({ where: { id } }).user(),
  },
};
