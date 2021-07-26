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

export const protectResolver = (user) => {
  // if (!user) throw new Error("You need to login")
  if (!user) return { ok: false, error: "you need to login" };
};
