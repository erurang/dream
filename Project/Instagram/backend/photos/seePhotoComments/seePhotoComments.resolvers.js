import client from "../../client";

export default {
  Query: {
    seePhotoComments: (_, { id }) =>
      //   client.photo.findUnique({ where: { id } }).comments(),
      // need pagination
      client.comment.findMany({
        where: { photoId: id },
        orderBy: { createdAt: "asc" },
      }),
  },
};
