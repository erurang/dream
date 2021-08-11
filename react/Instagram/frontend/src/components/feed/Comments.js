import styled from "styled-components";
import Comment from "./Comment";

const CommentsContainer = styled.div`
  margin-top: 30px;
`;

const CommentCount = styled.span`
  opacity: 0.7;
  font-size: 10px;
  margin: 10px 0px;
  display: block;
  font-weight: 600;
`;

function Comments({ author, caption, commentsNumber, comments }) {
  return (
    <CommentsContainer>
      <Comment author={author} caption={caption} />
      <CommentCount>댓글 {commentsNumber}개</CommentCount>
      {comments?.map((comment) => (
        <Comment
          key={comment.id}
          author={comment.user.username}
          caption={comment.comment}
        />
      ))}
    </CommentsContainer>
  );
}

export default Comments;
