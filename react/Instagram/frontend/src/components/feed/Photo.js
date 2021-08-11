import { FatText } from "../shared";
import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Avatar from "../Avatar";
import { gql, useMutation } from "@apollo/client";
import Comments from "./Comments";
import { Link } from "react-router-dom";

const LIKE_PHOTO_MUTATION = gql`
  mutation likePhoto($id: Int!) {
    likePhoto(id: $id) {
      ok
      error
    }
  }
`;

const PhotoContainer = styled.div`
  background-color: white;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.borderColor};
  margin-bottom: 60px;
  max-width: 615px;
`;

const PhotoHeader = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(239, 239, 239);
`;

const Username = styled(FatText)`
  margin-left: 15px;
`;

const PhotoFile = styled.img`
  min-width: 100%;
  width: 100%;
`;

const PhotoData = styled.div`
  padding: 12px 15px;
`;

const PhotoActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
  }
  svg {
    font-size: 20px;
  }
`;

const PhotoAction = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;

const Likes = styled(FatText)`
  margin-top: 15px;
  display: block;
`;

function Photo({
  id,
  user,
  file,
  isLiked,
  likes,
  caption,
  commentsNumber,
  comments,
}) {
  // console.log(comments);
  // 1번째 인자는 cache는 아폴로의 캐시, 2번째 인자는 백엔드에서 넘어온 데이터,
  const updateToggleLike = (cache, result) => {
    // console.log(cache, result);

    const {
      data: {
        likePhoto: { ok },
      },
    } = result;

    if (ok) {
      const photoId = `Photo:${id}`;
      cache.modify({
        id: photoId,
        fields: {
          isLiked(cachedValue) {
            return !cachedValue;
          },
          likes(prev) {
            if (isLiked) return prev - 1;
            else return prev + 1;
          },
        },
      });
    }
  };

  const [likePhotoMutation, { loading }] = useMutation(LIKE_PHOTO_MUTATION, {
    variables: {
      id,
    },
    update: updateToggleLike,
  });

  return (
    <PhotoContainer>
      <PhotoHeader>
        <Link to={`/users/${user.username}`}>
          <Avatar lg url={user.avatar} />
        </Link>
        <Link to={`/users/${user.username}`}>
          <Username>{user.username}</Username>
        </Link>
      </PhotoHeader>
      <PhotoFile src={file} />
      <PhotoData>
        <PhotoActions>
          <div>
            <PhotoAction onClick={likePhotoMutation}>
              <FontAwesomeIcon
                style={{ color: isLiked ? "tomato" : "inherit" }}
                icon={isLiked ? SolidHeart : faHeart}
              />
            </PhotoAction>
            <PhotoAction>
              <FontAwesomeIcon icon={faComment} />
            </PhotoAction>
            <PhotoAction>
              <FontAwesomeIcon icon={faPaperPlane} />
            </PhotoAction>
          </div>
          <div>
            <FontAwesomeIcon icon={faBookmark} />
          </div>
        </PhotoActions>
        <Likes>{`좋아요 ${likes}`}</Likes>
        <Comments
          photoId={id}
          author={user.username}
          caption={caption}
          comments={comments}
          commentsNumber={commentsNumber}
        />
      </PhotoData>
    </PhotoContainer>
  );
}

export default Photo;
