import { logUserOut } from "../apollo";

function Home() {
  return (
    <>
      <h1>Welcom</h1>
      <button onClick={() => logUserOut()}>Log out now</button>
    </>
  );
}
export default Home;
