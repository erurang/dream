import React from "react";
import styled from "styled-components";
import { FatText } from "../shared";
import { Link } from "react-router-dom";

const CommentContainer = styled.div``;
const CommentCaption = styled.span`
  margin-left: 10px;
  a {
    background-color: inherit;
    color: ${(props) => props.theme.accent};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function Comment({ author, caption }) {
  // const cleanedCaption = sanitizeHtml();
  // 이방법도 좋지만 우리는 html을 링크로 넘기는것이기때문에..
  // 리액트에서 컴포넌트를 넘길수가없음. 왜냐 html만 파싱하니까
  // 이런방법도 있따는건 알아두면댐
  // caption.replace(/#[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\w]+/g, "<mark>$&</mark>"),
  // { allowedTags: ["mark"] }

  return (
    <CommentContainer>
      <FatText>{author}</FatText>
      <CommentCaption>
        {caption.split(" ").map((word, i) =>
          /#[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\w]+/.test(word) ? (
            <React.Fragment key={i}>
              <Link key={i} to={`/hashtags/${word}`}>
                {word}
              </Link>{" "}
            </React.Fragment>
          ) : (
            <React.Fragment key={i}>{word} </React.Fragment>
          )
        )}
      </CommentCaption>
    </CommentContainer>
  );
}

export default Comment;
