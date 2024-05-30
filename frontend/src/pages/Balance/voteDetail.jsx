import React, { useState } from "react";
import styled from "styled-components";
import heart from "../../img/Component4.png";
import save from "../../img/Component3.png";
import comment1 from "../../img/comment.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Config from "../../config/config";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

// Styled-components 정의
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 2vw;
`;

const Content = styled.div`
  width: 60%;
  background-color: #fff;
  padding: 2vw;
`;

const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  width: 2.2vw;
  height: 2.2vw;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 1vw;
`;

const UserName = styled.div`
  color: #000;
  font-family: "PretendardVariable";
  font-size: 0.75vw;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 22.5px */
`;

const Meta = styled.div`
  color: #1dac67;
  display: flex;
  justify-content: center;
  font-family: "PretendardVariable";
  font-size: 0.75vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Title = styled.h2`
  margin-top: 1vw;
  font-size: 1vw;
  color: #000;
  font-family: "PretendardVariable";
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
`;

const PollOptions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1vw;
`;

const OptionButton = styled.button`
  width: 48%;
  padding: 1vw;
  font-size: 1vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  background-color: #eee;
  border: 1px solid #eee;
  border-radius: 0.5vw;

  &:hover {
    background-color: #ddd;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1vw;
`;

const InfoBox = styled.div`
  display: flex;
  gap: 0.8vw;
  align-items: center;
  justify-content: center;
`;

const ActionButton = styled.button`
  display: flex;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  display: flex;
  align-items: center;

  &:hover {
    color: #000;
  }
`;

const CommentsSection = styled.div`
  margin-top: 2vw;
`;

const CommentInput = styled.textarea`
  width: 96%;
  height: 5vw;
  padding: 1vw;
  border-radius: 0.2vw;
  border: 0.05vw solid #cdcdcd;

  background: #f9f9fa;
  resize: none;
`;

const CommentButton = styled.button`
  display: flex;
  width: 6vw;
  height: 2.5vw;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0.2vw;
  background: ${({ isClickable }) => (isClickable ? "#558DFA" : "#efefef")};
`;

const Time = styled.span`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 0.65vw;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 19.5px */
`;

const Comment = styled.div`
  margin-top: 1vw;
  padding: 1vw;
  border-radius: 4px;
  background: #f9f9fa;
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CommentContent = styled.div`
  margin-top: 0.5vw;
  color: var(--black-text, #191919);
  font-family: "Pretendard Variable";
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 600;
  line-height: 175%; /* 28px */
`;

const Context = styled.div`
  color: #000;
  font-family: "PretendardVariable";
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 21px */
  margin-top: 0.8vw;
`;

const CommentTitle = styled.div`
  color: #000;
  font-family: "PretendardVariable";
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 0.6vw;
`;

// 드롭다운 메뉴 스타일링
const MenuIcon = styled.div`
  cursor: pointer;
  position: relative;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 2vw;
  right: 0;
  width: 4vw;
  background: white;
  border: 0.05vw solid #ccc;
  box-shadow: 0 0.2vw 0.4vw rgba(0, 0, 0, 0.1);
  z-index: 1;
  color: #000;
  font-family: "PretendardVariable";
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.75vw;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 22.5px */
`;

const Count = styled.span`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 0.6vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 0.2vw;
`;

const Submit = styled.div`
  color: ${({ isClickable }) => (isClickable ? "#fff" : "#aeaeae")};
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const DropdownItem = styled.div`
  padding: 0.5vw 1vw;
  cursor: pointer;
  border-bottom: 0.05vw solid #eee;

  &:hover {
    background-color: #f1f1f1;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 0.23vw;
  margin-top: 1.2vw;
`;

const PostHeader = ({ isAuthor }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const [data, setData] = useState([]);
  const [createdAt, setCreatedAt] = useState("2024-05-30");
  const { postId } = useParams(); // URL에서 postId를 가져옵니다.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${Config.baseURL}/api/careerdoctor/posts/${postId}`,
          {
            method: "GET",
            headers: Config.headers,
          }
        );

        const data = await response.json();
        console.log("/////////////////////");
        console.log(data);

        if (response.status === 201) {
          setData(data);
          setCreatedAt(data.data.createdAt);
        } else {
          alert("데이터를 불러오는데 실패했습니다.");
        }
      } catch (error) {
        alert("에러 발생");
        console.log(error);
      }
    };

    fetchData();
  }, []);

  function calculateTimeAgo(inputTime) {
    const now = new Date();
    const past = new Date(inputTime);

    const diffInMs = now - past;

    if (diffInMs < 1000 * 60 * 60 * 24) {
      const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
      return `${diffInHours}시간 전`;
    } else {
      const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
      return `${diffInDays}일 전`;
    }
  }

  const timeAgo = calculateTimeAgo(createdAt);

  return (
    <HeaderBox>
      <UserInfo>
        <Avatar />
        <InfoBox>
          <UserName>{data.length !== 0 && data.data.userId}</UserName>
          <Meta>👍 스펙 양호</Meta> <Time>{timeAgo}</Time>
        </InfoBox>
      </UserInfo>
      <MenuIcon onClick={toggleDropdown}>
        ⋮
        {isDropdownOpen && (
          <DropdownMenu>
            <DropdownItem>수정</DropdownItem>
            <DropdownItem>삭제</DropdownItem>
            {!isAuthor && <DropdownItem>신고</DropdownItem>}
          </DropdownMenu>
        )}
      </MenuIcon>
    </HeaderBox>
  );
};

