import AWS from "aws-sdk";

AWS.config.update({
  credentials: {
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
  },
});

export const uploadToS3 = async (file, userId, folderName) => {
  // upload

  const { filename, createReadStream } = await file;
  const readStream = createReadStream();
  const objectName = `${folderName}/${userId}-${Date.now()}-${filename}`;

  // etag location key bucket... 이 리턴됨
  /*
  {
  ETag: '"cd126892d9f949ec956e4d60f7a26e04"',
  Location: 'https://instagram-clone-update.s3.amazonaws.com/avatars/2-1627827521341-%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-07-31%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.58.33.png',
  key: 'avatars/2-1627827521341-스크린샷 2021-07-31 오후 5.58.33.png',
  Key: 'avatars/2-1627827521341-스크린샷 2021-07-31 오후 5.58.33.png',
  Bucket: 'instagram-clone-update'
}
  */
  // console.log(upload);
  const { Location } = await new AWS.S3()
    .upload({
      //file (stream), bukket name
      Bucket: "instagram-clone-update",
      // 아마존에 저장될 file name
      Key: objectName,
      // 이파일을 아무나 읽을수있음
      ACL: "public-read",
      //
      Body: readStream,
    })
    .promise();

  return Location;
};
