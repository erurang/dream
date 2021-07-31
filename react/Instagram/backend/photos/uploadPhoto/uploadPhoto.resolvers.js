import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    uploadPhoto: protectedResolver(
      async (_, { file, caption }, { loggedInUser }) => {
        let hashObj = [];

        if (caption) {
          hashObj = makeHashtags(caption);
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
            ...(hashObj.length > 0 && {
              hashtags: {
                connectOrCreate: hashObj,
              },
            }),
          },
        });
      }
    ),
  },
};
