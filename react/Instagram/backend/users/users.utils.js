import jwt from "jsonwebtoken";
import client from "../client";

export const getUser = async (token) => {
  try {
    if (!token) {
      return null;
    }

    // jwt.verify에서 콜백으로 우리가 login.resolvers.js 에서 암호화한 오브젝트 {}를 넘겨줌
    const { id } = jwt.verify(token, process.env.SECRET_KEY); // console.log(verifiedToken);

    const user = await client.user.findUnique({ where: { id } });

    if (user) return user;
    else return null;
  } catch {
    return null;
  }
};

// export const protectResolver = (user) => {
//   // if (!user) throw new Error("You need to login")
//   if (!user) return { ok: false, error: "you need to login" };
// };

export function protectedResolver(ourResolver) {
  return function (root, args, context, info) {
    // console.log(info)
    // 여기서 info의 operation.을 보면 우리가 query/mutation 요청을 확인할수있음.
    // 만약 seeFeed의 경우. [Photo]를 반환하지만, resolver에는 protectedResolver로 묶여서 로그인시에만 확인할수 있도록 되어있음.
    // 만약 로그인 안한사람이 seeFeed를 하면 어떻게되나..? 그럼 => 뻑남 왜냐? 우리는 [Photo]를 반환한다고 말했기 떄문..
    // 그래서 여기서 한번더 조정해준다

    const query = info.operation.operation === "query";
    if (query) return null;
    if (!context.loggedInUser) return { ok: false, error: "Please login" };
    return ourResolver(root, args, context, info);
  };
}
