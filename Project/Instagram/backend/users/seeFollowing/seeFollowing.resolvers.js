import client from "../../client";

export default {
  Query: {
    seeFollowing: async (_, { username, cursor }) => {
      const ok = await client.user.findUnique({
        where: { username },
        select: { id: true },
      });

      if (!ok) return { ok: false, error: "User not found" };

      // cursor pagination방식은 db에 마지막으로 본것이 어디인지 알려줘서 거기서부터 다시 로딩받는 방식임
      // 이방법은 무한스크롤 방식일때 유용함.
      // 1 2 3 4 5 6 7 8 ... 의 db가 존재할때
      // Take 4로 4번까지 받아오면. 디비에 마지막으로 본것이 4라는 db라고 알리기 위해 커서를 4로 지정한다. 5부터 받아오는 방식임.
      // 단점은 특정페이지로 바로 넘어갈수가없음. 왜냐 이전에 로딩되었던 마지막 db를 기준으로 데이터를 받아오기때문에

      const following = await client.user
        .findUnique({ where: { username } })
        .following({
          // 한번에 가져올 데이터
          take: 5,
          // 만약 커서
          skip: cursor ? 1 : 0,
          ...(cursor && { cursor: { id: cursor } }),
        });
      return { ok: true, following };
    },
  },
};
