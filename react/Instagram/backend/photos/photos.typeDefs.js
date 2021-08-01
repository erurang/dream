import { gql } from "apollo-server-express";

export default gql`
  type Photo {
    id: Int!
    user: User!
    createdAt: String!
    updatedAt: String!
    file: String!
    caption: String
    hashtags: [Hashtag]
    # computed
    likes: Int!
    isMe: Boolean!
  }

  type Hashtag {
    id: Int!
    createdAt: String!
    updatedAt: String!
    hashtag: String!
    photos(page: Int!): [Photo]
    totalPhotos: Int!
  }

  type Like {
    id: Int!
    createdAt: String!
    updatedAt: String!
    photo: Photo!
  }
`;

// 모듈을 나눌때의 생각
// 해쉬태그는 사진모듈안에 존재해야할까?
// ㅇㅇ 사진이있어야 해쉬태그를달수있으니
// 그럼 댓글은? 사진이 있어야 달수있다.
// 그럼 좋아요는? 사진이 없어도 댓글에 좋아요를 할수있다
// 그럼 댓글은 따로 관리하는게 맞다.
