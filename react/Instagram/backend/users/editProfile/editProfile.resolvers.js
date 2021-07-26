import bcrypt from "bcrypt";
import client from "../../client";
import { protectedResolver } from "../users.utils";

export default {
  Mutation: {
    editProfile: protectedResolver(async (
      _,
      { firstName, lastName, username, email, password },
      { loggedInUser, protectResolver }
    ) => {
      // console.log("에디트",loggedInUser);
      // 이렇게 하나하나 resolver마다 import해서 적어주는 방식도있지만.. Context로 전역처리를하면 더 편하다
      // 로그인이 안됬을경우를 판별할때 아래와 2가지 경우가 있는데..

      // 1 => new Error로 에러를 터트려서 3번줄 아래로 안내려가게 하는법.
      // if (!loggedInUser) throw new Error("You need to login")
      // 이 방법일때는 아래의 3번에서 id를 hash하고.. 등등의 일을 하지않아서 찾지않지만

      // 2 => 그냥 오브젝트를 리턴해서 3번이 실행되게 만드는 것
      // 위 protectResolver가 if (!loggedInUser) return { ok: false, error: "you need to login" };
      // 이방법이 되었을때는 3번이 성공하든 실패하든(인증이되든 말든) 상관없이 3번이 실행되기때문에
      // "message": "Cannot read property 'id' of null",.. 이런오류를 피할수가 없어짐.

      // 3
      let uglyPassword = null;
      if (password) uglyPassword = await bcrypt.hash(password, 10);

      const updatedUser = await client.user.update({
        where: {
          id: loggedInUser.id,
        },
        data: {
          firstName,
          lastName,
          username,
          email,
          ...(uglyPassword && { password: uglyPassword }),
        },
      });

      if (updatedUser.id) return { ok: true };
      else return { ok: false, error: "Could not update profile" };
    }),
  },
};
