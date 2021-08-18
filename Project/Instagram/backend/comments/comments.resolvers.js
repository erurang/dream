export default {
  Comment: {
    isMe: ({ userId }, _, { loggedInUser }) => {
      if (userId === loggedInUser?.id) return true;
      else return false;
    },
  },
};
