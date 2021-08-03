import { withFilter } from "apollo-server";
import { NEW_MESSAGE } from "../../constants";
import pubsub from "../../pubsub";

export default {
  Subscription: {
    roomUpdates: {
      // trigger를 listen 하게해줌
      // New_MESSAGE 트리거가 발생하면 반응하게사는뜻.
      //   subscribe: () => pubsub.asyncIterator(NEW_MESSAGE),
      // 첫인자는 트리거, 두번째 인자는 true를 반환하면 업데이트를함
      subscribe: withFilter(
        () => pubsub.asyncIterator(NEW_MESSAGE),
        (payload, variables) => {
          /*
            console.log(payload, variables);

            payload
            {
            roomUpdates: {
                id: 12,
                createdAt: 2021-08-03T11:43:56.180Z,
                updatedAt: 2021-08-03T11:43:56.181Z,
                message: '펍섭 테스트4',
                userId: 2,
                roomId: 9,
                read: false
            }
            } 
            variables
            { id: 9 }
            */

          // 여기서 우리는 구독을할때 특정방에 구독을 하고, 그후에 아래조건에 부합한다면. 그때 우리는 이벤트를 실행시킴.
          return payload.roomUpdates.roomId === variables.id;
        }
      ),
      /**
       * 그런데 이대로 subscription {
       *                roomUpdates{
       *                    message}
       *                }
       * 쿼리를 날리면 아래와 같은 오류가뜸
       * 
       {
            "error": "Could not connect to websocket endpoint ws://localhost:4000/graphql. Please check if the endpoint url is correct."
        }
       * 
       우리의 server.js에는 현재 http연결만 가지고있으니 server.js에
       ws와 연결시켜줘야함 왜냐 http는 상태를가지고있지않기때문에
       */
    },
  },
};
