import bcrypt from "bcrypt";
import client from "../../client";

export default {
  Mutation: {
    editProfile: async (
      _,
      { firstName, lastName, username, email, password },
      { loggedInUser }
    ) => {
      
      // console.log("에디트",loggedInUser);

      let uglyPassword = null;

      if (password) {
        uglyPassword = await bcrypt.hash(password, 10);
      }

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
    },
  },
};
