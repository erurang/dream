import { isLoggedInVar } from "../apollo";
import styled from "styled-components";
import { darkModeVar } from "../apollo";

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

function Login() {
  return (
    <Container>
      <Title>Login</Title>
      <button onClick={() => isLoggedInVar(true)}>Log in now</button>
      <button onClick={() => darkModeVar(true)}>to dark</button>
      <button onClick={() => darkModeVar(false)}>to light</button>
    </Container>
  );
}
export default Login;
