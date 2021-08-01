import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    createComment: protectedResolver(
      async (_, { photoId, comment }, { loggedInUser }) => {
        // photo exist?

        const ok = await client.photo.findUnique({
          where: {
            id: photoId,
          },
          select: {
            id: true,
          },
        });

        if (!ok) return { ok: false, error: "photo not found" };

        await client.comment.create({
          data: {
            comment,
            photo: {
              connect: {
                id: photoId,
              },
            },
            user: {
              connect: {
                id: loggedInUser.id,
              },
            },
          },
        });

        return { ok: true };
      }
    ),
  },
};
