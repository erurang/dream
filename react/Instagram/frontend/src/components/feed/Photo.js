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
import { FEED_QUERY } from "../../screens/Home";

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

function Photo({ id, user, file, isLiked, likes }) {
  const [likePhotoMutation, { loading }] = useMutation(LIKE_PHOTO_MUTATION, {
    variables: {
      id,
    },
    // likePhotoMutation 이 실행된후에 다시 리펫치(다시 요청)하는 방식인데
    // 이것을 하면 캐시를 건드리는게아닌 다시 데이터를 받아와서 처리하는것임
    // 정말 적은 쿼리라면 ㄱㅊ겠지만 많은 요청을 받는 FEED_QUERY의 경우 이점이 없음.
    refetchQueries: [{ query: FEED_QUERY }],
  });

  return (
    <PhotoContainer>
      <PhotoHeader>
        <Avatar lg url={user.avatar} />
        <Username>{user.username}</Username>
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
      </PhotoData>
    </PhotoContainer>
  );
}

export default Photo;
