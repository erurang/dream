function Login({ setIsLoggedIn }) {
  return (
    <>
      <h1>Login</h1>
      <button onClick={() => setIsLoggedIn(true)}>Log in now</button>
    </>
  );
}
export default Login;
