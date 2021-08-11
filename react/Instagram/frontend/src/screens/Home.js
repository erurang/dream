import { gql, useQuery } from "@apollo/client";
import { logUserOut } from "../apollo";
import Photo from "../components/feed/Photo";
import PageTitle from "../components/PageTitle";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../framents";

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      id
      createdAt
      isMe
      caption
      ...PhotoFragment
      user {
        username
        avatar
      }
      comments {
        ...CommentFragment
      }
    }
  }
  ${PHOTO_FRAGMENT}
  ${COMMENT_FRAGMENT}
`;

function Home() {
  const { data } = useQuery(FEED_QUERY);
  // console.log(data);

  return (
    <>
      <PageTitle title={"Home"} />
      <div>
        {data?.seeFeed?.map((photo) => (
          <Photo key={photo.id} {...photo} />
        ))}
      </div>
      <button onClick={() => logUserOut()}>Log out now</button>
    </>
  );
}
export default Home;
