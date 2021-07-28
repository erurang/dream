import client from "../../client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export default {
  Mutation: {
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
        const token = jwt.sign({id : user.id}, process.env.SECRET_KEY)
        
        return {
            ok:true,
            token
        }

    }
  },
};
