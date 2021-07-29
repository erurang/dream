import client from "../client";

export default {
  Photo: {
    user: ({ userId }) => client.user.findUnique({ where: { id: userId } }),
    hashtags: ({ id }) =>
      client.hashtag.findMany({ where: { photos: { some: { id } } } }),
  },
  Hashtag: {
    totalPhotos: ({ id }) =>
      client.photo.count({
        where: {
          hashtags: {
            some: {
              id,
            },
          },
        },
      }),
    photos: ({ id }, { page }) => {
      console.log(page);
      return client.hashtag
        .findUnique({
          where: {
            id,
          },
        })
        .photos({
          take: 1,
          skip: (page - 1) * 1,
        });
    },
  },
};
