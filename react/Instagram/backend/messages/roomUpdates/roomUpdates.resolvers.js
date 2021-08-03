import { NEW_MESSAGE } from "../../constants";
import pubsub from "../../pubsub";

export default {
  Subscription: {
    roomUpdates: {
      // trigger를 listen 하게해줌
      // New_MESSAGE 트리거가 발생하면 반응하게사는뜻.
      subscribe: () => pubsub.asyncIterator(NEW_MESSAGE),
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
