import styled from "styled-components";
import { FatText } from "../shared";

const CommentContainer = styled.div``;
const CommentCaption = styled.span`
  margin-left: 10px;
`;

function Comment({ author, caption }) {
  return (
    <CommentContainer>
      <FatText>{author}</FatText>
      <CommentCaption>{caption}</CommentCaption>
    </CommentContainer>
  );
}

export default Comment;
