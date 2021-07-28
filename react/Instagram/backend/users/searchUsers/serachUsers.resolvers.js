import client from "../../client";

export default {
  Query: {
    searchUsers: async (_, { keyword, cursor }) => {
      const user = await client.user.findMany({
        where: { username: { startsWith: keyword.toLowerCase() } },
        orderBy: { id: "asc" },
        select: { id: true },
        take : 4,
        skip : cursor ? 1 : 0,
        ...(cursor && { cursor : { id : cursor}})
      });


      return user

      


      //   return await client.user.findMany({
      //     // startswith는 errrrrurang 일때 errrrrruarng adfafasdfa 뒤까지 다 검색해줌
      //     where: { username: { startsWith: keyword.toLowerCase() } },
      //   });
    },
  },
};
