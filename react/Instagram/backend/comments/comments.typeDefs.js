import { gql } from "apollo-server-express";

export default gql`
  type Comment {
    id: Int!
    user: User!
    photo: Photo!
    comment: String!
    isMe: String!
    createdAt: String!
    updatedAt: String!
  }
`;
