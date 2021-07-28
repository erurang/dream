import { gql } from "apollo-server";

export default gql`
  type User {
    id: String!
    firstName: String!
    lastName: String
    username: String!
    email: String!
    createdAt: String!
    updatedAt: String!
    bio : String
    avatar : String
    following : [User]
    followers : [User]
    # Computed Fields
    # graphql schema에는 존재하나 prisma db에는 정의되지않아
    # req 요청이 있을때마다 로직이 가능한 영역을 말함.
    # (root,args,context,info) 중 Root영역에서 사용함
    # 요청이 들어온다 -> 그래프큐엘이 해당하는 요청의 디비를 본다 -> 아래의 값들은 db에 정의되어있지않다.
    # 그러면 다음으로 이 타입의 resolver가 정의되어있는지 확인한다.
    totalFollowing : Int!
    totalFollowers: Int!
    isMe : Boolean!
    # isFollowing : Boolean!
  }
`;
