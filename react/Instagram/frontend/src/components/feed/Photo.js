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
      const fragmentId = `Photo:${id}`;
      const fragment = gql`
        # 형식
        # frgament 아무이름 on Type이름 : {

        # }
        fragment isLiked on Photo {
          # isLike를 수정할거야
          isLiked
          likes
        }
      `;

      cache.writeFragment({
        // apollo cache에 있는 형식과 같이 적어줌
        // 어떤 id를 업데이트할거냐
        // photo : id 를 업데이트한다
        id: fragmentId,
        // cache에서 내가 원하는 object의 일부분을 수정할것인가?
        fragment,
        // 캐시에 어떤걸 쓸거야 // 캐시가 수정되면 prisma도 수정됨
        data: {
          isLiked: !isLiked,
          likes: isLiked ? likes - 1 : likes + 1,
        },
      });
    }
  };

  const [likePhotoMutation, { loading }] = useMutation(LIKE_PHOTO_MUTATION, {
    variables: {
      id,
    },
    // likePhotoMutation 이 실행된후에 다시 리펫치(다시 요청)하는 방식인데
    // 이것을 하면 캐시를 건드리는게아닌 다시 데이터를 받아와서 처리하는것임
    // 정말 적은 쿼리라면 ㄱㅊ겠지만 많은 요청을 받는 FEED_QUERY의 경우 이점이 없음.
    // refetchQueries: [{ query: FEED_QUERY }],
    // 백엔드에서 데이터를 받아서 아폴로캐시에 직접 연결해주는 update
    update: updateToggleLike,
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
        <Comments
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
