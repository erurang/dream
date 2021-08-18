import { gql } from "apollo-server";

export default gql`
  type Mutation {
    editComment(id: Int!, comment: String!): MutationResponse!
  }
`;
