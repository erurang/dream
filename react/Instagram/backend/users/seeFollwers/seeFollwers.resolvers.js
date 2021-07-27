import client from "../../client";

export default {
  Query: {
    seeFollowers: async (_, { username, page }) => {
      // follower를 탐색하는 2가지방법
      // 만약 이렇게찾는다면 엄청많은수의 데이터가있을때 돌려주면 1억개를 다돌려줌.. ㅈ댐..
      const aFollowers = await client.user
        .findUnique({ where: { username } })
        .followers();
      console.log(aFollowers);

      // where => following 안에서 / some(만족하는) Username을 findMany 많이
      const bFollowers = await client.user.findMany({
        where: { following: { some: { username } } },
      });
      console.log(bFollowers);

      // prisma에서 Pagenation기능을 제공함
      // skip 지나칠데이터
      // take 가져올데이터
      // skip : 0 take: 5 => 5~10번째를 가져옴

      const followers = await client.user
        .findUnique({ where: { username } })
        .followers({
          take: 5,
          skip: (page - 1) * 5,
        });

      return { ok: true, followers };
    },
  },
};
