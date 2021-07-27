import client from "../../client";

export default {
  Query: {
    seeFollowers: async (_, { username, page }) => {
      const ok = await client.user.findUnique({
        where: { username },
        // select { id: true } 를 안해주면 user의 모든정보를 가져옴. 
        // 우리는 id가 존재하는지만 확인하면됨. 그래서 필요한 영역만 select해서 가져옴
        select: { id: true },
      });
      console.log(ok);
      if (!ok) return { ok: false, error: "User not found" };
      // follower를 탐색하는 2가지방법
      // 만약 이렇게찾는다면 엄청많은수의 데이터가있을때 돌려주면 1억개를 다돌려줌.. ㅈ댐..
      //   const aFollowers = await client.user
      //     .findUnique({ where: { username } })
      //     .followers();
      //   console.log(aFollowers);

      // where => following 안에서 / some(만족하는) Username을 findMany 많이
      //   const bFollowers = await client.user.findMany({
      //     where: { following: { some: { username } } },
      //   });
      //   console.log(bFollowers);

      // prisma에서 Pagenation기능을 제공함
      // skip 지나칠데이터
      // take 가져올데이터
      // skip : 0 take: 5 => 5~10번째를 가져옴

      // offset pagination방식인데 이방식은 skip을 무조건해야해서 앞에 20만개가있으면 20만번 데이터베이스가 거친다음에 take로 데이터를 넘겨주게됨
      // 이방법은 페이지가 몇개인지 알수있는.. 1~10 이럴때 유용함
      const followers = await client.user
        .findUnique({ where: { username } })
        .followers({
          take: 5,
          skip: (page - 1) * 5,
        });

      const totalFollowers = await client.user.count({
        where: { following: { some: { username } } },
      });

      return { ok: true, followers, totalPages: Math.ceil(totalFollowers / 5) };
    },
  },
};
