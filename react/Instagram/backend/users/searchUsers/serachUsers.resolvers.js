import client from "../../client";

export default {
  Query: {
    searchUsers: async (_, { keyword }) => {
      return await client.user.findMany({
        // startswith는 errrrrurang 일때 errrrrruarng adfafasdfa 뒤까지 다 검색해줌
        where: { username: { startsWith: keyword.toLowerCase() } },
      });
    },
  },
};
