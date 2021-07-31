import client from "../client";

export default {
  User: {
    // db에서 데이터를 못찾은 graphql은 type User로 명시된 Resolver를 찾는다
    totalFollowing: ({ id }, args, context, info) => {
      console.log(id);
      return client.user.count({
        where: {
          followers: {
            some: {
              id,
            },
          },
        },
      });

      // 우리가 seeProfile(username:"제로") 로 totalFollowing을 호출을했을때
      // root에서는 아래와 같은결과가 출력이된다.
      // 즉 요청한 User 모델이 반환이 된다.
      /*
          {
      id: 1,
      firstName: 'erurang',
      lastName: '가나',
      username: '제로',
      email: 'erurang@naver.com',
      bio: 'test',
      avatar: 'http://localhost:4000/static/1-1627324409672-스크린샷 2021-07-23 오후 5.00.44.png',
      password: '$2b$10$a0/7EaaHrfPZKzYibKOqNu9E5vLkaUe0TLUzZmeQFf2PrKIDQp.UO',
      createdAt: 2021-07-25T18:14:27.128Z,
      updatedAt: 2021-07-27T08:12:55.671Z,
      console.log(root.username);
       */
    },
    totalFollowers: ({ id }) => {
      return client.user.count({ where: { following: { some: { id } } } });
    },

    isMe: ({ id }, args, { loggedInUser }) => {
      if (id === loggedInUser?.id) return true;
      else return false;
    },

    isFollowing: async ({ id }, _, { loggedInUser }) => {
      if (!loggedInUser) return false;

      const exists = await client.user.count({
        where: { username: loggedInUser.id, following: { some: { id } } },
      });

      return Boolean(exists);
    },
    photos: ({ id }) => client.user.findUnique({ where: { id } }).photos(),
  },
};
