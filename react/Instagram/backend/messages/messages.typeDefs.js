import { gql } from "apollo-server";

export default gql`
  type Room {
    id: Int!
    createdAt: String!
    updatedAt: String!
    user: [User]
    messages: [Message]
  }
  type Message {
    id: Int!
    user: User!
    room: Room!
    message: String!
    createdAt: String!
    updatedAt: String!
  }
`;
