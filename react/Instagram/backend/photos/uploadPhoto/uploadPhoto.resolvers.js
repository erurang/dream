import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    uploadPhoto: protectedResolver(
      async (_, { file, caption }, { loggedInUser }) => {
        let engHashtagObj = [];
        let korHashtagObj = [];

        if (caption) {
          // parse hashtag
          // #으로 시작하는 [ 전체 ] +뒤로이어지는 /g 모든곳
          // /#[\w]+/g
          const engHashtag = caption.match(/#[\w]+/g);
          const korHashtag = caption.match(/#[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\w]+/g);

          console.log(engHashtag);
          console.log(korHashtag);

          engHashtagObj = engHashtag.map((hashtag) => ({
            where: { hashtag },
            create: { hashtag },
          }));

          korHashtagObj = korHashtag.map((hashtag) =>
            engHashtagObj.push({
              where: { hashtag },
              create: { hashtag },
            })
          );
        }

        return client.photo.create({
          data: {
            file,
            caption,
            user: {
              connect: {
                id: loggedInUser.id,
              },
            },
            ...(engHashtagObj.length > 0 && {
              hashtags: {
                connectOrCreate: engHashtagObj,
              },
            }),
          },
        });
      }
    ),
  },
};