const CommentComponent = ({ isAuthor }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const [commentData, setCommentData] = useState([]);
  const { postId } = useParams(); // URL에서 postId를 가져옵니다.

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         `${Config.baseURL}/api/careerdoctor/${postId}/comments`,
  //         {
  //           method: "GET",
  //           headers: Config.headers,
  //         }
  //       );

  //       const data = await response.json();
  //       console.log("/////////////////////");
  //       console.log(data);

  //       if (response.status === 200) {
  //         setCommentData(commentData);
  //       } else {
  //         alert("데이터를 불러오는데 실패했습니다.");
  //       }
  //     } catch (error) {
  //       alert("에러 발생");
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <Comment>
        <CommentHeader>
          <UserInfo>
            <Avatar />
            <InfoBox>
              <UserName>박태범</UserName>
              <Meta>👍 스펙 양호 </Meta> <Time>3시간 전</Time>
            </InfoBox>
          </UserInfo>
          <MenuIcon onClick={toggleDropdown}>
            ⋮
            {isDropdownOpen && (
              <DropdownMenu>
                <DropdownItem>수정</DropdownItem>
                <DropdownItem>삭제</DropdownItem>
                {!isAuthor && <DropdownItem>신고</DropdownItem>}
              </DropdownMenu>
            )}
          </MenuIcon>
        </CommentHeader>
        <CommentContent>저는 혼자하는게 좋을거 같아요.</CommentContent>
      </Comment>
      <Comment>
        <CommentHeader>
          <UserInfo>
            <Avatar />
            <InfoBox>
              <UserName>한지운</UserName>
              <Meta>👍 스펙 양호 </Meta> <Time>1시간 전</Time>
            </InfoBox>
          </UserInfo>
          <MenuIcon onClick={toggleDropdown}>
            ⋮
            {isDropdownOpen && (
              <DropdownMenu>
                <DropdownItem>수정</DropdownItem>
                <DropdownItem>삭제</DropdownItem>
                {!isAuthor && <DropdownItem>신고</DropdownItem>}
              </DropdownMenu>
            )}
          </MenuIcon>
        </CommentHeader>
        <CommentContent>
          저도 학원 다녀봤는데 혼자 하는게 좋은거 같아요.
        </CommentContent>
      </Comment>
    </>
  );
};

const VoteDetail = () => {
  const [isAuthor, setIsAuthor] = useState(true); // 작성자 여부 (예시로 true로 설정)
  const [comment, setComment] = useState("");
  const [isClickable, setIsClickable] = useState(false);
  const [userId, setUserId] = useState("");

  const handleComment = (value) => {
    setComment(value);
    setIsClickable(value.trim().length > 0);
  };

  const [data, setData] = useState([]);
  const { postId } = useParams(); // URL에서 postId를 가져옵니다.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${Config.baseURL}/api/careerdoctor/posts/${postId}`,
          {
            method: "GET",
            headers: Config.headers,
          }
        );

        const data = await response.json();
        console.log(data);

        if (response.status === 201) {
          setData(data);
        } else {
          alert("데이터를 불러오는데 실패했습니다.");
        }
      } catch (error) {
        alert("에러 발생");
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleCreate = async () => {
    try {
      const response = await fetch(
        `${Config.baseURL}/api/careerdoctor/comments`,
        {
          method: "POST",
          headers: Config.headers,
          body: JSON.stringify({
            userId: userId,
            postId: postId,
            content: comment,
          }),
        }
      );

      const data = await response.json();
      console.log(data);

      if (response.status === 200) {
        alert("게시글 댓글 등록 성공.");
        const userId = localStorage.getItem("userId");
        setUserId(userId);
      } else {
        alert("댓글 실패");
      }
    } catch (error) {
      alert("에러 발생");
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Content>
          <PostHeader isAuthor={isAuthor} />
          <Title>{data.length !== 0 && data.data.postTitle}</Title>
          <Context>{data.length !== 0 && data.data.postContent}</Context>
          <PollOptions>
            <OptionButton>학원 다닌다</OptionButton>
            <OptionButton>혼자 한다</OptionButton>
          </PollOptions>
          <Actions>
            <ActionButton>
              <img src={heart} style={{ width: "1.6vw", height: "1.6vw" }} />
              <Count>10</Count>
            </ActionButton>
            <ActionButton>
              <img src={save} style={{ width: "1.6vw", height: "1.6vw" }} />
              <Count>3</Count>
            </ActionButton>
            <ActionButton>
              <img src={comment1} style={{ width: "1.6vw", height: "1.6vw" }} />
              <Count>14</Count>
            </ActionButton>
          </Actions>
          <CommentsSection>
            <CommentTitle>댓글</CommentTitle>
            <CommentInput
              placeholder="투표의 배경이 되는 설명을 100자 이내로 작성해주세요."
              value={comment}
              onChange={(e) => handleComment(e.target.value)}
            />
            <ButtonSection>
              <CommentButton isClickable={isClickable}>
                <Submit onClick={handleCreate}>등록</Submit>
              </CommentButton>
            </ButtonSection>
            <CommentComponent isAuthor={isAuthor} />
          </CommentsSection>
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default VoteDetail;
