import client from "../../client";

export default {
  Query: {
    seePhotoLikes: async (_, { id }) => {
      const likes = await client.like.findMany({
        where: { photoId: id },
        // user 영역을 선택해서 가져옴.
        // true는 전체영역
        // 일부를 고를려면 user : { username : true ... }
        select: { user: true },
        // select를 했을때는 받고싶은 데이터를 리턴함 여기서는 유저를 선택햇으니 유저정보를 가져옴
        /*
        [
            {
                user: {
                id: 2,
                firstName: '첫',
                lastName: '막',
                username: '테스트',
                email: 'erurang',
                bio: null,
                avatar: null,
                password: '$2b$10$t4yL6B.//zq0ff0VD0TgleFG0VUTr1FIxIFuCUUbklPC.NMagRHH6',
                createdAt: 2021-07-29T07:05:14.648Z,
                updatedAt: 2021-07-29T07:05:14.648Z
                }
            }
        ]
         */
        // 하지않았을때는 사진에 대한 정보만 가져오고
        /*
        [
            {
                id: 2,
                createdAt: 2021-07-31T15:01:42.520Z,
                updatedAt: 2021-07-31T15:01:42.521Z,
                photoId: 1,
                userId: 2
            }
        ]
         */
        // include를 했을때는 두개 모두 포함된 정보를 리턴함
        /*
        [
            {
                id: 2,
                createdAt: 2021-07-31T15:01:42.520Z,
                updatedAt: 2021-07-31T15:01:42.521Z,
                photoId: 1,
                userId: 2,
                user: {
                id: 2,
                firstName: '첫',
                lastName: '막',
                username: '테스트',
                email: 'erurang',
                bio: null,
                avatar: null,
                password: '$2b$10$t4yL6B.//zq0ff0VD0TgleFG0VUTr1FIxIFuCUUbklPC.NMagRHH6',
                createdAt: 2021-07-29T07:05:14.648Z,
                updatedAt: 2021-07-29T07:05:14.648Z
                }
            }
        ]
         */
      });
      //   console.log(likes);
      console.log(likes.map((n) => n));
      return likes.map((n) => n.user);
    },
  },
};
