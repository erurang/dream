export const makeHashtags = (caption) => {
  // parse hashtag
  // #으로 시작하는 [ 전체 ] +뒤로이어지는 /g 모든곳
  // /#[\w]+/g

  const hashtags = caption.match(/#[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\w]+/g) || [];

  return hashtags.map((hashtag) => ({
    where: { hashtag },
    create: { hashtag },
  }));

  //   if (hashtags) {
  //     return hashtags.map((hashtag) => ({
  //       where: { hashtag },
  //       create: { hashtag },
  //     }));
  //   }
  //   return [];
};
