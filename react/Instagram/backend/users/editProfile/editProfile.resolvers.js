import bcrypt from "bcrypt";
import client from "../../client";
import jwt from "jsonwebtoken";

export default {
  Mutation: {
    editProfile: async (
      _,
      { firstName, lastName, username, email, password } , {token}
    ) => {
      
      // jwt.verify에서 콜백으로 우리가 login.resolvers.js 에서 암호화한 오브젝트 {}를 넘겨줌
      const { id } = await jwt.verify(token, process.env.SECRET_KEY); // console.log(verifiedToken);
      console.log(token);


      let uglyPassword = null;

      if (password) {
        uglyPassword = await bcrypt.hash(password, 10);
      }

      const updatedUser = await client.user.update({
        where: {
          id,
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
    },
  },
};
