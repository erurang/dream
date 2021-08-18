import client from "../../client";
import { uploadToS3 } from "../../shared/shared.utils";
import { protectedResolver } from "../../users/users.utils";
import { makeHashtags } from "../photos.utils";

export default {
  Mutation: {
    uploadPhoto: protectedResolver(
      async (_, { file, caption }, { loggedInUser }) => {
        let hashObj = [];

        if (caption) {
          hashObj = makeHashtags(caption);
        }

        const fileUrl = await uploadToS3(file, loggedInUser.id, "uploads");

        return client.photo.create({
          data: {
            file: fileUrl,
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
