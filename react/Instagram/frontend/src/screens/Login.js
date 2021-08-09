import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import routes from "../routes";
import AuthLayout from "../components/auth/AuthLayout";
import Button from "../components/auth/Button";
import Separator from "../components/auth/Separator";
import Input from "../components/auth/Input";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/BottomBox";
import PageTitle from "../components/PageTitle";
import { useForm } from "react-hook-form";
import FormError from "../components/auth/FormError";
import { gql, useMutation } from "@apollo/client";

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      token
      error
    }
  }
`;

function Login() {
  const { register, handleSubmit, formState, getValues, setError } = useForm({
    // 다양한 방법의 유효성검사가있는데
    // onTouched 포커스를 하고잇을때
    // onChagne 값이변할때
    // onBlur 인풋창 밖에서 나갓을때(포커스 나갔을떄)
    // 유효성검사하는 방식이 있음.
    mode: "onChange",
  });

  const [login, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted: (data) => {
      // console.log(data)
      // 우리가 apollo server에 요청한 결과들이 날아옴
      const {
        login: { ok, error, token },
      } = data;

      if (!ok)
        setError("result", {
          message: error,
        });
    },
  });

  // console.log(watch());

  const onSubmitValid = (data) => {
    if (loading) return;

    const { username, password } = getValues();

    login({
      variables: { username, password },
    });
  };
  const onSubmitInvalid = (data) => {
    // console.log(data, "invalid");
  };

  // console.log(formState.isValid);

  return (
    <AuthLayout>
      <PageTitle title="Login" />
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </div>
        <form onSubmit={handleSubmit(onSubmitValid, onSubmitInvalid)}>
          <Input
            {...register("username", {
              // error
              required: "Username Required",
              minLength: {
                value: 5,
                message: "Username should be longer than 5 char",
              },
              validate: (currentValue) => {
                currentValue.includes("potato");
              },
            })}
            hasError={Boolean(formState.errors?.username?.message)}
            name="username"
            type="text"
            placeholder="Username"
          />
          <FormError message={formState.errors?.username?.message} />
          <Input
            {...register("password", { required: "Password Required" })}
            name="password"
            type="password"
            placeholder="Password"
            hasError={Boolean(formState.errors?.password?.message)}
          />
          <FormError message={formState.errors?.password?.message} />
          <Button
            type="submit"
            value={loading ? "Loading..." : "Log in"}
            disabled={!formState.isValid || loading}
          />
          <FormError message={formState.errors?.result?.message} />
        </form>
        <Separator></Separator>
        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>Log in with Facebook</span>
        </FacebookLogin>
      </FormBox>
      <BottomBox
        cta="Don't have an account?"
        linkText="Sign up"
        link={routes.signUp}
      />
    </AuthLayout>
  );
}
export default Login;
