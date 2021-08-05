import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  accent: "#0095f6",
  borderColor: "rgb(219, 219, 219)",
};

export const darkTheme = {
  fontColor: "white",
  bgColor: "#2c2c2c",
};

export const GlobalStyles = createGlobalStyle`
    // reset css 적용
    ${reset}
    // input의 기본설정사항 off
    input {
      all:unset;
    }
    * {
      box-sizing:border-box;
    }
    // 모든 body에 적용
    body {
      background-color: #FAFAFA;
        font-size:14px;
        font-family:'Open Sans', sans-serif;
        color: rgb(38,38,38);
    }
    a {
      text-decoration: none;
    }
`;
