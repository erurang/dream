import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    editComment: protectedResolver(
      async (_, { id, comment }, { loggedInUser }) => {
        const needEditComment = await client.comment.findUnique({
          where: { id },
          select: {
            userId: true,
          },
        });

        if (!needEditComment) return { ok: false, error: "comment not found" };
        else if (needEditComment.userId !== loggedInUser.id)
          return { ok: false, error: "not authorized" };

        await client.comment.update({
          where: {
            id,
          },
          data: {
            comment,
          },
        });

        return { ok: true };
      }
    ),
  },
};
