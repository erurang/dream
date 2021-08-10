import { gql, useMutation } from "@apollo/client";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import styled from "styled-components";
import AuthLayout from "../components/auth/AuthLayout";
import BottomBox from "../components/auth/BottomBox";
import Button from "../components/auth/Button";
import FormBox from "../components/auth/FormBox";
import FormError from "../components/auth/FormError";
import Input from "../components/auth/Input";
import PageTitle from "../components/PageTitle";
import { FatLink } from "../components/shared";
import routes from "../routes";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled(FatLink)`
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
`;

function SignUp() {
  const history = useHistory();

  const { register, handleSubmit, formState, clearErrors, getValues } = useForm(
    {
      mode: "onChange",
    }
  );

  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted: (data) => {
      // getValues()를 써도 댐
      const {
        createAccount: { ok, error },
      } = data;

      if (!ok) return;

      const { username, password } = getValues();

      // 히스토리로 메세지보내기 => location으로 받아옴
      history.push(routes.home, {
        message: "Account created. please log in",
        username,
        password,
      });
    },
  });

  const onSubmitValid = (data) => {
    // console.log(data);
    if (loading) return;

    const { username, firstName, lastName, password, email } = data;
    createAccount({
      variables: {
        username,
        firstName,
        lastName,
        password,
        email,
      },
    });
  };

  // console.log(formState.errors);

  return (
    <AuthLayout>
      <PageTitle title="Sign Up" />
      <FormBox>
        <HeaderContainer>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
          <Subtitle>
            Sign up to see photos and videos from your friends.
          </Subtitle>
        </HeaderContainer>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            {...register("firstName", {
              required: true,
              minLength: {
                value: 3,
                message: "firstname shold be longer than 3 char",
              },
            })}
            name="firstName"
            type="text"
            placeholder="First Name"
          />
          <FormError message={formState.errors?.firstName?.message} />
          <Input
            type="text"
            placeholder="Last Name"
            name="lastName"
            {...register("lastName")}
          />
          <Input
            {...register("username", {
              required: true,
              minLength: {
                value: 5,
                message: "username shold be longer than 3 char",
              },
            })}
            name="username"
            type="text"
            placeholder="Username"
          />
          <FormError message={formState.errors?.username?.message} />
          <Input
            {...register("email", {
              required: true,
              minLength: {
                value: 5,
                message: "email should be longer than 5 char'",
              },
              validate: (currentValue) =>
                currentValue.includes("@") ? null : "email include @",
            })}
            name="email"
            type="text"
            placeholder="Email"
          />
          <FormError message={formState.errors?.email?.message} />
          <Input
            {...register("password", { required: true })}
            name="password"
            type="password"
            placeholder="Password"
          />
          <Button
            type="submit"
            value={loading ? "Loading..." : "Sign Up"}
            disabled={!formState.isValid || loading}
          />
        </form>
      </FormBox>
      <BottomBox cta="Have an account?" linkText="Log in" link={routes.home} />
    </AuthLayout>
  );
}

export default SignUp;
