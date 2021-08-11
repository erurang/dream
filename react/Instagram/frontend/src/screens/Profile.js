import { useParams } from "react-router-dom";
function Profile() {
  const { username } = useParams();
  console.log(username);
  return <h1>dd</h1>;
}

export default Profile;
