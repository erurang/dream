import styled from "styled-components";
import Comment from "./Comment";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import useUser from "../../hooks/useUser";

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

const CREATE_COMMENT_MUTATION = gql`
  mutation createComment($photoId: Int!, $comment: String!) {
    createComment(photoId: $photoId, comment: $comment) {
      ok
      error
      id
    }
  }
`;

function Comments({ author, caption, commentsNumber, comments, photoId }) {
  const { register, handleSubmit, setValue, getValues } = useForm();

  const { data: userData } = useUser();

  const createCommentUpdate = (cache, result) => {
    const { comment } = getValues();
    setValue("comment", "");

    const {
      data: {
        createComment: { ok, id },
      },
    } = result;

    if (ok) {
      const newComment = {
        __typename: "Comment",
        createAt: Date.now(),
        id,
        isMe: true,
        comment,
        user: {
          ...userData.me,
        },
      };

      // console.log(newComment);

      cache.modify({
        id: `Photo:${photoId}`,
        fields: {
          comments(prev) {
            return [...prev, newComment];
          },
        },
      });
    }
  };

  const [createCommentMutation, { loading }] = useMutation(
    CREATE_COMMENT_MUTATION,
    {
      update: createCommentUpdate,
    }
  );

  const onValid = (data) => {
    const { comment } = data;
    // console.log(comment);

    if (loading) return;

    createCommentMutation({
      variables: {
        photoId,
        comment,
      },
    });
  };

  return (
    <CommentsContainer>
      <Comment author={author} caption={caption} />
      <CommentCount>댓글 {commentsNumber}개</CommentCount>
      {comments?.map((comment) => (
        <Comment
          key={comment.id}
          id={comment.id}
          photoId={photoId}
          author={comment.user.username}
          caption={comment.comment}
          isMe={comment.isMe}
        />
      ))}
      <div>
        <form onSubmit={handleSubmit(onValid)}>
          <input
            {...register("comment", { required: true })}
            name="comment"
            type="text"
            placeholder="Write a comment "
          />
        </form>
      </div>
    </CommentsContainer>
  );
}

export default Comments;
