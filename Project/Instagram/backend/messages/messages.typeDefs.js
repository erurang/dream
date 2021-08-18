import { gql } from "apollo-server";

export default gql`
  type Room {
    id: Int!
    createdAt: String!
    updatedAt: String!
    users: [User]
    messages: [Message]
    unreadCount: Int!
  }
  type Message {
    id: Int!
    user: User!
    room: Room!
    message: String!
    createdAt: String!
    updatedAt: String!
    read: Boolean!
  }
`;
