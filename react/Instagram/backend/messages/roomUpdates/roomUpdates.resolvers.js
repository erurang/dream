import { withFilter } from "apollo-server";
import client from "../../client";
import { NEW_MESSAGE } from "../../constants";
import pubsub from "../../pubsub";

export default {
  Subscription: {
    roomUpdates: {
      // trigger를 listen 하게해줌
      // New_MESSAGE 트리거가 발생하면 반응하게사는뜻.
      //   subscribe: () => pubsub.asyncIterator(NEW_MESSAGE),
      // 첫인자는 트리거, 두번째 인자는 true를 반환하면 업데이트를함

      // 우리가 방이 존재하는지? 안존재하는지 먼저 거르기위해서 이렇게만듬
      subscribe: async (root, args, context, info) => {
        // server에 설정후
        // console.log("ws auth :", context);

        const room = await client.room.findFirst({
          where: {
            id: args.id,
            users: {
              some: {
                id: context.loggedInUser.id,
              },
            },
          },
          select: {
            id: true,
          },
        });

        // if (!room) return null; // Message! 가아니라 Message기 때문에 Null을 리턴해도 상관은없음 하지만 subscription 자체에서 null을 받을수 없음. 그래서 에러를 던져서 처리함
        if (!room) throw new Error("you shall not see this.");

        // 근데 이렇게 리턴되면 우리는 앞에서 배웟던 커링 패턴처럼 withfilter()의 함수가 리턴이됨.
        // 즉 앞에서는 subscribe : withFilter(...) 로 return payload.roomUpdates.roomId === variables.id;의 리턴값으로 true/false를 받아서 이벤트처리를 했으나
        // 아래처럼 적을시에는 subscribe : withFilter() 로 함수를 돌려받게되어 subscription filed must return Async Iterable. Received : [function] 오류가 뜸
        // (root,args,context,info) 그래서 이걸 전달함..?
        return withFilter(
          () => pubsub.asyncIterator(NEW_MESSAGE),
          (payload, variables) => {
            return payload.roomUpdates.roomId === variables.id;
          }
        )(root, args, context, info);
      },

      //   subscribe: withFilter(
      //     () => pubsub.asyncIterator(NEW_MESSAGE),
      //     (payload, variables) => {
      //       /*
      //         console.log(payload, variables);

      //         payload
      //         {
      //         roomUpdates: {
      //             id: 12,
      //             createdAt: 2021-08-03T11:43:56.180Z,
      //             updatedAt: 2021-08-03T11:43:56.181Z,
      //             message: '펍섭 테스트4',
      //             userId: 2,
      //             roomId: 9,
      //             read: false
      //         }
      //         }
      //         variables
      //         { id: 9 }
      //         */

      //       // 여기서 우리는 구독을할때 특정방에 구독을 하고, 그후에 아래조건에 부합한다면. 그때 우리는 이벤트를 실행시킴.
      //       return payload.roomUpdates.roomId === variables.id;
      //     }
      //   ),
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
