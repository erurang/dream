import client from "../../client";
import bcrypt from "bcrypt";

export default {
  Mutation: {
    createAccount: async (
      _,
      { firstName, lastName, username, email, password }
    ) => {
      try {
        // check if username or email are already on DB.

        const existingUser = await client.user.findFirst({
          where: {
            OR: [
              {
                username,
              },
              {
                email,
              },
            ],
          },
        });
        // console.log(existingUser); // 존재하지않으면 null
        if (existingUser) {
          throw new Error("This username or email is already taken");
        }

        // think about sign up / sign in (password)
        // Create account:
        // 1234 => fn(1234) (hashing) => aawerawerqwrw save on DB
        // Login account :
        // 1234 => fn(1234) (hashing) => if (create account DB === hashing result) => logged in
        // to hashing passwrod => npm i bcrypt

        const uglyPassword = await bcrypt.hash(password, 10); // save this on db
        // console.log(uglyPassword);

        // if you want to check about making account, npx prisma studio
        await client.user.create({
          data: {
            username,
            email,
            firstName,
            lastName,
            password: uglyPassword,
          },
        });

        return { ok: true}

        // if they are not / hash password

        // save and return the user
      } catch (error) {
        return error;
      }
    },
    
  },
};
