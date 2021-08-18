import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
import { makeHashtags } from "../photos.utils";

export default {
  Mutation: {
    editPhoto: protectedResolver(
      async (_, { id, caption }, { loggedInUser }) => {
        const ok = await client.photo.findFirst({
          where: { id, userId: loggedInUser.id },
          include: {
            hashtags: {
              select: {
                hashtag: true,
              },
            },
          },
        });

        console.log(ok);
        if (!ok) return { ok: false, error: "Photo not found" };

        await client.photo.update({
          where: {
            id,
          },
          data: {
            caption,
            // 캡션이 변경되면 해쉬태그도 다시.. 재정의
            hashtags: {
              disconnect: ok.hashtags,
              connectOrCreate: makeHashtags(caption),
            },
          },
        });

        return { ok: true };
      }
    ),
  },
};
