function Home({ setIsLoggedIn }) {
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => setIsLoggedIn(false)}>Log out now</button>
    </>
  );
}
export default Home;
