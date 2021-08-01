import { gql } from "apollo-server-express";

export default gql`
  type Comment {
    id: Int!
    user: User!
    photo: Photo!
    comment: String!
    isMe: Boolean!
    createdAt: String!
    updatedAt: String!
  }
`;
