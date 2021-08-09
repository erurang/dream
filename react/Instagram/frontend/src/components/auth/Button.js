import styled from "styled-components";

const Button = styled.input`
  border: none;
  border-radius: 3px;
  margin-top: 12px;
  background-color: ${(props) => props.theme.accent};
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
  width: 100%;
  opacity: ${(props) => (props.disabled ? 0.2 : 1)};
`;

// function Button(props) {
//   // Prop에는 우리가 상위컴포넌트에 적어준 TYPE =text 뭐 이런것들이 들어감
//   // console.log("button props :", props);
//   // 그래서 sbutoon 만들어논 컴포넌트에 저걸 적용시키는거임
//   return <SButton {...props} />;
// }

export default Button;
