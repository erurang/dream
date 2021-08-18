import { gql } from "apollo-server";

export default gql`
  type Mutation {
    createComment(photoId: Int!, comment: String!): MutationResponse!
  }
`;
