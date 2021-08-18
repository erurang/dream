import { gql } from "apollo-server";

export default gql`
  type Subscription {
    #   이렇게하면 우린 모든이벤트를 다 받게됨
    # roomUpdates: Message
    # 그래서 이러게 조정해준다
    # 우리가 받고싶어하는 대화방만 구독하겠다.
    roomUpdates(id: Int!): Message
  }
`;
