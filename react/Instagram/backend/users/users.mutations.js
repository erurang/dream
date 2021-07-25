import client from "../client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

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
        return client.user.create({
          data: {
            username,
            email,
            firstName,
            lastName,
            password: uglyPassword,
          },
        });

        // if they are not / hash password

        // save and return the user
      } catch (error) {
        return error;
      }
    },
    login : async (_,{username,password}) => {
        // 1. finduser with args.username
        const user = await client.user.findFirst({where:{username}})
        if(!user) {
            return {
                ok: false,
                error: "User not found"
            }
        }
        // 2. check password with args.password
        const passwordOk = await bcrypt.compare(password,user.password) // true or false // console.log(passwordOk);
        if(!passwordOk) {
            return {
                ok:false,
                error: "Incorrect password"
            }
        }
        // 1 && 2 => send token user // npm i jsonwebtoken
        const token = await jwt.sign({id : user.id}, process.env.SECRET_KEY)
        
        return {
            ok:true,
            token
        }

    }
  },
};
