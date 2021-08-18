import { gql } from "apollo-server";

export default gql`
  type Mutation {
    # 만약 우리가 대화방에 보낼지.. (이미대화중일때)
    # 아니면 새로운사람에게 방을 새로파서 보낼지 구분을해야함
    # 그렇기떄문에 roomId userId 2개를 받고 ! 필수라고 붙이지는않음
    sendMessage(message: String!, roomId: Int, userId: Int): MutationResponse!
  }
`;
