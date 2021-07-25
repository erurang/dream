import client from "../client";


export default {
  Mutation: {
    createAccount: async (
      _,
      { firstName, lastName, username, email, password }
    ) => {
        // check if username or email are already on DB.
        
        const existingUser = await client.user.findFirst({
            where : {
                OR : [
                    {
                        username
                    },
                    {
                        email
                    }
                ]

            }
        })
        // console.log(existingUser); // 존재하지않으면 null
        
        // if they are not / hash password

        // save and return the user
        

    },
  },
};
